import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
const variants = {
	initial: { x: -500, y: 100, opacity: 0 },
	animate: { x: 0, opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.1 } },
};
const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-100px" });
	return (
		<motion.div className="services" variants={variants} initial="initial" animate={isInView && "animate"} /*whileInView="animate"*/ ref={ref}>
			<motion.div className="textContainer" variants={variants}>
				<p>
					i focus on helping your brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="./people.webp" alt=" " />
					<h1>
						<motion.b whileHover={{ color: "rgb(187, 100, 0)" }}>Unique</motion.b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "rgb(187, 100, 0)" }}>For Your </motion.b> Business.
					</h1>
					<button>What we do?</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div className="box" whileHover={{ background: "rgb(255, 255, 255)", color: "rgb(104, 104, 104)" }}>
					<h2>Branding</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias!</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ background: "rgb(0, 0, 0)", color: "rgb(104, 104, 104)" }}>
					<h2>Branding</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias!</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ background: "rgb(0, 0, 0)", color: "rgb(104, 104, 104)" }}>
					<h2>Branding</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias!</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ background: "rgb(0, 0, 0)", color: "rgb(104, 104, 104)" }}>
					<h2>Branding</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias!</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
