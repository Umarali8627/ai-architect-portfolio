import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
});