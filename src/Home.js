import React from "react";
import LogOrRegister from "./components/LogOrRegister";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
class MainContainer extends React.Component {
	render() {
		return (
			<main className="container">
				<div id="carousel" className="row">
					<div className="col-12">
						<Carousel />
					</div>
				</div>
				<div className="row">
					<section className="jumbotron">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Praesent dictum nisi sed ultricies
							consectetur. Pellentesque vestibulum viverra risus
							nec convallis. Nunc rutrum, dolor vel tempus
							accumsan, ligula quam finibus ante, non varius
							lectus nisi vel urna. Vestibulum tincidunt, est sed
							molestie ultrices, augue purus varius lacus, ut
							placerat tellus quam id turpis. Cras vel dui justo.
							Nulla sit amet risus mauris. Curabitur hendrerit
							purus rutrum risus aliquet, nec condimentum lacus
							fringilla. Nullam sagittis hendrerit lorem at
							hendrerit. Nunc non odio eget lorem faucibus
							ultrices quis sed nibh. Quisque quis urna congue,
							sodales massa ac, sagittis odio. Nunc in aliquam
							risus. Morbi et ante id elit aliquet suscipit a vel
							metus. Praesent sed viverra purus.{" "}
						</p>
					</section>
					<section className="jumbotron">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aliquam eu metus venenatis, dignissim metus
							ut, lacinia eros. Integer quis facilisis mi. In sed
							feugiat ante. Nulla molestie turpis in massa
							facilisis tincidunt. Sed nisi dui, convallis at
							aliquam vitae, finibus quis tortor. Integer felis
							enim, tempor ut lectus eu, consectetur posuere
							velit. Cras sed ligula libero. Praesent nisl urna,
							accumsan nec mauris ac, semper ultrices justo. In
							varius pharetra mauris, in porttitor magna
							vestibulum sit amet. Aliquam tincidunt turpis neque,
							ut blandit est dapibus quis.{" "}
						</p>
					</section>
				</div>
				<Cards />
				<div className="row" id="#more">
					<div className="col-lg-4">
						<LogOrRegister />
					</div>
				</div>
			</main>
		);
	}
}

export default MainContainer;
