import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { profile, skills } from "@/lib/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.firstName} ${profile.lastName}` },
      { name: "description", content: `About ${profile.firstName} — background, craft, and the things I obsess over.` },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">About</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 font-display text-5xl md:text-6xl font-bold">
          A developer who <span className="text-ember-gradient">designs</span>.
        </motion.h1>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>I'm {profile.firstName}, a full-stack developer based in the small space between engineering rigor and design taste. For the past 7 years I've shipped products for startups, agencies, and ambitious solo founders.</p>
            <p>I care about <span className="text-foreground">details</span> — the easing on a button, the rhythm of a paragraph, the millisecond a query takes to return. Software should feel inevitable.</p>
            <p>Outside the keyboard: film photography, long-distance running, and an unreasonable collection of mechanical keyboards.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
            <h2 className="font-display text-xl font-semibold">Skills & Stack</h2>
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-ember-gradient rounded-full shadow-ember"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[["7+", "Years shipping"], ["80+", "Projects"], ["32", "Happy clients"], ["∞", "Cups of coffee"]].map(([k, v], i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <div className="font-display text-4xl font-bold text-ember-gradient">{k}</div>
              <div className="text-sm text-muted-foreground mt-1">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
