import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects, type Project } from "@/data/projects-data";

const MotionLink = motion(Link);

function TiltCard({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <MotionLink
      to="/projects/$slug"
      params={{ slug }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative block h-full"
    >
      {children}
    </MotionLink>
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
        {projects.map((p: Project, i: number) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={p.featured ? "lg:col-span-1" : ""}
          >
            <TiltCard slug={p.slug}>
              <div className="card-premium relative h-full overflow-hidden rounded-2xl">
                {p.image && (
                  <div className="relative h-40 w-full overflow-hidden bg-card">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                )}
                <div className="relative p-6">
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
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live
                      </a>
                    )}
                  </div>
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