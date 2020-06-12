import React from "react";
import LoginDialog from "./LoginDialog";
import Button from "@material-ui/core/Button";
import UserStore from "../stores/UserStore";
class LoginOut extends React.Component {
	async componentDidMount() {
		try {
			let res = await fetch("/isLoggedIn", {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			let result = await res.json();
			if (result && result.success) {
				UserStore.loading = false;
				UserStore.isLoggedIn = true;
				UserStore.unsername = result.username;
			} else {
				UserStore.loading = false;
				UserStore.isLoggedIn = false;
			}
		} catch (e) {
			UserStore.loading = false;
			UserStore.isLoggedIn = false;
		}
	}
	async doLogout() {
		try {
			let res = await fetch("/logout", {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			let result = await res.json();
			if (result && result.success) {
				UserStore.isLoggedIn = false;
				UserStore.unsername = "";
			}
		} catch (e) {
			console.log(e);
		}
	}
	render() {
		if (UserStore.isLoggedIn) {
			return (
				<Button
					variant="outlined"
					color="primary"
					disabled={false}
					onClick={() => this.doLogout}
				>
					Logout
				</Button>
			);
		} else {
			return <LoginDialog />;
		}
	}
}

export default LoginOut;
