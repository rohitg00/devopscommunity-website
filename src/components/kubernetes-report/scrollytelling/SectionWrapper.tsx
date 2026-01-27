import { useEffect, useRef, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "alt" | "dark" | "hero";
  containerWidth?: "full" | "wide" | "narrow";
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  variant = "light",
  containerWidth = "wide",
  noPadding = false,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgVariants = {
    light: "bg-[#FAFAFA]",
    alt: "bg-[#F3F4F6]",
    dark: "bg-[#1A1A2E] text-white",
    hero: "hero-gradient text-white",
  };

  const containerWidths = {
    full: "max-w-full",
    wide: "max-w-7xl",
    narrow: "max-w-4xl",
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        bgVariants[variant],
        !noPadding && "section-padding",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-6 md:px-8 lg:px-12",
          containerWidths[containerWidth]
        )}
      >
        {children}
      </div>
    </section>
  );
}
