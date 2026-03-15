import Card from "../components/Card";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";
import { cn } from "../utils/cn";

function StatusBadge({ status }) {
  const isComplete = status === "completed";
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 shrink-0 text-xs px-3 py-1 rounded-full font-medium tracking-wide",
      isComplete
        ? "bg-stone-900 text-stone-100 dark:bg-stone-200 dark:text-black"
        : "bg-stone-100 text-stone-600 border border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700"
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full", isComplete ? "bg-stone-100 dark:bg-black" : "bg-amber-400")} />
      {isComplete ? "Completed" : "In Progress"}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();

  return (
    <Card
      ref={ref}
      className="overflow-hidden transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1 text-stone-500 dark:text-stone-400">
              {project.year}
            </p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm leading-relaxed mb-5 text-stone-500 dark:text-stone-400">
          {project.description}
        </p>

        <ul className="space-y-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-stone-400 dark:bg-stone-500" />
              <span className="text-stone-500 dark:text-stone-400">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone-200 dark:border-stone-800 px-7 py-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 rounded-full tracking-wide bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 pb-0 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 mb-6">
          <p className="text-xs uppercase tracking-widest2 mb-3 text-stone-500 dark:text-stone-400">Work</p>
          <h2 className="text-3xl font-semibold mb-2">Projects</h2>
          <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            A selection of things I've built — shipped products, experiments, and ongoing work.
          </p>
        </Card>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="py-28 text-center">
          <p className="text-xs uppercase tracking-widest3 mb-3 text-stone-500 dark:text-stone-400">— finished for now —</p>
          <p className="text-2xl font-semibold">Thank you for visiting.</p>
          <p className="text-sm mt-2 text-stone-500 dark:text-stone-400">Built with ❤️. More coming soon.</p>
        </div>
      </div>
    </div>
  );
}
