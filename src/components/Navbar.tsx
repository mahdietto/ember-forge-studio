import { Link, useLocation } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0)", "rgba(5,5,5,0.7)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"]);
  const loc = useLocation();

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b transition-colors"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          {profile.firstName} <span className="text-ember-gradient">{profile.lastName}</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 border border-white/5">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  active ? "text-[oklch(0.65_0.24_35)]" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ background: "oklch(0.65 0.24 35 / 0.12)" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center rounded-full bg-ember-gradient text-black font-semibold text-sm px-5 py-2.5 shadow-ember hover:shadow-ember-lg transition-shadow"
        >
          Contact Me
        </Link>
      </nav>
    </motion.header>
  );
}
