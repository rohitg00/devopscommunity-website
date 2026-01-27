import { cn } from "../../../lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  metric: string;
  description: string;
  sentiment?: "good" | "bad" | "neutral";
  className?: string;
  variant?: "default" | "compact" | "featured";
}

export function MetricCard({
  metric,
  description,
  sentiment = "neutral",
  className,
  variant = "default",
}: MetricCardProps) {
  const sentimentStyles = {
    good: {
      border: "border-[#10B981]",
      shadow: "#10B981",
      icon: <TrendingUp className="w-6 h-6 text-[#10B981]" />,
      metricColor: "text-[#10B981]",
    },
    bad: {
      border: "border-[#F43F5E]",
      shadow: "#F43F5E",
      icon: <TrendingDown className="w-6 h-6 text-[#F43F5E]" />,
      metricColor: "text-[#F43F5E]",
    },
    neutral: {
      border: "border-[#1A1A2E]",
      shadow: "#1A1A2E",
      icon: <Minus className="w-6 h-6 text-[#6B7280]" />,
      metricColor: "text-[#1E40AF]",
    },
  };

  const styles = sentimentStyles[sentiment];

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "bg-white border-2 p-4",
          styles.border,
          className
        )}
        style={{
          boxShadow: `4px 4px 0 ${styles.shadow}`,
        }}
      >
        <div className="flex items-center gap-3">
          {styles.icon}
          <div>
            <p className={cn("text-2xl font-bold", styles.metricColor)}>
              {metric}
            </p>
            <p className="text-sm text-[#6B7280]">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "bg-white border-[3px] p-8 text-center",
          styles.border,
          className
        )}
        style={{
          boxShadow: `8px 8px 0 ${styles.shadow}`,
        }}
      >
        <div className="flex justify-center mb-4">{styles.icon}</div>
        <p className={cn("metric-display mb-3", styles.metricColor)}>
          {metric}
        </p>
        <p className="body-md text-[#6B7280]">{description}</p>
      </div>
    );
  }

  return (
    <div
      className={cn("bg-white border-[3px] p-6", styles.border, className)}
      style={{
        boxShadow: `6px 6px 0 ${styles.shadow}`,
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <p className={cn("text-4xl font-bold", styles.metricColor)}>{metric}</p>
        {styles.icon}
      </div>
      <p className="body-md text-[#6B7280]">{description}</p>
    </div>
  );
}
