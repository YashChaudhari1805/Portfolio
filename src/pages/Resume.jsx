import { useEffect, useState } from "react";
import Card from "../components/Card";
import { DownloadIcon } from "../components/Icons";
import { cn } from "../utils/cn";

const RESUME_PATH = "/resume.pdf";

export default function Resume() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

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
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide bg-text text-surface-raised hover:opacity-80 transition-opacity"
            >
              <DownloadIcon />
              Download
            </a>
          </div>
        </Card>

        {/* PDF viewer */}
        <Card className="overflow-hidden" style={{ height: "80vh" }}>
          <object
            data={RESUME_PATH}
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full"
            aria-label="Resume PDF"
          >
            {/* Accessible fallback */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-10 text-center">
              <p className="text-lg font-medium">PDF preview unavailable</p>
              <p className="text-sm text-text-muted">
                Your browser may not support inline PDF display.
              </p>
              <a
                href={RESUME_PATH}
                download="YashChaudhari_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium tracking-wide bg-text text-surface-raised hover:opacity-80 transition-opacity"
              >
                <DownloadIcon />
                Download PDF instead
              </a>
            </div>
          </object>
        </Card>

        <p className="text-xs text-center mt-4 text-text-muted">
          Place your resume PDF at{" "}
          <code className="opacity-60">/public/resume.pdf</code> for it to
          appear here.
        </p>
      </div>
    </div>
  );
}
