import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { LinkedInIcon, GmailIcon, GitHubIcon, MoonIcon, SunIcon } from "./Icons";
import { cn } from "../utils/cn";

const NAV_LINKS = ["home", "projects", "resume"];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-k-chaudhari/",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:cyash9665@gmail.com",
    Icon: GmailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/YashChaudhari1805",
    Icon: GitHubIcon,
    external: true,
  },
];

export default function Navbar({ page, navigate }) {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const iconBtn = "p-2 rounded-lg transition-colors hover:bg-border/40";
  const activeLink = "bg-text text-surface-raised";
  const inactiveLink = "hover:bg-border/40 transition-colors";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-xl border border-border bg-surface-raised/80 shadow-card backdrop-blur-md transition-colors duration-500">
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="text-lg font-semibold tracking-wide opacity-100 hover:opacity-60 transition-opacity"
          aria-label="Go to home"
        >
          YC
        </button>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigate(link)}
              aria-current={page === link ? "page" : undefined}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm capitalize tracking-wide",
                page === link ? activeLink : inactiveLink
              )}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-1">
          {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={iconBtn}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={iconBtn}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-border/40 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-3 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-xl border border-border bg-surface-raised/95 shadow-card p-4 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => { navigate(link); setMobileOpen(false); }}
              aria-current={page === link ? "page" : undefined}
              className={cn(
                "block w-full text-left px-4 py-2.5 rounded-lg text-sm capitalize tracking-wide mb-1",
                page === link ? activeLink : inactiveLink
              )}
            >
              {link}
            </button>
          ))}
          <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
            {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={iconBtn}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <Icon />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={cn(iconBtn, "ml-auto")}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
