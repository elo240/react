import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserStore from "../stores/UserStore";

class LoginDialog extends React.Component {
	constructor() {
		super();
		this.state = {
			open: false,
			username: "",
			password: "",
			buttonDisabled: false,
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.password !== "" && this.state.username.trim !== "") {
			this.handleClose();
			this.doLogin();
		} else if (
			this.state.password === "" &&
			this.state.username.trim === ""
		) {
			alert(`Please fill the fields`);
		}
	};
	resetForm() {
		this.setState({
			username: "",
			password: "",
			buttonDisabled: false,
		});
	}
	async doLogin() {
		this.setState({ buttonDisabled: true });
		try {
			let res = await fetch("/login", {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password,
				}),
			});
			let result = await result.json();
			if (result && result.success) {
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;
			} else if (result && result.success === false) {
				this.resetForm();
				alert(result.msg);
			}
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.handleClickOpen}
					disabled={this.state.buttonDisabled}
				>
					Login
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Please log in
					</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="username"
							name="username"
							required
							label="Username"
							type="text"
							onChange={this.handleChange}
							value={this.state.username}
							fullWidth
						/>
						<TextField
							margin="dense"
							id="password"
							name="password"
							required
							label="Password"
							type="password"
							onChange={this.handleChange}
							value={this.state.password}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Close
						</Button>
						<Button
							onClick={this.handleSubmit}
							color="primary"
							disabled={this.state.buttonDisabled}
						>
							Login
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default LoginDialog;
