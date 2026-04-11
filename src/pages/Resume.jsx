import { useEffect, useState, useRef } from "react";
import GlassCard from "../components/GlassCard";
import { DownloadIcon, ExternalLinkIcon } from "../components/Icons";

const RESUME_PATH = "/resume.pdf";

/**
 * Android Chrome and most mobile WebViews cannot render PDFs in iframes.
 * We detect mobile broadly and always show the fallback card there.
 * On desktop we try the iframe and fall back if it reports blank content.
 */
function isMobileOrTablet() {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/* ── Small document icon ── */
function DocIcon() {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      style={{ width: 36, height: 36, color: "var(--color-accent)" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5
           A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25
           m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125
           v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125
           V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

/* ── Shared action button ── */
function ActionBtn({ href, download, children, primary = false, target, rel }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em",
    padding: "10px 22px", borderRadius: 12, textDecoration: "none", cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s, color 0.2s",
    border: primary
      ? "1px solid rgba(29,78,216,0.30)"
      : "1px solid var(--glass-border)",
    background: primary
      ? "rgba(29,78,216,0.10)"
      : "transparent",
    color: primary ? "var(--color-heading)" : "var(--color-muted)",
  };
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      style={base}
      onMouseEnter={e => {
        if (primary) e.currentTarget.style.background = "rgba(29,78,216,0.18)";
        else { e.currentTarget.style.borderColor = "var(--color-muted)"; e.currentTarget.style.color = "var(--color-text)"; }
      }}
      onMouseLeave={e => {
        if (primary) e.currentTarget.style.background = "rgba(29,78,216,0.10)";
        else { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.color = "var(--color-muted)"; }
      }}
    >
      {children}
    </a>
  );
}

export default function Resume() {
  const [visible, setVisible] = useState(false);
  const [pdfFailed, setPdfFailed] = useState(false);
  const isMobile = isMobileOrTablet();
  const iframeRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  const handleIframeLoad = () => {
    try {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc || !doc.body || doc.body.innerHTML === "") setPdfFailed(true);
    } catch {
      // Cross-origin = PDF viewer loaded correctly — good
    }
  };

  // Show fallback card on: mobile, or desktop when iframe fails
  const showFallback = isMobile || pdfFailed;

  return (
    <div className="page-container">
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}>
        {/* ── Page header ──────────────────────────────────── */}
        <GlassCard style={{ padding: "clamp(24px, 5vw, 44px)", marginBottom: 16 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.68rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--color-muted)", marginBottom: 16,
          }}>
            Document
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                color: "var(--color-heading)", fontWeight: 400, marginBottom: 8,
              }}>
                Resume
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
                Full credentials — experience, education &amp; skills.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <ActionBtn href={RESUME_PATH} target="_blank" rel="noreferrer">
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                Open
              </ActionBtn>
              <ActionBtn href={RESUME_PATH} download="YashChaudhari_Resume.pdf" primary>
                <DownloadIcon className="w-3.5 h-3.5" />
                Download
              </ActionBtn>
            </div>
          </div>
        </GlassCard>

        {/* ── PDF viewer or mobile fallback ────────────────── */}
        {showFallback ? (
          /* Mobile / iframe-failed: friendly card */
          <GlassCard style={{
            padding: "clamp(32px, 8vw, 64px) clamp(24px, 6vw, 48px)",
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center", gap: 24,
            minHeight: "40vh",
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: "rgba(29,78,216,0.08)", border: "1px solid rgba(29,78,216,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <DocIcon />
            </div>

            <div>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 3vw, 1.3rem)",
                color: "var(--color-heading)", fontWeight: 400, marginBottom: 8,
              }}>
                YashChaudhari_Resume.pdf
              </p>
              <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.6, maxWidth: "36ch" }}>
                Inline PDF preview isn't supported on this device.
                Use the buttons below to open or download the resume.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 280 }}>
              <ActionBtn href={RESUME_PATH} target="_blank" rel="noreferrer" primary>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                Open PDF
              </ActionBtn>
              <ActionBtn href={RESUME_PATH} download="YashChaudhari_Resume.pdf">
                <DownloadIcon className="w-3.5 h-3.5" />
                Download PDF
              </ActionBtn>
            </div>

            {/* Tip for Android users */}
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: "0.65rem",
              letterSpacing: "0.06em", color: "var(--color-subtle)",
              maxWidth: "38ch", lineHeight: 1.6,
            }}>
              Tip: tap "Open PDF" — Chrome on Android will display it in the browser's built-in PDF viewer.
            </p>
          </GlassCard>
        ) : (
          /* Desktop: embedded iframe */
          <GlassCard style={{ height: "80vh", overflow: "hidden" }}>
            <iframe
              ref={iframeRef}
              src={`${RESUME_PATH}#toolbar=1&navpanes=0&scrollbar=1`}
              width="100%"
              height="100%"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              title="Resume PDF"
              aria-label="Resume PDF"
              onLoad={handleIframeLoad}
            />
          </GlassCard>
        )}
      </div>
    </div>
  );
}
