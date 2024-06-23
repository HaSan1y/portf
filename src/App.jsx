import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Splin from "./components/spline/Spline";
// import Test from "./Test";  //testing framer-motion

const App = () => {
	return (
		<div>
			<Cursor />
			{/* <Test /> testframermotion*/}

			<section id="Homepage">
				<NavBar />
				<Hero />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section id="">
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<section id="">
				<Portfolio />
			</section>
			<section id=""></section>
			<section id=""></section>
			<section id="Contact">
				<Contact />
			</section>
			<section>
				{/* <Splin /> */}
			</section>
		</div>
	);
};

export default App;
