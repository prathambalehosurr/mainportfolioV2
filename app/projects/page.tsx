import { Card } from "@/components/Card";
import ProjectsEmptyState from "@/components/ProjectsEmptyState";
import { getProjectTechStack, projects } from "@/data/projects";

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-start  min-h-screen pt-25 sm:pt-35 w-full max-w-230 px-4 md:px-8 mx-auto">
      <div className="flex flex-col ml-1 ">
        <h1 className="font-serif  text-7xl tracking-tight font-black border-b border-black dark:border-white/40 w-fit border-dashed ">
          Projects{" "}
        </h1>
        <p className="font-sans">
          My project case studies will be added here soon.
        </p>
      </div>
      {projects.length === 0 ? (
        <ProjectsEmptyState
          eyebrow="Coming soon"
          title="Real projects are next."
          description="Add your projects in data/projects.tsx. Once you fill that array, this page and the homepage will update automatically."
        />
      ) : (
        <div className="grid sm:grid-cols-2 gap-6 mt-10 w-full">
          {projects.map((project) => (
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
      )}
    </div>
  );
};

export default Page;
