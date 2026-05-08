import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { profile } from "@/lib/profile";
import { SocialIcons } from "@/components/SocialIcons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marcus Mason" },
      { name: "description", content: `Get in touch with ${profile.firstName} — open for select projects and collaborations.` },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Let's build something <span className="text-ember-gradient">unforgettable</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I'm currently taking a small number of projects for next quarter. If you have something interesting in mind, write me.
          </p>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 group">
            <span className="h-11 w-11 rounded-full bg-ember-gradient text-black flex items-center justify-center shadow-ember">
              <Mail className="h-4 w-4" />
            </span>
            <span className="font-medium group-hover:text-ember-gradient transition-colors">{profile.email}</span>
          </a>
          <SocialIcons />
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="relative rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-10 space-y-5"
        >
          <Field label="Name" type="text" name="name" required />
          <Field label="Email" type="email" name="email" required />
          <Field label="Message" textarea required />
          <button
            type="submit"
            className="relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-ember-gradient text-black font-semibold px-7 py-3.5 shadow-ember hover:shadow-ember-lg transition-shadow overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.span key="ok" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Message sent
                </motion.span>
              ) : (
                <motion.span key="send" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="inline-flex items-center gap-2">
                  Send Message <Send className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.form>
      </div>
    </main>
  );
}

function Field({ label, textarea, ...rest }: { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const cls =
    "peer w-full rounded-2xl bg-black/40 border border-white/10 px-4 pt-6 pb-2 text-foreground placeholder-transparent outline-none transition-all focus:border-[oklch(0.65_0.24_35)] focus:shadow-ember";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} placeholder={label} rows={5} className={cls} />
      ) : (
        <input {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[oklch(0.78_0.18_70)]">
        {label}
      </span>
    </label>
  );
}
