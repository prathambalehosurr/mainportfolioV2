"use client";
import { useEffect, useRef } from "react";
import { Card } from "@/components/Card";
import ProjectsEmptyState from "@/components/ProjectsEmptyState";
import {
  featuredProjects,
  getProjectTechStack,
  projects,
} from "@/data/projects";
import { Button } from "./ui/button";
import ExternalLinkIcon from "./ui/external-link-icon";

const Projects = () => {
  const scrollRef = useRef<HTMLSpanElement>(null);
  const projectsToShow =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 2);

  useEffect(() => {
    // Handle scrolling for specific hashes
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === "#proof-with-work" || hash === "#proof-of-work") {
        let attempts = 0;
        const checkAndScroll = () => {
          if (scrollRef.current) {
            const yOffset = -120; // Negative offset scrolls 'less' (stops earlier), showing content above
            const y =
              scrollRef.current.getBoundingClientRect().top +
              window.scrollY +
              yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          } else if (attempts < 50) {
            attempts++;
            setTimeout(checkAndScroll, 100);
          }
        };
        checkAndScroll();
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <div className=" mb-20 relative ">
      <div className="flex flex-col gap-1 text-neutral-900 dark:text-neutral-50/90">
        <p className="text-sm font-mono text-neutral-600 dark:text-neutral-300">
          Featured
        </p>
        <h2 className="text-4xl font-black font-serif  border-b border-black dark:border-white/40 w-fit border-dashed">
          Projects
        </h2>
      </div>

      {projects.length === 0 ? (
        <ProjectsEmptyState
          eyebrow="In progress"
          title="Project case studies are being added."
          description="Add your projects in data/projects.tsx and they will automatically appear here and on the projects page."
        />
      ) : (
        <>
          <div className="grid sm:grid-cols-2 mt-10 gap-10">
            {projectsToShow.map((project) => (
              <Card
                key={project.slug}
                title={project.title}
                description={project.description}
                status={project.status}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
                imageSrc={project.imageSrc}
                videoSrc={project.videoSrc}
                techStack={getProjectTechStack(project.techStack)}
              />
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            className="h-10 text-sm absolute mb-10 left-1/2 -translate-x-1/2 bottom-0 py-4"
          >
            <a
              className="flex py-2 text-black/70 dark:text-white/70 items-center justify-center"
              href="/projects"
            >
              Open Projects Page <ExternalLinkIcon className="ml-2 size-5" />
            </a>
          </Button>
        </>
      )}

      <span
        ref={scrollRef}
        className="flex items-center mt-30"
        id="proof-of-work"
      >
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-neutral-400"></span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-neutral-400"></span>
      </span>
    </div>
  );
};

export default Projects;
