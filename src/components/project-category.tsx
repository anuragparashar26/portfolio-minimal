"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly { icon: React.ReactNode; type: string; href: string }[];
  image: string;
  video: string;
  category: string;
  status?: "live" | "ongoing";
}

interface ProjectCategoryProps {
  category: string;
  projects: readonly Project[];
  blurFadeDelay: number;
}

export function ProjectCategory({ category, projects, blurFadeDelay }: ProjectCategoryProps) {
  const [expanded, setExpanded] = useState(false);
  const extraCount = Math.max(projects.length - 4, 0);
  const hasExtra = extraCount > 0;

  const visibleProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-2">
      <BlurFade delay={blurFadeDelay}>
        <h3 className="text-xl font-semibold px-2 pt-4">{category}</h3>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={id < 4 ? blurFadeDelay + 0.02 + id * 0.05 : 0.02 + (id - 4) * 0.03}
            duration={id < 4 ? 0.4 : 0.25}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
              status={project.status}
            />
          </BlurFade>
        ))}
      </div>
      {hasExtra && (
        <BlurFade delay={blurFadeDelay + 0.02 + Math.min(visibleProjects.length, 4) * 0.05}>
          <div className="flex justify-center pt-3">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary/10 hover:shadow cursor-pointer"
            >
              {expanded ? "Show less" : `Show more (${extraCount} more)`}
              {!expanded && <ArrowUpRight className="size-3.5" />}
            </button>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
