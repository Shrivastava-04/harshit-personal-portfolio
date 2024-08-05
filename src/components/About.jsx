import React from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <motion.h1
        className="text-4xl mt-20 text-center font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>
      <motion.h3
        className="text-6xl p-4 uppercase lg:text-[8rem]"
        initial={{ opacity: 1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text1}
      </motion.h3>
      <motion.p
        initial={{ opacity: 1, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mr-24 pl-4 text-lg leading-loose"
      >
        {ABOUT.text2}
      </motion.p>
    </div>
  );
};

export default About;
