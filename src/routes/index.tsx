import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/profile";
import { SocialIcons } from "@/components/SocialIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.firstName} ${profile.lastName} — ${profile.role}` },
      { name: "description", content: profile.bio },
      { property: "og:title", content: `${profile.firstName} ${profile.lastName} — ${profile.role}` },
      { property: "og:description", content: profile.bio },
    ],
  }),
  component: Home,
});

const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Home() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-8">
          <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio · 2026
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, It's <span className="text-ember-gradient">{profile.firstName}</span>
            <br />
            I'm a <span className="text-ember-gradient">{profile.role}</span>
          </motion.h1>
          <motion.p variants={item} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {profile.bio}
          </motion.p>
          <motion.div variants={item}><SocialIcons /></motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-ember-gradient text-black font-semibold px-7 py-3.5 shadow-ember hover:shadow-ember-lg transition-shadow">
              Hire Me
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 font-semibold hover:border-white/30 transition-colors">
              Contact
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[120%] w-[120%] rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.65 0.24 35 / 0.55), oklch(0.85 0.18 75 / 0.25) 35%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div className="relative h-[420px] w-[420px] max-w-full rounded-full overflow-hidden border border-white/10 shadow-ember-lg">
            <img src={profileImg} alt={`${profile.firstName} ${profile.lastName}`} className="h-full w-full object-cover" width={800} height={800} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
