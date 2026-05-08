import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Marcus Mason" },
      { name: "description", content: "Selected work — case studies and shipped products." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Projects</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="mt-4 font-display text-5xl md:text-6xl font-bold max-w-3xl">
          Selected <span className="text-ember-gradient">work</span>.
        </motion.h1>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => setActiveId(p.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/8 text-left cursor-pointer hover:border-[oklch(0.65_0.24_35_/_0.6)] hover:shadow-ember transition-all"
            >
              <motion.img layoutId={`img-${p.id}`} src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition-transform group-hover:-translate-y-1">
                <motion.div layoutId={`tags-${p.id}`} className="flex gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10">{t}</span>
                  ))}
                </motion.div>
                <motion.h3 layoutId={`title-${p.id}`} className="font-display text-2xl md:text-3xl font-bold">{p.name}</motion.h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[90] overflow-y-auto p-4 md:p-10 flex items-start justify-center">
              <motion.div
                layoutId={`card-${active.id}`}
                className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-card shadow-ember-lg"
              >
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute top-5 right-5 z-10 h-10 w-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img layoutId={`img-${active.id}`} src={active.image} alt={active.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8 md:p-12">
                  <motion.div layoutId={`tags-${active.id}`} className="flex flex-wrap gap-2 mb-4">
                    {active.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                    ))}
                  </motion.div>
                  <motion.h2 layoutId={`title-${active.id}`} className="font-display text-4xl md:text-5xl font-bold">{active.name}</motion.h2>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    {active.description}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }} className="mt-8 flex flex-wrap gap-3">
                    <a href={active.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ember-gradient text-black font-semibold px-6 py-3 shadow-ember hover:shadow-ember-lg transition-shadow">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a href={active.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 font-semibold hover:border-white/30 transition-colors">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
