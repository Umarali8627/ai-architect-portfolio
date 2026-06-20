import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, Star } from "lucide-react";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  accent: string;
  metric: string;
};

const projects: Project[] = [
  {
    title: "EYE LAB — Eye Disease Classifier",
    blurb:
      "Real-time fundus image classification using VGG19 and MobileNetV2. Transfer learning + augmentation, deployed as a Flask REST service for clinical use.",
    tags: ["TensorFlow", "VGG19", "MobileNetV2", "Flask", "Transfer Learning"],
    github: "https://github.com/Umarali8627/Eye_disease_Classifier_VGG",
    featured: true,
    accent: "from-blue-500/30 to-violet-500/30",
    metric: "92% accuracy",
  },
  {
    title: "University Admission RAG Chatbot",
    blurb:
      "RAG chatbot for admissions inquiries built with LangChain + LangGraph. Custom preprocessing pipeline lifted retrieval accuracy by 35%, sub-2s response.",
    tags: ["LangChain", "LangGraph", "RAG", "Vector DB", "LLM"],
    github: "https://github.com/Umarali8627/admission-chatbot",
    featured: true,
    accent: "from-violet-500/30 to-fuchsia-500/30",
    metric: "+35% retrieval",
  },
  {
    title: "Conversational Chatbot with Memory",
    blurb:
      "Intelligent chatbot with persistent multi-turn memory using LangChain memory modules. Live on Streamlit with real-time response generation.",
    tags: ["LangChain", "Memory", "Streamlit", "LLM"],
    github: "https://github.com/Umarali8627/chatbot-memory",
    demo: "https://chatbot-with-memory.streamlit.app",
    accent: "from-cyan-500/30 to-blue-500/30",
    metric: "Live demo",
  },
  {
    title: "Smart AI Notes System",
    blurb:
      "AI-powered note-taking with auto-summarization, tag generation, and context-aware organization. FastAPI backend, real-time processing.",
    tags: ["LangChain", "FastAPI", "NLP", "Python"],
    github: "https://github.com/Umarali8627/smart-ai-notes",
    accent: "from-emerald-500/30 to-cyan-500/30",
    metric: "AI summarization",
  },
  {
    title: "Heart Disease Prediction",
    blurb:
      "Ensemble ML (Random Forest + XGBoost) for cardiovascular risk on the UCI heart dataset. Tuned pipeline with deep EDA and visual interpretability.",
    tags: ["XGBoost", "Random Forest", "Scikit-Learn", "EDA"],
    github: "https://github.com/Umarali8627/Cardio-Project",
    accent: "from-rose-500/30 to-violet-500/30",
    metric: "88% accuracy",
  },
  {
    title: "Movie Recommendation System",
    blurb:
      "Collaborative + content-based filtering over the TMDB 5000 dataset. Deployed full-stack on Railway with Streamlit frontend and GitHub CI/CD.",
    tags: ["Scikit-Learn", "Streamlit", "Railway", "CI/CD"],
    github: "https://github.com/Umarali8627/Movie-Recommendation-System",
    accent: "from-amber-500/30 to-rose-500/30",
    metric: "Full-stack deploy",
  },
  {
    title: "Email Spam Detection",
    blurb:
      "Multinomial Naive Bayes with TF-IDF for text classification. Full NLP preprocessing pipeline — tokenization, stop-words, feature extraction.",
    tags: ["NLP", "Naive Bayes", "TF-IDF", "Scikit-Learn"],
    github: "https://github.com/Umarali8627/spam_Detection",
    accent: "from-sky-500/30 to-indigo-500/30",
    metric: "96% accuracy",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full"
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Work"
        title={<>Selected <span className="text-gradient">projects.</span></>}
        description="A focused selection of production-grade AI/ML systems across GenAI, computer vision, and applied ML."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={p.featured ? "lg:col-span-1" : ""}
          >
            <TiltCard>
              <div className="card-premium relative h-full overflow-hidden rounded-2xl p-6">
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-2">
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                          <Star className="h-2.5 w-2.5 fill-current" />
                          Featured
                        </span>
                      )}
                      <span className="rounded-full border border-border bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {p.metric}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-xs">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground">
                        <ExternalLink className="h-3.5 w-3.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}