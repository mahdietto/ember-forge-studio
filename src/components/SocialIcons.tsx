import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { profile } from "@/lib/profile";

const items = [
  { href: profile.github, Icon: Github, label: "GitHub" },
  { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: profile.instagram, Icon: Instagram, label: "Instagram" },
  { href: profile.twitter, Icon: Twitter, label: "Twitter" },
];

export function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ href, Icon, label }) => (
        <a
          key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
          className="group relative h-11 w-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:border-[oklch(0.65_0.24_35)] hover:shadow-ember"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
