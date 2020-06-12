import React from "react";
import LoginDialog from "./LoginDialog";
import Register from "./Register";
import UserStore from "../stores/UserStore";
class LogOrRegister extends React.Component {
	render() {
		if (UserStore.isLoggedin) {
			return "";
		} else {
			return (
				<div id="more" className="Info">
					Want more? <LoginDialog /> or <Register />
				</div>
			);
		}
	}
}
export default LogOrRegister;
