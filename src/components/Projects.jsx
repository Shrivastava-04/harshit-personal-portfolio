// import React from "react";
import { PROJECTS } from "../constants";
import Cards from "./Cards";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.4 },
  },
};

const itemsVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center py-8"
      >
        {PROJECTS.slice(0, 9).map((project, index) => (
          <motion.div key={index} variants={itemsVariants}>
            <div className="hover:scale-105 transition ease-in-out hover:-translate-y-1 duration-300 delay-150">
              <Cards
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
