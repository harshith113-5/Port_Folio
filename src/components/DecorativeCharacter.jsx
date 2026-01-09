import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function DecorativeCharacter({ src, alt = "Profile" }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  function handleMouseMove(e) {
    if (reduce || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -6; // up/down
    const rotateY = ((x / rect.width) - 0.5) * 6;  // left/right

    ref.current.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }

  function resetTilt() {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  return (
    <motion.div
      className="relative w-[220px] md:w-[280px]"
      animate={reduce ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ willChange: "transform" }}
    >
      {/* PROFILE CARD */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative rounded-2xl overflow-hidden border border-gray-700 bg-[rgba(255,255,255,0.015)] transition-transform duration-200"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover block"
          draggable={false}
          width="280px"
  height="360px"
        />
      </div>

      {/* OFFSET ORBIT RING (environmental) */}
      <motion.svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        className="absolute -right-28 top-12 pointer-events-none"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
        style={{ opacity: 0.18 }}
        aria-hidden="true"
      >
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke="rgba(34,211,238,0.18)"
          strokeWidth="2"
        />
      </motion.svg>
    </motion.div>
  );
}
