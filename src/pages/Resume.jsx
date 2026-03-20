import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { DownloadIcon } from "../components/Icons";
import { cn } from "../utils/cn";

const RESUME_PATH = "/resume.pdf";

/**
 * Detect if the device is mobile/tablet.
 * Android Chrome and most mobile browsers can't render PDFs inline.
 */
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function Resume() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pdfFailed, setPdfFailed] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    setIsMobile(isMobileDevice());
    return () => clearTimeout(id);
  }, []);

  // After iframe loads, check if it actually rendered anything.
  // A blank body means the browser silently failed to render the PDF.
  const handleIframeLoad = () => {
    try {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc || doc.body?.innerHTML === "") {
        setPdfFailed(true);
      }
    } catch {
      // Cross-origin error = browser IS rendering it (PDF viewer took over) — good!
    }
  };

  const showFallback = isMobile || pdfFailed;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div
        className={cn(
          "max-w-7xl mx-auto transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        {/* Header */}
        <Card className="p-8 mb-5">
          <p className="text-xs uppercase tracking-widest2 mb-3 text-text-muted">
            Document
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Resume</h2>
              <p className="text-sm leading-relaxed text-text-muted">
                My full resume — experience, skills, and education.
              </p>
            </div>
            <a
              href={RESUME_PATH}
              download="YashChaudhari_Resume.pdf"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide bg-text text-surface-raised hover:opacity-80 transition-opacity"
            >
              <DownloadIcon />
              Download
            </a>
          </div>
        </Card>

        {showFallback ? (
          /* ── Mobile / failed: clean fallback card ── */
          <Card
            className="p-10 flex flex-col items-center justify-center text-center gap-6"
            style={{ minHeight: "40vh" }}
          >
            {/* Document icon */}
            <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-8 h-8 text-text-muted"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>

            <div>
              <p className="text-lg font-semibold mb-1">
                YashChaudhari_Resume.pdf
              </p>
              <p className="text-sm text-text-muted">
                PDF preview isn't supported on this device.
                <br />
                Open or download to view the full resume.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium tracking-wide bg-text text-surface-raised hover:opacity-80 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Open PDF
              </a>
              <a
                href={RESUME_PATH}
                download="YashChaudhari_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium tracking-wide border border-border hover:bg-border/30 transition-colors"
              >
                <DownloadIcon />
                Download
              </a>
            </div>
          </Card>
        ) : (
          /* ── Desktop: native iframe PDF viewer ── */
          <Card className="overflow-hidden" style={{ height: "80vh" }}>
            <iframe
              ref={iframeRef}
              src={RESUME_PATH}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              title="Resume PDF"
              aria-label="Resume PDF"
              onLoad={handleIframeLoad}
            />
          </Card>
        )}

        <p className="text-xs text-center mt-4 text-text-muted">
          Place your resume PDF at{" "}
          <code className="opacity-60">/public/resume.pdf</code> for it to
          appear here.
        </p>
      </div>
    </div>
  );
}
