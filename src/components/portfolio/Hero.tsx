import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Sparkles } from "lucide-react";
import portrait from "@/assets/UmarAli.png";

const phrases = [
  "Building Intelligent Systems with AI",
  "Designing RAG Architectures",
  "Training Deep Vision Models",
  "Shipping Production ML",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = deleting ? 30 : 60;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1600);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((i + 1) % phrases.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-[2px] -mb-1 h-[1em] bg-primary animate-[blink_1s_steps(2)_infinite]" />
    </span>
  );
}

function NeuralBackdrop() {
  const nodes = Array.from({ length: 22 }, (_, i) => {
    const x = ((i * 137.5) % 100);
    const y = ((i * 73.3) % 100);
    return { x, y, d: 4 + ((i * 7) % 10) };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.7 0.18 250 / 0.2) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.7 0.18 250 / 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 80%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {nodes.map((n, idx) =>
          nodes.slice(idx + 1, idx + 3).map((m, j) => (
            <line
              key={`${idx}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="oklch(0.7 0.18 265 / 0.18)"
              strokeWidth="0.08"
            />
          )),
        )}
        {nodes.map((n, idx) => (
          <circle
            key={idx}
            cx={n.x}
            cy={n.y}
            r="0.35"
            fill="oklch(0.78 0.13 200)"
            style={{
              animation: `pulse-glow ${3 + (idx % 4)}s ease-in-out infinite`,
              animationDelay: `${idx * 0.15}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-28 pb-20">
      <NeuralBackdrop />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.2fr_1fr]">
        {/* ── Left: text content ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for AI/ML opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Umar Ali.
            <br />
            <span className="text-muted-foreground">AI &amp; ML Engineer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Generative AI · RAG Systems · Computer Vision. I design and deploy production-grade
            intelligent systems with LangChain, TensorFlow, and FastAPI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-mono text-sm text-muted-foreground"
          >
            <span className="text-foreground/60">$ </span>
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-violet)] px-5 py-3 text-sm font-semibold text-background shadow-[0_10px_30px_-10px_oklch(0.7_0.18_265_/_0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_oklch(0.7_0.18_265_/_0.8)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/UmarAli-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-card"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <a
              href="https://github.com/Umarali8627"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> github.com/Umarali8627
            </a>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> 2+ years · 15+ projects shipped
            </span>
          </motion.div>
        </div>

        {/* ── Right: circular portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[300px]"
        >
          {/* Glow ring behind the circle */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--accent-blue)]/40 via-transparent to-[var(--accent-violet)]/40 blur-2xl" />

          {/* Decorative spinning border ring */}
          <div
            className="absolute -inset-[3px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, oklch(0.7 0.18 265), oklch(0.7 0.18 200), oklch(0.7 0.18 265))",
              animation: "spin 8s linear infinite",
            }}
          />

          {/* White gap between spinning ring and image */}
          <div className="absolute inset-[2px] rounded-full bg-background" />

          {/* Circular image */}
          <div className="relative overflow-hidden rounded-full aspect-square border border-border">
            <img
              src={portrait}
              alt="Umar Ali, AI Engineer"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle bottom fade */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>

          {/* Name badge below the circle */}
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl glass border border-border px-4 py-2 text-xs">
            <div className="font-medium text-foreground">Umar Ali</div>
            <span className="text-muted-foreground">·</span>
            <div className="text-muted-foreground">Nowshera, PK</div>
            <span className="text-muted-foreground">·</span>
            <div className="font-mono text-[10px] text-muted-foreground">v2026.1</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}