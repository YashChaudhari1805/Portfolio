import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function AppShell() {
  const [page, setPage] = useState("home");
  const [transitioning, setTransitioning] = useState(false);

  const navigate = (target) => {
    if (target === page) return;
    setTransitioning(true);
    setTimeout(() => {
      setPage(target);
      setTransitioning(false);
    }, 300);
  };

  return (
    // bg-surface and text-text use the CSS-variable tokens — no dark: prefix needed
    <div className="min-h-screen bg-surface text-text transition-colors duration-500 font-sans">
      <Navbar page={page} navigate={navigate} />
      <main
        className={`transition-opacity duration-300 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {page === "home"     && <Home navigate={navigate} />}
        {page === "projects" && <Projects />}
        {page === "resume"   && <Resume />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
