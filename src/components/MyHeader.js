import React from "react";
import ".././css/header.css";
import LoginOut from "./LoginOut";
class MyHeader extends React.Component {
	render() {
		return (
			<div
				id="header"
				className="navbar navbar-expand-lg navbar-light bg-light"
			>
				<a className="navbar-brand" href="index.html">
					MyWebsite
				</a>
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
							<a className="nav-link" href="index.html">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#cards">
								Cards
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#more">
								Register
							</a>
						</li>
					</ul>
					<ul className="navbar-nav nav navbar-right">
						<li className="nav-item navbar-right">
							<LoginOut />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default MyHeader;
