import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import './portfolio.scss';
import { useRef } from "react";

const items = [
   {
      id: 1, title: "react commerce", img: "/people.webp", desc: "asdfghjklöäqwertzuiop",
   },
   {
      id: 2, title: "next.js blog", img: "/people.webp", desc: "asdfghjklöäqwertzuiop",
   },
   {
      id: 3, title: "vanilla js", img: "people.webp", desc: "asdfghjklöäqwertzuiop",
   }
];
const Single = ({ item }) => {
   const ref = useRef();
   const { scrollYProgress } = useScroll({ target: ref, /*offset: ["end end", "start start"] */ });
   const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

   return (
      <section>
         <div className="container">
            <div className="wrapper">
               <div className="imageContainer" ref={ref}>

                  <img src={item.img} alt="" />
               </div>
               <motion.div className="textContainer" style={{ y }}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <button>See Demo</button>
               </motion.div>
            </div>
         </div>
      </section >
   )
};

const Portfolio = () => {
   const ref = useRef()

   const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
   return (
      <div className='portfolio' ref={ref}>
         <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
         </div>
         {items.map((item) => (
            <Single item={item} key={item.id} />
         ))}
      </div>
   )
}

export default Portfolio
