import { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost",
  "Pandas", "NumPy", "React", "Node.js", "Express",
  "MongoDB", "JavaScript", "Java", "SHAP / LIME", "SQL",
];

const STATS = [
  { label: "Projects", value: "7+", note: "and counting" },
  { label: "Research Exp.", value: "1+ yr", note: "clinical ML" },
  { label: "Technologies", value: "15+", note: "across the stack" },
];

const FOCUS_AREAS = [
  { tag: "ML / DL", desc: "Production-grade pipelines — anomaly detection, medical diagnostics, predictive systems" },
  { tag: "Full-Stack", desc: "MERN applications with clean architecture and performant RESTful APIs" },
  { tag: "Explainable AI", desc: "SHAP, LIME, and XAI techniques for interpretable, auditable model decisions" },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    institution: "Navi Mumbai, Maharashtra",
    year: "Expected 2027",
    note: "Specialisation in Machine Learning & Deep Learning",
  },
];

const EXPERIENCE = [
  {
    role: "Data Science Intern",
    company: "Exposys Data Labs",
    period: "2024",
    desc: "Engineered end-to-end diabetes prediction pipeline achieving 94% accuracy using Random Forest, SVM, and Logistic Regression on real clinical datasets.",
  },
];

export default function Home({ navigate }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(id);
  }, []);

  const fadeStyle = (delay = 0) => ({
    animation: visible ? `fadeUp 0.55s ease-out ${delay}ms both` : "none",
    opacity: visible ? undefined : 0,
  });

  return (
    <div className="page-container">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ ...fadeStyle(0), marginBottom: 16 }}>
        <GlassCard style={{ padding: "clamp(28px, 5vw, 48px)" }}>
          {/* Available badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <span
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px #22c55e",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#16a34a",
            }}>
              Available for work
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-heading)",
            lineHeight: 1.15,
            marginBottom: 8,
          }}>
            Yash Kailas Chaudhari
          </h1>

          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.75rem, 2vw, 0.88rem)",
            color: "var(--color-muted)",
            letterSpacing: "0.05em",
            marginBottom: 20,
          }}>
            Data Scientist &amp; ML Engineer · Full-Stack Developer
          </p>

          <p style={{
            fontSize: "clamp(0.88rem, 2vw, 1rem)",
            color: "var(--color-text)",
            lineHeight: 1.7,
            maxWidth: "58ch",
            marginBottom: 28,
          }}>
            I build production-grade machine learning systems and full-stack applications —
            from hybrid anomaly detectors and clinical CNN diagnostics to interpretable credit
            risk models. Currently seeking Data Science internship opportunities.
          </p>

          {/* Skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {SKILLS.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <button
              onClick={() => navigate("projects")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                padding: "10px 24px",
                borderRadius: 12,
                cursor: "pointer",
                background: "rgba(29,78,216,0.12)",
                border: "1px solid rgba(29,78,216,0.28)",
                color: "var(--color-heading)",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(29,78,216,0.20)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(29,78,216,0.12)"; }}
            >
              View Projects →
            </button>
            <button
              onClick={() => navigate("resume")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                padding: "10px 24px",
                borderRadius: 12,
                cursor: "pointer",
                background: "transparent",
                border: "1px solid var(--glass-border)",
                color: "var(--color-muted)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-muted)"; e.currentTarget.style.color = "var(--color-text)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}
            >
              Resume
            </button>
          </div>
        </GlassCard>
      </div>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div style={{
        ...fadeStyle(120),
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
        marginBottom: 16,
      }}>
        {STATS.map((stat) => (
          <GlassCard key={stat.label} style={{ padding: "clamp(18px, 4vw, 32px) 16px", textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              color: "var(--color-heading)",
              fontWeight: 400,
              marginBottom: 4,
            }}>
              {stat.value}
            </p>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              marginBottom: 2,
            }}>
              {stat.label}
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted)" }}>
              {stat.note}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* ── About / Education ─────────────────────────────────── */}
      <div style={{ ...fadeStyle(200), marginBottom: 16 }}>
        <GlassCard style={{ padding: "clamp(24px, 5vw, 40px)" }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 20,
          }}>
            About
          </p>

          <p style={{
            fontSize: "clamp(0.88rem, 2vw, 0.98rem)",
            color: "var(--color-text)",
            lineHeight: 1.75,
            maxWidth: "64ch",
            marginBottom: 28,
          }}>
            I am a final-year Computer Engineering student from Navi Mumbai, Maharashtra, with a
            strong foundation in machine learning, deep learning, and full-stack web development.
            My work spans clinical diagnostics, financial risk modelling, and retrieval-augmented
            generation — always with a focus on interpretability and production readiness.
          </p>

          {/* Education */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 12,
          }}>
            Education
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 24px",
                  alignItems: "flex-start",
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--glass-border)",
                }}
              >
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ color: "var(--color-heading)", fontSize: "0.92rem", marginBottom: 3 }}>{edu.degree}</p>
                  <p style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>{edu.institution}</p>
                  <p style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: "0.70rem", marginTop: 4 }}>{edu.note}</p>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.70rem",
                  color: "var(--color-accent)",
                  letterSpacing: "0.06em",
                  flexShrink: 0,
                  paddingTop: 2,
                }}>
                  {edu.year}
                </span>
              </div>
            ))}
          </div>

          {/* Experience */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 12,
          }}>
            Experience
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.role}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 24px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ color: "var(--color-heading)", fontSize: "0.92rem", marginBottom: 3 }}>
                    {exp.role} <span style={{ color: "var(--color-muted)" }}>@ {exp.company}</span>
                  </p>
                  <p style={{ color: "var(--color-text)", fontSize: "0.84rem", lineHeight: 1.6, marginTop: 4 }}>
                    {exp.desc}
                  </p>
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.70rem",
                  color: "var(--color-accent)",
                  letterSpacing: "0.06em",
                  flexShrink: 0,
                  paddingTop: 2,
                }}>
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* ── Focus Areas ───────────────────────────────────────── */}
      <div style={fadeStyle(300)}>
        <GlassCard style={{ padding: "clamp(24px, 5vw, 40px)" }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 24,
          }}>
            Focus Areas
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {FOCUS_AREAS.map((area) => (
              <div key={area.tag} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  padding: "3px 12px",
                  borderRadius: 9999,
                  background: "rgba(29,78,216,0.08)",
                  border: "1px solid rgba(29,78,216,0.15)",
                  color: "var(--color-accent)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {area.tag}
                </span>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text)", lineHeight: 1.65 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}