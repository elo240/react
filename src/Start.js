import React from "react";

import { observer } from "mobx-react";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import Home from "./Home";
import Forum from "./Forum";
import List from "./List";
import {ProtectedRoute} from "./components/ProtectedRoute"
import "./css/style.css";
import UserStore from "./stores/UserStore";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Start extends React.Component {
	async componentDidMount() {
		try {
			let res = await fetch("/isLoggedIn", {
				method: "post",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
			});
			let result = await res.json();
			if (result && result.success) {
				UserStore.loading = false;
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;
				UserStore.userID=result.userID;
			} else {
				UserStore.loading = false;
				UserStore.isLoggedIn = false;
				UserStore.username =""
				UserStore.userID=-1;
			}
		} catch (e) {
			UserStore.loading = false;
			UserStore.isLoggedIn = false;
		}
	}
	render() {
		if (UserStore.isLoggedIn);
		if (UserStore.username);
		if (UserStore.loading) {
			return <div className="container-fluid">Loading, please wait</div>;
		} else {
			return (
				<Router>
					<div className="container-fluid">
						<MyHeader />
						<Switch>
							<Route path="/" exact component={Home}/>
							{/* <Route path="/forum" component={Forum}/> */}
							<ProtectedRoute path="/forum" component={Forum}/>
							<ProtectedRoute path="/list" component={List}/>
							{/* <Route path="/list" component={List}/>  */}
						</Switch>
						<MyFooter />
					</div>
				</Router>
			);
		}
	}
}
export default observer(Start);
