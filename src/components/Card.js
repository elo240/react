import React from "react";

class Card extends React.Component {
	render(props) {
		return (
			<div className="col-sm-12 col-md-6 col-lg-4 card text-center">
				<div className="card-body">
					<img
						className="card-img"
						src={this.props.imgUrl}
						alt=""
					/>
					<h3 className="card-title">{this.props.title}</h3>
					<p className="card-text">{this.props.desc}</p>
					<p className="card-text">{this.props.date}</p>
				</div>
			</div>
		);
	}
}
export default Card;
