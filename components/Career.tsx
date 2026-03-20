const careerEntries = [
  {
    role: "Frontend Web Development Intern",
    company: "Codtech IT Solutions Private Limited",
    location: "Remote",
    period: "Aug 2025 - Oct 2025",
    summary:
      "Worked on frontend web development projects with a strong focus on responsive design, UI quality, and scalable implementation.",
    highlights: [
      "Built and refined web interfaces using modern frontend development practices.",
      "Debugged UI issues to improve performance, consistency, and usability.",
      "Translated project requirements into practical frontend solutions.",
      "Contributed with adaptability, creativity, and structured problem solving in a professional internship environment.",
    ],
    skills:
      "Frontend Development, Responsive Design, UI Debugging, Problem Solving, Workflow Optimization",
  },
  {
    role: "Python Developer Intern",
    company: "Codec Technologies Pvt. Ltd.",
    location: "Remote",
    period: "Aug 2025 - Nov 2025",
    summary:
      "Developed and tested Python applications with an emphasis on clean code, modular structure, and maintainability.",
    highlights: [
      "Applied core Python concepts and problem-solving techniques to build efficient logic.",
      "Worked on real-world tasks aligned with industry expectations under an AICTE and ICAC-approved internship program.",
      "Debugged and optimized existing code to improve reliability and performance.",
      "Maintained consistency and adaptability while meeting structured project milestones.",
    ],
    skills:
      "Python, Application Development, Debugging, Code Optimization, Modular Design",
  },
];

const Career = () => {
  return (
    <section id="experience" className="w-full scroll-mt-28 py-6">
      <div className="mb-10">
        <p className="font-mono text-sm">Featured</p>
        <h2 className="font-serif text-4xl tracking-tight font-black border-b border-black dark:border-white/40 w-fit border-dashed">
          Career <span className="px-2">&</span> Experience
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-[0.5625rem] top-3 bottom-3 w-px bg-linear-to-b from-neutral-300 via-neutral-500 to-transparent dark:from-neutral-800 dark:via-neutral-500 dark:to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8 sm:space-y-10">
          {careerEntries.map((entry) => (
            <article
              key={`${entry.role}-${entry.company}`}
              className="relative grid gap-4 pl-8 md:grid-cols-2 md:gap-10 md:pl-0"
            >
              <span className="absolute left-1 top-2.5 size-4 rounded-full border border-neutral-300 bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.9)] dark:border-neutral-600 dark:bg-neutral-950 dark:shadow-[0_0_0_4px_rgba(10,10,10,0.9)] md:left-1/2 md:-translate-x-1/2" />

              <div className="md:pr-10">
                <p className="mb-2 text-sm font-mono uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {entry.period}
                </p>
                <h3 className="font-serif text-2xl leading-tight text-neutral-950 dark:text-neutral-50 sm:text-3xl">
                  {entry.role}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
                  {entry.company} | {entry.location}
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-sm shadow-black/5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70 dark:shadow-black/20 sm:p-6">
                <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300 sm:text-[15px]">
                  {entry.summary}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-[15px]">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-7 text-neutral-700 dark:text-neutral-300 sm:text-[15px]">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Skills applied:
                  </span>{" "}
                  {entry.skills}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <span className="mt-12 flex items-center">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-neutral-500" />
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-neutral-500" />
      </span>
    </section>
  );
};

export default Career;
