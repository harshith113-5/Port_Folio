import React from "react";

export default function Twinkles({ placements = [] }) {
  return (
    <>
      {placements.map((p, i) => (
        <svg
          key={i}
          width={12 * (p.scale || 1)}
          height={12 * (p.scale || 1)}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            left: p.x,
            top: p.y,
            opacity: 0.9,
            pointerEvents: "none",
            animation: `twinkle 1.6s ${p.delay || 0}s infinite ease-in-out`,
            transform: `translate3d(0,0,0)`,
          }}
          aria-hidden="true"
        >
          <path d="M12 2l1.9 4.9L19 8l-4.1 2.9L15.9 16 12 13.2 8.1 16l1-5.1L5 8l5.1-1.1L12 2z" fill="rgba(255,255,255,0.9)" />
        </svg>
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.6) }
          40% { opacity: 0.9; transform: scale(1.05) }
          100% { opacity: 0; transform: scale(0.8) }
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; opacity: 0.85 !important; }
        }
      `}</style>
    </>
  );
}
