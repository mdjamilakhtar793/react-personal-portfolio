import React from "react";
import { motion } from "framer-motion";
import {
  AiFillCiCircle,
  AiFillMobile,
  AiFillEdit,
  AiFillWindows,
} from "react-icons/ai";

const Servises = () => {
  const animating = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    twoandThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      x: "-100%",
      opacity: 0,
    },
    five: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="servBox1"
          whileInView={animating.whileInView}
          initial={animating.one}
        >
          <h3>+2</h3>
          <p>Years Of Experience</p>
        </motion.div>

        <motion.div
          className="servBox2"
          whileInView={animating.whileInView}
          initial={animating.twoandThree}
        >
          <AiFillCiCircle />
          <span>Web Development</span>
        </motion.div>

        <motion.div
          className="servBox3"
          whileInView={animating.whileInView}
          initial={animating.twoandThree}
          transition={{ delay: 0.2 }}
        >
          <AiFillMobile />
          <span>App Development</span>
        </motion.div>

        <motion.div
          className="servBox4"
          whileInView={animating.whileInView}
          initial={animating.four}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>

        <motion.div
          className="servBox5"
          whileInView={animating.whileInView}
          initial={animating.five}
        >
          <AiFillEdit />
          <span>Videos Eaditing</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Servises;
