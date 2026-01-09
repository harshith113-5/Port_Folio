import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import DecorativeCharacter from "./DecorativeCharacter";
import Twinkles from "./Twinkles";
import OrbitRing from "./OrbitRing";
import { Pill } from "./Pill";
import profileImg from "../assets/unnamed-removebg-preview.png";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="hero-glow" />

      {/* extra subtle floating circles */}
      <div className="absolute left-6 top-24 w-8 h-8 rounded-full bg-[rgba(34,211,238,0.06)] pointer-events-none" />
      <div className="absolute right-14 bottom-32 w-6 h-6 rounded-full bg-[rgba(139,92,246,0.05)] pointer-events-none" />

      <Twinkles placements={[
        { x: "8%", y: "16%", scale: 1, delay: 0.2 },
        { x: "22%", y: "34%", scale: 0.7, delay: 0.6 },
        { x: "70%", y: "12%", scale: 0.9, delay: 0.9 },
        { x: "60%", y: "40%", scale: 0.6, delay: 1.2 },
        { x: "40%", y: "8%", scale: 0.5, delay: 0.5 }
      ]} />

      <motion.div
        className="max-w-5xl mx-auto px-6 w-full z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: centered column */}
          <div className="flex flex-col justify-center items-start md:items-start">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-[44px] font-bold">
              Hi, I’m <span className="text-accent">Harshith</span>
            </motion.h1>

            {/* <motion.h2 variants={fadeUp} className="text-accent mt-3">
              Applied Machine Learning Engineer
            </motion.h2> */}

            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-textSecondary">
              I design and build intelligent systems that transform raw data into deployable ML applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm text-textMuted max-w-lg"
            >
              I care about correctness, performance, and building systems that actually ship.
            </motion.p>


            <motion.div variants={fadeUp} className="mt-10 flex gap-6">
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-accent text-black font-medium accent-glow"
              >
                View Projects
              </a>
              <a
                href="https://github.com/harshith113-5"
                className="px-7 py-3 rounded-lg border border-gray-700 hover:border-accent transition"
              >
                GitHub
              </a>
            </motion.div>

          </div>

          <motion.svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            className="absolute -left-20 -top-20 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ opacity: 0.12 }}
            aria-hidden="true"
          >
            <circle
              cx="110"
              cy="110"
              r="90"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
            />
          </motion.svg>

          {/* RIGHT: character inside shaped container, centered vertically */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <DecorativeCharacter src={profileImg} alt="profile" />
              <OrbitRing size={180} />
              {/* <div className="absolute -bottom-6 right-8"><Pill>05+ Years</Pill></div> */}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-textMuted text-sm">
        ↓ Scroll
      </div>



    </section>

  );
}
