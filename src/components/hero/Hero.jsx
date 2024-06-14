import "./hero.scss";
import { motion } from 'framer-motion'

const sliderVariants = {
   initial: {
      x: 0,
   },
   animate: {
      x: "-220%",
      transition: {
         repeat: Infinity,
         repeatType: "mirror",
         duration: 2,
      }
   },
}
const textVariants = {
   initial: {
      x: -500,
      opacity: 0
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.1,
      }
   },
   scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
         duration: 1,
         repeat: Infinity,
      }
   }
}
const Hero = () => {
   return (
      <div className='hero'>
         <div className="wrapper">

            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
               <motion.h2 variants={textVariants}>H Y</motion.h2>
               <motion.h1 variants={textVariants}>web developer and UI designer</motion.h1>
               <motion.div variants={textVariants} className="buttons">
                  <motion.button variants={textVariants}>hire me</motion.button>
                  <motion.button variants={textVariants}>let&apos;s talk</motion.button>
               </motion.div>
               <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">Writer Content Creator</motion.div>
         </div>
         <div className="imageContainer">
            <img src="" alt="" />
         </div>
      </div >
   )
}

export default Hero