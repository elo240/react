import React from "react";

class CarouselItem extends React.Component {
	render(props) {
		return (
			<div className="carousel-item">
				<img
					className="d-block w-100"
					src={this.props.item.imgUrl}
					alt={this.props.item.id + " slajd"}
				/>
			</div>
		);
	}
}
export default CarouselItem;
