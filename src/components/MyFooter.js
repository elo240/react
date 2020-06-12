import React from "react";
import { animateScroll as scroll } from "react-scroll";
import ".././css/footer.css";

class MyFooter extends React.Component {
	render() {
		return (
			<footer className="footer row fixed-bottom">
				<div className="col-sm text-center">Copyright ©</div>
				<div className="col-sm text-right">
					<button
						className="btn btn-primary"
						style={{ width: 100 }}
						onClick={scroll.scrollToTop}
					>
						To the top
					</button>
				</div>
			</footer>
		);
	}
}

export default MyFooter;
