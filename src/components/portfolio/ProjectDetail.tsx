import { useEffect } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects-data";

export function ProjectDetail() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          That project doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          hash="projects"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground transition hover:bg-card"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    );
  }

  const description = project.fullDescription ?? project.blurb;
  const features = project.features ?? [];

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
      <Link
        to="/"
        hash="projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Banner: real image if provided, otherwise a generated gradient */}
        <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl bg-card sm:h-80">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.accent} bg-card`}
            >
              <Sparkles className="h-12 w-12 text-foreground/30" />
            </div>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
              <Star className="h-2.5 w-2.5 fill-current" />
              Featured
            </span>
          )}
          <span className="rounded-full border border-border bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {project.metric}
          </span>
        </div>

        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>

        {features.length > 0 && (
          <div className="mt-8">
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-9 flex items-center gap-4 border-t border-border pt-6 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 transition hover:bg-card"
            >
              <Github className="h-4 w-4" /> View code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 transition hover:bg-card"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </motion.div>
    </article>
  );
}