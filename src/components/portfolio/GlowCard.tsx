import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export const GlowCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { children: ReactNode }>(
  ({ children, className = "", onMouseMove, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
          onMouseMove?.(e);
        }}
        className={`glow-card rounded-xl border border-border bg-card/60 ${className}`}
      >
        {children}
      </div>
    );
  }
);
GlowCard.displayName = "GlowCard";
