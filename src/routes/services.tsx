import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Sparkles, Plug, Wand2, Gauge, Compass } from "lucide-react";
import { services } from "@/lib/profile";

const icons = { Code2, Sparkles, Plug, Wand2, Gauge, Compass } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marcus Mason" },
      { name: "description", content: "Web development, design, and motion services — built end to end." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Services</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 font-display text-5xl md:text-6xl font-bold max-w-3xl">
          What I <span className="text-ember-gradient">build</span> for clients.
        </motion.h1>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 overflow-hidden transition-colors hover:border-[oklch(0.65_0.24_35_/_0.5)]"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(circle, oklch(0.65 0.24 35 / 0.4), transparent 70%)", filter: "blur(30px)" }} />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-ember-gradient flex items-center justify-center text-black shadow-ember">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
