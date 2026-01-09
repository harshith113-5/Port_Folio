import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-5 backdrop-blur-md bg-[rgba(11,15,20,0.6)] border-b border-gray-800">

      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Harshith</div>

        <div className="hidden md:flex gap-8 items-center text-textSecondary">
          <a href="#home" className="hover:text-textPrimary">Home</a>
          <a href="#projects" className="hover:text-textPrimary">Projects</a>
          <a href="#about" className="hover:text-textPrimary">About</a>
          {/* <a href="#contact" className="hover:text-textPrimary">Resume</a> */}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 rounded bg-accent text-black font-medium"
          >
            Hire Me
          </a>
          {/* mobile menu placeholder (kept simple) */}
          <button className="md:hidden text-textSecondary">☰</button>
        </div>
      </div>
    </nav>
  );
}
