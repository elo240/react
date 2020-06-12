import React from "react";
import cardsData from "../cards.json";
import Card from "./Card";

class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: "", sort: "asc" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}
	render() {
		let cardsTemp = cardsData;
		const cards = cardsTemp
			.filter((card) =>
				card.date.toLowerCase().includes(this.state.query.toLowerCase())
			)
			.sort((a, b) => {
				if (this.state.sort === "asc") {
					return a.date > b.date ? 1 : -1;
				} else if (this.state.sort === "desc") {
					return a.date > b.date ? -1 : 1;
				} else if (this.state.sort === "alf") {
					return a.title > b.title ? 1 : -1;
				} else {
					return 1;
				}
			})
			.map((item) => {
				return <Card key={item.id} item={item} />;
			});
		return (
			<div>
				<form>
					Sort:&nbsp;
					<select name="sort" onChange={this.handleChange}>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
						<option value="alf">Alfabethic</option>
					</select>
					<br />
					<label style={{ paddingTop: 6 }}>Date query&nbsp;</label>
					<input
						name="query"
						value={this.state.query}
						onChange={this.handleChange}
						placeholder="query"
						type="text"
					/>
				</form>
				<div id="cards" className="row">
					{cards}
				</div>
			</div>
		);
	}
}

export default Cards;
