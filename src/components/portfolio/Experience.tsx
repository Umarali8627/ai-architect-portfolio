import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    year: "2024 — Present",
    title: "GenAI & RAG Engineer",
    org: "Freelance & Independent Projects",
    points: [
      "Built RAG chatbots with LangChain + LangGraph and vector retrieval.",
      "Shipped FastAPI inference services for real-time LLM workloads.",
      "Designed prompt and retrieval pipelines lifting accuracy 35%+.",
    ],
  },
  {
    year: "2023 — 2024",
    title: "Deep Learning & Computer Vision",
    org: "Healthcare & Applied ML",
    points: [
      "CNN architectures (VGG19, MobileNetV2) for medical imaging.",
      "Transfer learning pipelines hitting 90%+ on fundus datasets.",
      "Flask REST deployments for clinical inference workloads.",
    ],
  },
  {
    year: "2022 — 2023",
    title: "Machine Learning Foundations",
    org: "AI/ML Professional Track — Ehunar",
    points: [
      "End-to-end ML: preprocessing, training, evaluation, deployment.",
      "Ensemble methods, NLP (TF-IDF, Naive Bayes), recommenders.",
      "B.Sc. Computer Science — CGPA 3.83 / 4.0, Northern University.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Journey"
        title={<>Building toward <span className="text-gradient">production AI.</span></>}
      />

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-8 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`hidden md:block ${i % 2 === 1 ? "text-left md:pl-10" : "text-right md:pr-10"}`}>
                <div className="font-mono text-xs text-muted-foreground">{it.year}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.org}</p>
              </div>
              <div className="md:hidden">
                <div className="font-mono text-xs text-muted-foreground">{it.year}</div>
              </div>
              <div className="relative">
                <span className="absolute -left-[1.65rem] top-2 grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-violet)] shadow-[0_0_0_4px_var(--background),0_0_20px_oklch(0.7_0.18_265_/_0.6)] md:-left-[calc(50%+0.4rem)]" />
                <div className="card-premium rounded-2xl p-5">
                  <div className="mb-3 md:hidden">
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="text-xs text-muted-foreground">{it.org}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}