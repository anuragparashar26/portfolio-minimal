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

interface ProjectsSectionProps {
  projects: readonly Project[];
  blurFadeDelay: number;
}

export function ProjectsSection({ projects, blurFadeDelay }: ProjectsSectionProps) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hiddenCount = filteredProjects.length - 4;

  return (
    <div className="space-y-6 w-full py-6">
      <BlurFade delay={blurFadeDelay}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some projects I've worked on.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Category Buttons */}
      <BlurFade delay={blurFadeDelay + 0.1}>
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-background text-foreground border-border hover:border-foreground/50 hover:shadow-sm"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({projects.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </BlurFade>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto px-4">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={blurFadeDelay + 0.15 + id * 0.05}
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

      {/* View all projects Button */}
      {hiddenCount > 0 && (
        <BlurFade delay={blurFadeDelay + 0.2}>
          <div className="flex justify-center pt-3">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary/10 hover:shadow cursor-pointer"
            >
              {showAll ? "View less" : "View all"}
              {!showAll && <ArrowUpRight className="size-3.5" />}
            </button>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
