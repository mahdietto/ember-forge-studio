import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 300, mass: 0.4 });
  const sy = useSpring(y, { damping: 25, stiffness: 300, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[200] h-2 w-2 rounded-full bg-[oklch(0.78_0.2_55)]"
      />
      <motion.div
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[199] h-10 w-10 rounded-full"
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, oklch(0.65 0.24 35 / 0.4), transparent 70%)", filter: "blur(8px)" }} />
      </motion.div>
    </>
  );
}
