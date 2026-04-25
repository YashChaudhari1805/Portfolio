import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { LinkedInIcon, GmailIcon, GitHubIcon, MoonIcon, SunIcon } from "./Icons";

const NAV_LINKS = ["home", "projects", "resume"];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-k-chaudhari/", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:cyash9665@gmail.com", Icon: GmailIcon },
  { label: "GitHub", href: "https://github.com/YashChaudhari1805", Icon: GitHubIcon, external: true },
];

export default function Navbar({ page, navigate }) {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = {
    background: "var(--glass-bg)",
    borderBottom: "1px solid var(--glass-border)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  const activeStyle = {
    background: darkMode ? "rgba(147,197,253,0.12)" : "rgba(29,78,216,0.10)",
    border: darkMode ? "1px solid rgba(147,197,253,0.22)" : "1px solid rgba(29,78,216,0.22)",
    color: "var(--color-heading)",
  };
  const inactiveStyle = {
    background: "transparent",
    border: "1px solid transparent",
    color: "var(--color-muted)",
  };

  const linkStyle = (link) => page === link ? activeStyle : inactiveStyle;

  const iconHover = {
    onMouseEnter: e => { e.currentTarget.style.color = "var(--color-heading)"; },
    onMouseLeave: e => { e.currentTarget.style.color = "var(--color-muted)"; },
  };

  return (
    <>
      {/* ── Fixed header bar ─────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          ...navBg,
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 max(16px, env(safe-area-inset-left, 0px) + 16px)",
            height: 60,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => { navigate("home"); setMobileOpen(false); }}
            aria-label="Go to home"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              color: "var(--color-heading)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
              flexShrink: 0,
            }}
          >
            YC<span style={{ color: "var(--color-muted)", fontSize: "0.72rem" }}> ML Developer</span>
          </button>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary navigation"
            style={{ display: "flex", gap: 4, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => navigate(link)}
                aria-current={page === link ? "page" : undefined}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.70rem",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 10,
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  display: "none", // hidden on mobile, shown via media query substitute below
                  ...linkStyle(link),
                }}
                className="desktop-nav-link"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Desktop social + theme toggle */}
          <div
            className="desktop-actions"
            style={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  display: "flex",
                  padding: 8,
                  borderRadius: 8,
                  color: "var(--color-muted)",
                  transition: "color 0.2s",
                }}
                {...iconHover}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <Icon />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "flex",
                padding: 8,
                borderRadius: 8,
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "var(--color-muted)",
                transition: "color 0.2s",
              }}
              {...iconHover}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="mobile-hamburger"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              padding: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 10,
              flexShrink: 0,
            }}
          >
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--color-text)",
              borderRadius: 2,
              transform: mobileOpen ? "rotate(45deg) translate(2px, 6px)" : "none",
              transition: "transform 0.25s ease",
              marginBottom: 4,
            }} />
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--color-text)",
              borderRadius: 2,
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.2s ease",
              marginBottom: 4,
            }} />
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--color-text)",
              borderRadius: 2,
              transform: mobileOpen ? "rotate(-45deg) translate(2px, -6px)" : "none",
              transition: "transform 0.25s ease",
            }} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ──────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="mobile-menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "var(--bg-base)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 24px 40px",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        {/* Nav links — large, tappable */}
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              onClick={() => { navigate(link); setMobileOpen(false); }}
              aria-current={page === link ? "page" : undefined}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 10vw, 3rem)",
                fontWeight: 400,
                color: page === link ? "var(--color-heading)" : "var(--color-muted)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--glass-border)",
                cursor: "pointer",
                padding: "20px 0",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 60 + 80}ms`,
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              {page === link && (
                <span style={{
                  marginLeft: 12,
                  fontSize: "0.9rem",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                }}>←</span>
              )}
            </button>
          ))}
        </nav>

        {/* Social + theme — bottom of the menu */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: mobileOpen ? 1 : 0,
            transition: "opacity 0.3s ease 0.25s",
          }}
        >
          <div style={{ display: "flex", gap: 4 }}>
            {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  display: "flex",
                  padding: 12,
                  borderRadius: 12,
                  border: "1px solid var(--glass-border)",
                  color: "var(--color-muted)",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 12,
              border: "1px solid var(--glass-border)",
              cursor: "pointer",
              background: "none",
              color: "var(--color-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      {/* ── Responsive style injection ───────────────────────────── */}
      <style>{`
        /* Desktop: show nav links + social, hide hamburger + mobile menu */
        @media (min-width: 768px) {
          .desktop-nav-link { display: inline-flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }

        /* Mobile: hide desktop nav links + social actions */
        @media (max-width: 767px) {
          .desktop-nav-link { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-menu { transition: none !important; }
        }
      `}</style>
    </>
  );
}