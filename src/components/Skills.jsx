import React from "react";
import { motion } from "framer-motion";
import { reveal, staggerContainer } from "../animations";

const skills = {
  "Languages": {
    desc: "Core programming languages used for problem solving and system development.",
    items: ["Python", "Java", "JavaScript"]
  },
  "ML & Data": {
    desc: "Tools and libraries for building, training, and evaluating ML models.",
    items: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas"]
  },
  "Backend": {
    desc: "Server-side development and API design for ML-driven systems.",
    items: ["Flask", "REST APIs", "SQL"]
  },
  "Frontend": {
    desc: "UI development for dashboards and portfolio-grade interfaces.",
    items: ["HTML", "CSS", "React"]
  }
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      {/* Section heading */}
      <motion.h2
        variants={reveal}
        className="text-2xl font-bold mb-12"
      >
        Skills
      </motion.h2>

      {/* Skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([group, { desc, items }]) => (
          <motion.div
            key={group}
            variants={reveal}
            className="card card-hover p-7"
          >
            <h3 className="font-semibold text-lg mb-2">
              {group}
            </h3>

            <p className="text-sm text-textSecondary mb-4 leading-relaxed">
              {desc}
            </p>

            <ul className="space-y-1 text-sm text-textMuted">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
