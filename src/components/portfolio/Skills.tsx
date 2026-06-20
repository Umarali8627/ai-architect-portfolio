import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    label: "Generative AI & RAG",
    items: [
      { name: "LangChain", level: 92 },
      { name: "LangGraph", level: 88 },
      { name: "Vector DBs", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "LLM Integration", level: 88 },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "Keras", level: 90 },
      { name: "PyTorch", level: 82 },
      { name: "Scikit-Learn", level: 92 },
      { name: "XGBoost", level: 85 },
    ],
  },
  {
    label: "Deep Learning & CV",
    items: [
      { name: "CNN", level: 92 },
      { name: "RNN", level: 80 },
      { name: "Transfer Learning", level: 90 },
      { name: "OpenCV", level: 85 },
      { name: "Image Classification", level: 92 },
    ],
  },
  {
    label: "Backend & Deploy",
    items: [
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 88 },
      { name: "Docker", level: 80 },
      { name: "Streamlit", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 },
      { name: "Feature Engineering", level: 88 },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "CI/CD", level: 80 },
      { name: "Railway", level: 82 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Stack"
        title={<>Tools that ship <span className="text-gradient">production AI.</span></>}
        description="From training loops to vector retrieval to FastAPI deployment — a focused stack for end-to-end intelligent systems."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="card-premium rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-base font-semibold">{g.label}</h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(gi + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="space-y-3.5">
              {g.items.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="font-mono text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-card">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.06, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-violet)]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}