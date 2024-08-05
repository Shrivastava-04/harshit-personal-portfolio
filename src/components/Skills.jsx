import React from "react";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto lg:px-20">
      <h2 className="mb-12 mt-20 text-4xl text-center">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
      >
        {SKILLS.map((skills, index) => (
          <motion.div
            variants={itemsVariants}
            key={index}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center">
              {skills.icon}
              <h3 className="px-6 text-xl lg:text-3xl">{skills.name}</h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400">
              {skills.experience}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
