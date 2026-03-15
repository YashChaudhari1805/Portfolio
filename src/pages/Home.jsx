import { useEffect, useState } from "react";
import Card from "../components/Card";
import { cn } from "../utils/cn";

const SKILLS = [
  "React", "Node.js", "Express", "MongoDB", "Mongoose",
  "JavaScript", "Python", "Java", "Android", "PHP", "HTML", "CSS",
];

const STATS = [
  { label: "Projects",     value: "6+"    },
  { label: "Experience",   value: "3 yrs" },
  { label: "Technologies", value: "12+"   },
  { label: "Internships",  value: "2"     },
];

export default function Home({ navigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  const fadeIn = (delay = "") =>
    cn(
      "transition-all duration-700 ease-out",
      delay,
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    );

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 flex flex-col items-center justify-center gap-4">

      {/* Hero */}
      <Card className={cn("max-w-7xl w-full p-10", fadeIn())}>
        <p className="text-xs uppercase tracking-widest2 mb-5 text-stone-500 dark:text-stone-400">
          Available for work
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 tracking-tight">
          Yash Kailas Chaudhari
        </h1>
        <p className="text-lg mb-6 leading-relaxed text-stone-500 dark:text-stone-400">
          AI Engineer &amp; Full-Stack Developer. I specialize in bridging deep
          machine learning research with scalable web architectures to build
          intelligent, purposeful products.
        </p>

        {/* Skill pills — stone-200 on white is visible; stone-800 on black is visible */}
        <ul className="flex flex-wrap gap-2 mb-8" aria-label="Skills">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="text-xs px-3 py-1 rounded-full tracking-wide bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("projects")}
            className="px-6 py-2.5 rounded-xl text-sm font-medium tracking-wide
              bg-stone-900 text-white hover:bg-black transition-colors
              dark:bg-stone-200 dark:text-black dark:hover:bg-white"
          >
            View Projects
          </button>
          <button
            onClick={() => navigate("resume")}
            className="px-6 py-2.5 rounded-xl text-sm font-medium tracking-wide
              border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors
              dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            Resume
          </button>
        </div>
      </Card>

      {/* Stats */}
      <Card className={cn("max-w-7xl w-full grid grid-cols-4 overflow-hidden", fadeIn("delay-150"))}>
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "p-6 text-center",
              i < STATS.length - 1 && "border-r border-stone-200 dark:border-stone-800"
            )}
          >
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-xs mt-1 uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {stat.label}
            </p>
          </div>
        ))}
      </Card>

      {/* Currently */}
      <Card className={cn("max-w-7xl w-full p-6", fadeIn("delay-300"))}>
        <p className="text-xs uppercase tracking-widest2 mb-3 text-stone-500 dark:text-stone-400">
          Currently
        </p>
        <p className="text-sm leading-relaxed">
          Exploring the intersection of developer tooling and AI-assisted
          workflows. Open to internship and full-time roles.
        </p>
      </Card>
    </div>
  );
}
