"use client";

import { useRef, useEffect, type ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right";

const animationMap: Record<Animation, string> = {
  "fade-up": "fade-up 0.7s ease-out both",
  "fade-in": "fade-in 0.5s ease-out both",
  "slide-in-left": "slide-in-left 0.7s ease-out both",
  "slide-in-right": "slide-in-right 0.7s ease-out both",
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        "--scroll-animation": animationMap[animation],
        animationDelay: delay ? `${delay}s` : undefined,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
