import { lazy, Suspense, Component } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

// Code-split each page so only the active route is loaded
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));

/* ── Error boundary (class component — hooks can't catch render errors) ── */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "var(--font-mono)",
            color: "var(--color-muted)",
            textAlign: "center",
            gap: 16,
          }}
        >
          <p style={{ fontSize: "2rem", margin: 0 }}>⚠</p>
          <p style={{ color: "var(--color-heading)", fontFamily: "var(--font-display)", fontSize: "1.4rem", margin: 0 }}>
            Something went wrong
          </p>
          <p style={{ fontSize: "0.82rem", maxWidth: "36ch", margin: 0 }}>
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = "/"; }}
            style={{
              marginTop: 8,
              padding: "8px 20px",
              borderRadius: 10,
              border: "1px solid var(--glass-border)",
              background: "transparent",
              color: "var(--color-text)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ── Suspense fallback ─────────────────────────────────────────────────── */
function PageLoader() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.12em",
      }}
    >
      <span
        style={{
          animation: "pulse 1.4s ease-in-out infinite",
        }}
      >
        loading…
      </span>
    </div>
  );
}

/* ── Page fade transition ──────────────────────────────────────────────── */
function FadePage({ children }) {
  return (
    <div
      style={{
        animation: "fadeUp 0.3s ease-out both",
      }}
    >
      {children}
    </div>
  );
}

/* ── Inner app — needs to be inside BrowserRouter to use hooks ──────────── */
function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive the current "page" label for Navbar active state
  const page = location.pathname === "/" ? "home"
    : location.pathname === "/projects" ? "projects"
      : location.pathname === "/resume" ? "resume"
        : "home";

  const handleNavigate = (target) => {
    const path = target === "home" ? "/" : `/${target}`;
    navigate(path);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: "100vh" }}>
      <Navbar page={page} navigate={handleNavigate} />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<FadePage><Home navigate={handleNavigate} /></FadePage>} />
            <Route path="/projects" element={<FadePage><Projects /></FadePage>} />
            <Route path="/resume" element={<FadePage><Resume /></FadePage>} />
            {/* Catch-all: redirect unknown paths to home */}
            <Route path="*" element={<FadePage><Home navigate={handleNavigate} /></FadePage>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </BrowserRouter>
  );
}