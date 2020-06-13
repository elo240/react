import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserStore from "../stores/UserStore";

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class LoginDialog extends React.Component {
	constructor() {
		super();
		this.match = "";
		this.state = {
			open: false,
			username: "",
			email: "",
			password1: "",
			password2: "",
			buttonDisabled:true
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		if(this.state.username === "" ||
		this.state.password1 === "" ||
		this.state.password2 === "" ||
		this.state.email === ""){
			this.setState({buttonDisabled:true});
		}else{
			this.setState({buttonDisabled:false});
		}
	};
	handleSubmit = (event) => {
		event.preventDefault();
		if (
			this.state.username.trim() !== "" &&
			this.state.password1.trim() !== "" &&
			emailRegex.test(this.state.email) &&
			this.match === ""
		) {
			this.setState({ buttonDisabled: true });
			this.handleClose();
			this.doRegister();
		} else if (
			this.state.username === "" ||
			this.state.password1 === "" ||
			this.state.password2 === "" ||
			this.state.email === ""
		) {
			alert(`Please fill the fields`);
		} else if (this.match !== "") {
			alert("Passwords don't match");
		} else {
			alert("Please input correct email adress");
		}
	};
	async doRegister() {
		try {
			let res = await fetch("/register", {
				method: "post",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: this.state.email,
					username: this.state.username,
					password: this.state.password1,
				}),
			});
			let result = await res.json();
			if (result && result.success) {
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;
			} else if (result && result.success === false) {
				alert(result.msg);
			}
		} catch (e) {
			console.log(e);
		}
		this.setState({ buttonDisabled: false });
	}
	render() {
		if (this.state.password1 !== this.state.password2) {
			this.match = "Passwords don't match";
		}else{
			this.match = "";
		}
		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.handleClickOpen}
				>
					Register
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Register</DialogTitle>
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
							id="email"
							name="email"
							required
							label="Email Address"
							type="email"
							onChange={this.handleChange}
							value={this.state.email}
							fullWidth
						/>
						<TextField
							margin="dense"
							id="password1"
							name="password1"
							required
							label="Password"
							type="password"
							onChange={this.handleChange}
							value={this.state.password1}
							fullWidth
						/>
						<TextField
							margin="dense"
							id="password2"
							name="password2"
							required
							label="Confirm password"
							type="password"
							onChange={this.handleChange}
							value={this.state.password2}
							fullWidth
						/>
						<label>{this.match}</label>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary" disabled={this.state.buttonDisabled}>
							Register
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default LoginDialog;
