import React from "react";
import { motion } from "framer-motion";

export default function OrbitRing({ size = 140 }) {
  const dash = 2 * Math.PI * (size / 2 - 6);
  return (
    <motion.svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="pointer-events-none opacity-20 absolute right-8 top-12" aria-hidden="true">
      <motion.circle
        cx={size/2}
        cy={size/2}
        r={size/2 - 6}
        fill="none"
        stroke="rgba(34,211,238,0.18)"
        strokeWidth="2"
        strokeDasharray={dash}
        initial={{ strokeDashoffset: dash }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
