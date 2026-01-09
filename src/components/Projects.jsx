import React from "react";
import { motion } from "framer-motion";
import { reveal, staggerContainer } from "../animations";

const demoProjects = [
  { title: "AgriMitra Chatbot", desc: "Built AI-powered assistant for farmers with crop recommendation, disease detection, and pesticide suggestions.Developed a Random Forest model achieving 99% accuracy for recommending crops and CNN MobileNetV2 classifier for plant disease detection across 5 crops with 96% accuracy and Designed a rule-based engine to suggest optimal pesticides. Developed a Random Forest model achieving 99% accuracy for recommending crops and CNN MobileNetV2 classifier for plant disease detection across 5 crops with 96% accuracy and Designed a rule-based engine to suggest optimal pesticides.Integrated Gemini API for intelligent responses and Deep Translator API for bilingual support (Telugu & English).", tags: ["Python", "Flask", "RF", "CNN", "Google Translate API", "MobileNet"] },
  { title: "Skin Disease Detection System", desc: "This project focuses on building an intelligent Skin Disease Detection System using machine learning and deep learning techniques to automatically identify common skin conditions from medical images. The system takes a skin image as input, processes it through a trained convolutional neural network (CNN), and predicts the most probable disease class with high accuracy.", tags: ["Python", "TensorFlow", "CNN", "Flask"] },
  { title: "Voice & Text AI Chatbot for Senior Citizen Healthcare Assistance", desc: "Built a senior-friendly AI chatbot supporting voice and text interaction for basic health guidance and emotional support. Developed the full stack (frontend, backend, and AI integration) with speech-to-text, text-to-speech, and Gemini API–based responses, focusing on accessibility, safety disclaimers, and real-time conversational experience.", tags: ["Gemini API", "Flask", "HTML", "CSS"] },
  { title: "Professional Guide Page for UPSC Aspirants", desc: "Developed a web-based guidance portal for UPSC aspirants that provides easy access to NCERT study materials and previous years’ question papers. Implemented Google Translation API to support multilingual access for regional users and built a clean, responsive front end using HTML, CSS, and JavaScript, focusing on accessibility and ease of use.", tags: ["HTML", "CSS", "JS"] }
];


 

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <motion.h2 variants={reveal} className="text-2xl font-bold mb-8">Projects</motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {demoProjects.map((p, idx) => (
          <motion.div
            key={p.title}
            variants={reveal}
            whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.45)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="border border-gray-700 p-6 rounded bg-[rgba(255,255,255,0.01)]"
            style={{ willChange: "transform" }}
          >
            <h3 className="font-semibold text-textPrimary">{p.title}</h3>
            <p className="text-textSecondary mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 border border-gray-700 rounded text-textSecondary">{t}</span>)}
            </div>
            {/* <div className="mt-4">
              <a href="#" className="text-accent text-sm">View case study →</a>
            </div> */}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
