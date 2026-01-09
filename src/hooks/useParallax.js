import { useRef, useEffect } from "react";

export default function useParallax(ref, factor = 0.02) {
  const posRef = useRef({ x: 0, y: 0, raf: null });

  useEffect(() => {
    function onMove(e) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) * factor;
      const y = (e.clientY - h / 2) * factor;
      posRef.current.x = x;
      posRef.current.y = y;
      if (!posRef.current.raf) {
        posRef.current.raf = requestAnimationFrame(() => {
          posRef.current.raf = null;
          if (ref.current) {
            ref.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
          }
        });
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [ref, factor]);
}
