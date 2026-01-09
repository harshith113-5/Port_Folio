import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Pill({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ duration: 0.18 }}
      className={`rounded-full px-4 py-1 text-xs border border-gray-700 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
