import { Button } from "./ui/button";

type ProjectsEmptyStateProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const ProjectsEmptyState = ({
  eyebrow,
  title,
  description,
}: ProjectsEmptyStateProps) => {
  return (
    <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white/80 p-8 shadow-sm shadow-black/5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70 dark:shadow-black/20 sm:p-10">
      <p className="text-sm font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-3xl tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-[15px]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button asChild>
          <a
            href="https://github.com/prathambalehosurr"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/contact">Get in touch</a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsEmptyState;
