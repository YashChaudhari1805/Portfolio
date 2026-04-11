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
    }, 220);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: "100vh" }}>
      <Navbar page={page} navigate={navigate} />
      <main
        style={{
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.22s ease",
        }}
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
