import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umar Ali — AI Engineer · GenAI · RAG · Computer Vision" },
      { name: "description", content: "Portfolio of Umar Ali, AI/ML Engineer specializing in Generative AI, RAG systems, deep learning, and computer vision. View projects, skills, and experience." },
      { property: "og:title", content: "Umar Ali — AI Engineer" },
      { property: "og:description", content: "AI/ML Engineer building production GenAI, RAG, and computer-vision systems." },
      { property: "og:type", content: "profile" },
      { name: "twitter:title", content: "Umar Ali — AI Engineer" },
      { name: "twitter:description", content: "AI/ML Engineer building production GenAI, RAG, and computer-vision systems." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Umar Ali",
          jobTitle: "AI Engineer",
          email: "mailto:myumarali12@gmail.com",
          url: "/",
          sameAs: ["https://github.com/Umarali8627"],
          knowsAbout: ["Generative AI", "RAG", "Machine Learning", "Deep Learning", "Computer Vision", "LangChain", "TensorFlow", "FastAPI"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
