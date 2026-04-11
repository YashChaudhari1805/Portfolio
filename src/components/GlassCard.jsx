import { forwardRef } from "react";

const GlassCard = forwardRef(function GlassCard(
  { children, className = "", style = {}, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

export default GlassCard;
