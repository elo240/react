import React from "react";
import LoginDialog from "./LoginDialog";
import Register from "./Register";
import UserStore from "../stores/UserStore";
class LogOrRegister extends React.Component {
	render() {
		if (UserStore.isLoggedIn===false) {
			return (
				<div id="more" className="Info">
					Want more? <LoginDialog /> 
					or <Register />
				</div>
			);
		} else {
			return (<div>You are logged in as {UserStore.username}</div>) ;	
		}
	}
}
export default LogOrRegister;
