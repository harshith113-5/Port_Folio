import React from "react";
import { motion } from "framer-motion";
import { reveal } from "../animations";

export default function About() {
  return (
    <motion.section
    id="about"
      className="py-20"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="max-w-2xl text-textSecondary">
        I’m a final-year CSE-AIML student focused on building applied machine learning systems.
        My work spans data analysis, model development, and backend deployment using Python and Flask.
        I enjoy breaking complex problems into structured, testable solutions and turning ideas into working products.
        Currently seeking entry-level roles in ML, backend, or data-driven engineering teams.
      </p>
    </motion.section>
  );
}
