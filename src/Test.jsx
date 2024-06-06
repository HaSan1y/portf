import Testanim from "./testanim/Testanim"
import { motion } from 'framer-motion';

export const Test = () => {
   const variants = { visible: (i) => ({ opacity: 1, x: 250, transition: { duration: i * 0.5, type: 'tween', stiffness: 200, damping: 1, staggerChildren: 0.2 } }) }

   const items = ['item1', 'item2', 'item3', 'item4'];
   return (
      <div className="course">
         <motion.ul variants={variants} animate={open ? 'visible' : 'hidden'}>
            {items.map((item, i) =>
               <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
            )}
         </motion.ul>
         <Testanim />
      </div >
   )
}

export default Test
