import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, GraduationCap, Trophy, Code2 } from "lucide-react";

const items = [
  { icon: Award, title: "AI/ML & Data Science Pro Certification", body: "Ehunar — 6-month intensive program covering GenAI, RAG, DL, and applied ML." },
  { icon: GraduationCap, title: "Deep Learning Specialization", body: "SuperDataScience — CNN, RNN, transfer learning, and modern DL architectures." },
  { icon: Trophy, title: "1st Place — Speed Programming", body: "Abasyn University Peshawar — competitive programming championship winner." },
  { icon: Trophy, title: "1st Place — Startup Competition", body: "Dawn Fest Mardan 2025 — top-ranked AI startup pitch and prototype." },
  { icon: Code2, title: "15+ Production AI Systems", body: "GenAI chatbots, RAG, CV pipelines, recommenders — all open-source on GitHub." },
  { icon: GraduationCap, title: "B.Sc. Computer Science — CGPA 3.83", body: "Northern University Nowshera — distinction in CS fundamentals and AI coursework." },
];

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="Recognition"
        title={<>Wins along <span className="text-gradient">the way.</span></>}
      />
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card-premium group rounded-2xl p-6 transition hover:border-primary/30"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-violet)]/20 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}