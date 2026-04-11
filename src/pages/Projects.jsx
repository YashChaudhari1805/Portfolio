import { useInView } from "../hooks/useInView";
import GlassCard from "../components/GlassCard";
import { ExternalLinkIcon, CodeIcon } from "../components/Icons";
import { projects } from "../data/projects";

function StatusBadge({ status }) {
  const done = status === "completed";
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "0.68rem",
      letterSpacing: "0.06em",
      padding: "4px 12px",
      borderRadius: 9999,
      flexShrink: 0,
      ...(done
        ? { background: "rgba(29,78,216,0.08)", border: "1px solid rgba(29,78,216,0.20)", color: "var(--color-heading)" }
        : { background: "rgba(234,179,8,0.08)",  border: "1px solid rgba(234,179,8,0.22)",  color: "#ca8a04" }),
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
        background: done ? "var(--color-heading)" : "#ca8a04",
        animation: done ? "none" : "pulse 2s infinite",
      }} />
      {done ? "Completed" : "In Progress"}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();

  return (
    <GlassCard
      ref={ref}
      style={{
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        transitionDelay: `${Math.min(index, 4) * 60}ms`,
        marginBottom: 16,
      }}
    >
      {/* Body */}
      <div style={{ padding: "clamp(22px, 5vw, 40px)" }}>
        {/* Header row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: "var(--color-muted)",
              }}>
                {project.year}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.15rem, 3vw, 1.55rem)",
              color: "var(--color-heading)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}>
              {project.title}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: "clamp(0.84rem, 2vw, 0.93rem)", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Bullets */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {project.bullets.map((bullet, i) => (
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--color-accent)",
                flexShrink: 0,
                marginTop: "0.25em",
              }}>▸</span>
              <span style={{ fontSize: "clamp(0.82rem, 2vw, 0.9rem)", color: "var(--color-text)", lineHeight: 1.65 }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid var(--glass-border)",
        padding: "clamp(14px, 3vw, 20px) clamp(22px, 5vw, 40px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}>
        {/* Stack chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.repoUrl) && (
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.05em",
                  padding: "6px 14px", borderRadius: 10,
                  background: "rgba(29,78,216,0.10)", border: "1px solid rgba(29,78,216,0.24)",
                  color: "var(--color-heading)", textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(29,78,216,0.18)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(29,78,216,0.10)"}
              >
                <ExternalLinkIcon className="w-3 h-3" />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.05em",
                  padding: "6px 14px", borderRadius: 10,
                  background: "transparent", border: "1px solid var(--glass-border)",
                  color: "var(--color-muted)", textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-muted)"; e.currentTarget.style.color = "var(--color-text)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}
              >
                <CodeIcon className="w-3 h-3" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <div className="page-container">
      {/* Page header */}
      <GlassCard style={{ padding: "clamp(24px, 5vw, 44px)", marginBottom: 16 }} className="animate-fade-up">
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "0.68rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--color-muted)", marginBottom: 16,
        }}>
          Selected Work
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          color: "var(--color-heading)", fontWeight: 400, marginBottom: 12,
        }}>
          Projects
        </h2>
        <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "var(--color-muted)", lineHeight: 1.7, maxWidth: "60ch" }}>
          A curated selection of ML systems, full-stack applications, and research implementations.
          Live demo and source links appear where projects are deployed.
        </p>
      </GlassCard>

      {/* Cards */}
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}

      {/* Footer */}
      <div style={{ paddingTop: 48, paddingBottom: 16, textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "var(--color-subtle)", marginBottom: 12 }}>
          — That's all for now —
        </p>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "var(--color-heading)", fontWeight: 400, marginBottom: 8 }}>
          Thank you for visiting.
        </p>
        <p style={{ fontSize: "0.88rem", color: "var(--color-muted)" }}>I am working hard to create new projects constantly.</p>
      </div>
    </div>
  );
}
