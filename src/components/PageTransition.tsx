import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [pathKey, setPathKey] = useState(loc.pathname);

  useEffect(() => {
    if (loc.pathname === pathKey) return;
    setShowLoader(true);
    const t1 = setTimeout(() => setPathKey(loc.pathname), 600);
    const t2 = setTimeout(() => setShowLoader(false), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [loc.pathname, pathKey]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showLoader && (
          <>
            <motion.div
              key="curtain-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, transformOrigin: "top" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "bottom" }}
              className="fixed inset-x-0 top-0 h-1/2 z-[150] bg-[#050505]"
            />
            <motion.div
              key="curtain-bot"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, transformOrigin: "bottom" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "top" }}
              className="fixed inset-x-0 bottom-0 h-1/2 z-[150] bg-[#050505]"
            />
            <motion.div
              key="m-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[151] flex items-center justify-center pointer-events-none"
            >
              <div className="absolute h-[40vmin] w-[40vmin] rounded-full"
                style={{ background: "radial-gradient(circle, oklch(0.65 0.24 35 / 0.35), transparent 60%)", filter: "blur(40px)" }} />
              <svg viewBox="0 0 200 200" className="h-[35vmin] w-[35vmin]">
                <defs>
                  <linearGradient id="m-stroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.24 35)" />
                    <stop offset="100%" stopColor="oklch(0.85 0.18 75)" />
                  </linearGradient>
                  <filter id="m-glow"><feGaussianBlur stdDeviation="2" /></filter>
                </defs>
                <motion.text
                  x="100" y="155" textAnchor="middle"
                  fontFamily="var(--font-serif)"
                  fontSize="200" fontWeight="500"
                  fill="none"
                  stroke="url(#m-stroke)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                  style={{ filter: "drop-shadow(0 0 20px oklch(0.65 0.24 35 / 0.6))" }}
                >
                  {profile.initial}
                </motion.text>
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
