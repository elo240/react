import React from "react";
import ".././css/header.css";
import LoginDialog from "./LoginDialog";
import {Link} from "react-router-dom";
class MyHeader extends React.Component {
	render() {
		return (
			<div
				id="header"
				className="navbar navbar-expand-lg navbar-light bg-light"
			>
				<Link className="navbar-brand" to="/">
					MyWebsite
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto ml-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/forum">
								Forum
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/list">
								List
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav nav navbar-right">
						<li className="nav-item navbar-right">
							<LoginDialog />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default MyHeader;
