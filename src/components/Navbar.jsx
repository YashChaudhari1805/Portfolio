import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { LinkedInIcon, GmailIcon, GitHubIcon, MoonIcon, SunIcon } from "./Icons";

const NAV_LINKS = ["home", "projects", "resume"];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-k-chaudhari/", Icon: LinkedInIcon },
  { label: "Email",    href: "mailto:cyash9665@gmail.com",                    Icon: GmailIcon },
  { label: "GitHub",   href: "https://github.com/YashChaudhari1805",          Icon: GitHubIcon, external: true },
];

/* Inline style helpers so tokens work in both themes without Tailwind conflicts */
const navbarStyle = {
  background: "var(--glass-bg)",
  border:     "1px solid var(--glass-border)",
  backdropFilter:        "blur(20px)",
  WebkitBackdropFilter:  "blur(20px)",
  boxShadow: "var(--shadow-glass)",
  transition: "background 0.35s ease, border-color 0.35s ease",
};

export default function Navbar({ page, navigate }) {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeStyle = {
    background:  "rgba(29,78,216,0.10)",
    border:      "1px solid rgba(29,78,216,0.22)",
    color:       "var(--color-heading)",
  };
  const activeDarkStyle = {
    background:  "rgba(147,197,253,0.10)",
    border:      "1px solid rgba(147,197,253,0.22)",
    color:       "var(--color-heading)",
  };
  const inactiveStyle = {
    background:  "transparent",
    border:      "1px solid transparent",
    color:       "var(--color-muted)",
  };

  const linkStyle = (link) =>
    page === link
      ? (darkMode ? activeDarkStyle : activeStyle)
      : inactiveStyle;

  const iconStyle = { color: "var(--color-muted)", background: "transparent", border: "none" };

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "12px max(16px, env(safe-area-inset-left, 0px) + 12px)",
      }}
    >
      {/* Main bar */}
      <div
        style={{
          ...navbarStyle,
          maxWidth: 980,
          margin: "0 auto",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          aria-label="Home"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.12em",
            color: "var(--color-heading)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
          }}
        >
          YC<span style={{ color: "var(--color-muted)" }}> ML Developer</span>
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{ display: "flex", gap: 4, alignItems: "center" }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigate(link)}
              aria-current={page === link ? "page" : undefined}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 10,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                ...linkStyle(link),
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{ ...iconStyle, padding: 8, borderRadius: 8, display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--color-heading)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ ...iconStyle, padding: 8, borderRadius: 8, cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--color-heading)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden"
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 8, display: "flex", flexDirection: "column", gap: 5,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "var(--color-text)", borderRadius: 2, transition: "transform 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "var(--color-text)", borderRadius: 2 }} />
          <span style={{ display: "block", width: 14, height: 2, background: "var(--color-text)", borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            ...navbarStyle,
            maxWidth: 980,
            margin: "8px auto 0",
            borderRadius: 16,
            padding: "16px",
          }}
        >
          {/* Nav links */}
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => { navigate(link); setMobileOpen(false); }}
              aria-current={page === link ? "page" : undefined}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                padding: "10px 14px",
                borderRadius: 10,
                cursor: "pointer",
                marginBottom: 4,
                transition: "background 0.2s, color 0.2s",
                ...linkStyle(link),
              }}
            >
              {link}
            </button>
          ))}

          {/* Social + theme toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginTop: 12,
              paddingTop: 12,
              borderTop: "1px solid var(--glass-border)",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{ ...iconStyle, padding: 8, borderRadius: 8, display: "flex" }}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <Icon />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{ ...iconStyle, marginLeft: "auto", padding: 8, borderRadius: 8, cursor: "pointer" }}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
