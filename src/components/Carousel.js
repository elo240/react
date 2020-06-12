import React from "react";
import CarouzelItem from "./CarouselItem";
import carouzelData from "../carousel.json";
class Craousel extends React.Component {
	render() {
		const carouzelItems = carouzelData.map((item) => {
			return item.id === 1 ? (
				""
			) : (
				<CarouzelItem key={item.id} item={item} />
			);
		});
		return (
			<div
				id="carouselID"
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src={carouzelData[0].imgUrl}
							alt="0 slajd"
						/>
					</div>
					{carouzelItems}
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselID"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselID"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}
export default Craousel;
