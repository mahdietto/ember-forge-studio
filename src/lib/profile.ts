export const profile = {
  firstName: "Marcus",
  lastName: "Mason",
  initial: "M",
  role: "Full Stack Developer",
  bio: "I craft premium digital experiences — performant, intentional, and a little bit magical. Currently building tools at the edge of design and engineering.",
  email: "hello@marcusmason.dev",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
};

export const skills = [
  { name: "React / TanStack", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "UI / Motion", level: 90 },
  { name: "PostgreSQL", level: 82 },
  { name: "Cloud / Edge", level: 85 },
];

export const services = [
  { title: "Web Development", desc: "Production-grade React apps engineered for speed, scale, and longevity.", icon: "Code2" },
  { title: "UI / UX Design", desc: "Interface systems that feel inevitable — clean, considered, conversion-focused.", icon: "Sparkles" },
  { title: "API Integration", desc: "Type-safe APIs and integrations that quietly do the heavy lifting.", icon: "Plug" },
  { title: "Motion & Interaction", desc: "Animations with intent — every transition earns its place.", icon: "Wand2" },
  { title: "Performance Audits", desc: "Diagnose, fix, and ship measurable wins on Core Web Vitals.", icon: "Gauge" },
  { title: "Technical Strategy", desc: "Architecture, tooling, and direction for teams that need to move fast.", icon: "Compass" },
];

import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";

export const projects = [
  {
    id: "lumen",
    name: "Lumen Analytics",
    image: p1,
    tags: ["React", "D3", "Edge"],
    description: "A real-time analytics platform built for product teams. Streaming data, custom dashboards, and a UI that makes complex numbers feel approachable.",
    demo: "#",
    repo: "#",
  },
  {
    id: "drift",
    name: "Drift Commerce",
    image: p2,
    tags: ["Next.js", "Stripe", "Mobile"],
    description: "Headless commerce for premium brands. Sub-second checkout, native-feel mobile, and a CMS the marketing team actually likes.",
    demo: "#",
    repo: "#",
  },
  {
    id: "syntax",
    name: "Syntax AI",
    image: p3,
    tags: ["AI", "Streaming", "TS"],
    description: "Conversational AI workspace with streamed responses, tool-calling, and multi-model routing. Built to feel instant.",
    demo: "#",
    repo: "#",
  },
  {
    id: "atlas",
    name: "Atlas Folio",
    image: p4,
    tags: ["Design", "Motion", "MDX"],
    description: "A portfolio system for designers — beautifully opinionated layouts, MDX case studies, and shared-element transitions.",
    demo: "#",
    repo: "#",
  },
];
