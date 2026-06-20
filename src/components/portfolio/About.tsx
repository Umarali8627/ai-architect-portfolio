import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section, SectionHeader } from "./Section";
import { Brain, Eye, Network, Rocket } from "lucide-react";

const stats = [
  { label: "AI Projects Shipped", value: 15, suffix: "+" },
  { label: "Model Accuracy Peak", value: 96, suffix: "%" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Years Building AI", value: 2, suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const pillars = [
  { icon: Brain, title: "Generative AI & RAG", body: "LangChain, LangGraph, vector DBs, prompt engineering. Context-aware chatbots that retrieve and reason." },
  { icon: Eye, title: "Computer Vision", body: "CNNs, VGG, MobileNet, YOLO. Transfer learning pipelines hitting 90%+ accuracy on medical imaging." },
  { icon: Network, title: "Deep Learning", body: "TensorFlow, Keras, PyTorch. CNN/RNN architectures, ensemble methods, end-to-end training loops." },
  { icon: Rocket, title: "Production ML", body: "FastAPI · Flask · Docker · Streamlit. REST endpoints, CI/CD, real-time inference at scale." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={<>Engineer who ships <span className="text-gradient">intelligent systems.</span></>}
        description="Certified AI Engineer with 2+ years building production-ready GenAI, RAG, and computer-vision solutions across healthcare, education, and recommendation systems."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-premium rounded-2xl p-6"
          >
            <div className="font-display text-4xl font-semibold text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-premium group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-violet)]/20 blur-2xl transition-opacity group-hover:opacity-80" />
            <div className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}