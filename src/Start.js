import React from "react";
import MyHeader from "./components/MyHeader";
import { observer } from "mobx-react";
import MainContainer from "./components/MainContainer";
import MyFooter from "./components/MyFooter";
import "./css/style.css";
import UserStore from "./stores/UserStore";
class Start extends React.Component {
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
		if (UserStore.loading) {
			return <div className="container-fluid">Loading, please wait</div>;
		} else {
			return (
				<div className="container-fluid">
					<MyHeader />
					<MainContainer />
					<MyFooter />
				</div>
			);
		}
	}
}
export default observer(Start);
