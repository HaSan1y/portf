import { useRef } from "react";
import "./conact.scss";
import { motion, useInView } from "framer-motion";
const variants = {
   initial: {
      y: 500,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.1,
      },
   },
};
const Contact = () => {
   const ref = useRef();
   const isInView = useInView(ref, { margin: "-100px" });
   return (
      <motion.div ref={ref} className="conact" variants={variants} initial="initial" whileInView="animate">
         <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Lets work together</motion.h1>
            <motion.div className="item" variants={variants}>
               <h2>Mail</h2>
               <span>hello@react.dev</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
               <h2>address</h2>
               <span>hello street</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
               <h2>Phone</h2>
               <span>+1 2354 5678</span>
            </motion.div>
         </motion.div>
         <div className="formContainer">
            <motion.div className="phonesvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 1, duration: 2 }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="450px" height="450px" viewBox="0 0 33 33">
                  <motion.path
                     strokeWidth={0.2}
                     fill="none"
                     initial={{ pathLength: 0 }}
                     animate={isInView && { pathLength: 1 }}
                     transition={{ duration: 2 }}
                     d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  // stroke-width="2"
                  />
               </svg>
            </motion.div>
            <motion.form action="" id="x" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3, duration: 2 }}>
               <input type="text" placeholder="name" required />
               <input type="email" placeholder="email" required />
               <textarea name="" rows={6} placeholder="Message" id=""></textarea>
               <button>submit</button>
            </motion.form>
         </div>
      </motion.div>
   );
};

export default Contact;
