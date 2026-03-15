import { cn } from "../utils/cn";

/**
 * Base card surface. Uses the CSS-variable-backed Tailwind tokens so
 * dark/light switching happens automatically via the `dark` class on <html>.
 */
export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface-raised shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
