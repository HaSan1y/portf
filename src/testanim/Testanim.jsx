import { useState } from "react"
import { motion } from 'framer-motion';
// isvisible and export is for framer-motion export default does'nt work with framer motion somehow

const Testanim = () => {
   const [open, setOpen] = useState(false)
   return (
      <div className="course">
         <motion.div
            className='box'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 10, delay: 2 }}
            whileHover={{ opacity: 1, scale: 3 }}
            whileTap={{ opacity: 0, delay: 2 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            // variants={variants}
            // animate={open ? 'visible' : 'hidden'}
            dragMomentum
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            whileDrag={{ scale: 1.5 }}
            dragSnapToOrigin
            dragDirectionLock >
            asdf
         </motion.div>
         <button onClick={() => setOpen(prev => !prev)}>click </button>
      </div >
   )
}

export default Testanim