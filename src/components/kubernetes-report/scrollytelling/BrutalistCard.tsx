import { cn } from "../../../lib/utils";
import { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function BrutalistCard({
  children,
  className,
  variant = "default",
  hover = true,
  padding = "md",
}: BrutalistCardProps) {
  const variantStyles = {
    default: {
      border: "border-[#1A1A2E]",
      shadow: "#1A1A2E",
    },
    primary: {
      border: "border-[#1E40AF]",
      shadow: "#1E40AF",
    },
    accent: {
      border: "border-[#10B981]",
      shadow: "#10B981",
    },
  };

  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "bg-white border-[3px]",
        styles.border,
        paddingStyles[padding],
        hover && "transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer",
        className
      )}
      style={{
        boxShadow: `6px 6px 0 ${styles.shadow}`,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = `8px 8px 0 ${styles.shadow}`;
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = `6px 6px 0 ${styles.shadow}`;
        }
      }}
    >
      {children}
    </div>
  );
}
