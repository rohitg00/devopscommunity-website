import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { DollarSign, Zap, Code2, CheckCircle2 } from "lucide-react";

const opportunities = [
  {
    number: "01",
    icon: DollarSign,
    title: "The Autonomous FinOps Co-pilot for Kubernetes",
    color: "#10B981",
    problem:
      "Enterprises struggle with runaway Kubernetes costs. Existing tools like Kubecost provide visibility but require manual analysis and remediation.",
    market:
      "Mid-to-large enterprises with $1M+ annual cloud spend. Primary buyers are Platform Engineering and FinOps teams.",
    whiteSpace:
      "While cost visibility is crowded, autonomous optimization is nascent. The opportunity is a 'set and forget' agent.",
    targetMetric: "30%",
    metricLabel: "Target cost reduction through autonomous optimization",
  },
  {
    number: "02",
    icon: Zap,
    title: "The AI-Powered Kubernetes Troubleshooter",
    color: "#F59E0B",
    problem:
      "Debugging in Kubernetes requires deep expertise and manual correlation across disparate tools, extending MTTR.",
    market:
      "Organizations with complex microservices architectures. Users are DevOps Engineers and SREs on-call.",
    whiteSpace:
      "Observability tools present data but don't interpret it. The gap is actionable, plain-language insights.",
    targetMetric: "70%+",
    metricLabel: "MTTR reduction with intelligent analysis",
  },
  {
    number: "03",
    icon: Code2,
    title: "The High-Fidelity Remote Development Environment",
    color: "#8B5CF6",
    problem:
      "The 'inner loop' is broken. Local environments fail to replicate production complexity causing 'works on my machine' issues.",
    market:
      "Companies with large dev teams and complex multi-service applications. Users are Application Developers.",
    whiteSpace:
      "Tools like Tilt accelerate builds but don't solve fidelity. The gap is fast iteration against production-replica slices.",
    targetMetric: "10x",
    metricLabel: "Faster feedback cycles with cloud environments",
  },
];

const prioritizationCriteria = [
  {
    name: "Pain Severity",
    description:
      "FinOps and troubleshooting rank highest due to direct cost and productivity impact.",
  },
  {
    name: "Market Size",
    description:
      "All target enterprise segments ($1M+ cloud spend, 100+ developers).",
  },
  {
    name: "Competitive Intensity",
    description:
      "FinOps visibility crowded, autonomous optimization wide open.",
  },
  {
    name: "2026 Trend Alignment",
    description:
      "All leverage AI (94% critical), platform engineering growth, complexity tax theme.",
  },
];

export function MarketOpportunities() {
  return (
    <SectionWrapper id="market-opportunities" variant="dark">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest">
            05
          </span>
          <div className="h-px flex-1 bg-white/20" />
        </div>
        <h2 className="heading-lg text-white mb-4">
          Three High-Impact Market Opportunities
        </h2>
        <p className="body-lg text-white/70 max-w-3xl">
          Our analysis identified three distinct product opportunities at the
          intersection of severe developer pain, underserved market segments,
          and 2026 technology trends.
        </p>
      </div>

      {/* Opportunity Matrix Description */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white/5 border-2 border-white/20 p-6 md:p-8">
          <h3 className="heading-sm text-white mb-4">Market Opportunity Analysis</h3>
          <p className="body-md text-white/70 mb-6">
            Each opportunity is evaluated across multiple dimensions: pain severity, market size, 
            competitive intensity, and alignment with 2026 trends. The FinOps Co-pilot emerges as 
            the highest-priority opportunity due to direct ROI measurability and urgent economic pressure.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {opportunities.map((opp) => (
              <div key={opp.number} className="text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center mb-2" style={{ backgroundColor: opp.color }}>
                  <opp.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold text-white">{opp.number}</p>
                <p className="text-xs text-white/60">{opp.title.split(' ').slice(1, 3).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Detail */}
      <div className="space-y-8 mb-12">
        {opportunities.map((opp) => (
          <div key={opp.number} className="fade-in-up">
            <div
              className="bg-white border-[3px] border-[#1A1A2E] p-6 md:p-8"
              style={{ boxShadow: `8px 8px 0 ${opp.color}` }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left: Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center"
                      style={{ backgroundColor: opp.color }}
                    >
                      <opp.icon className="w-7 h-7 text-white" />
                    </div>
                    <span
                      className="text-5xl font-bold opacity-20"
                      style={{ color: opp.color }}
                    >
                      {opp.number}
                    </span>
                  </div>
                  <h3 className="heading-sm text-[#1A1A2E] mb-4">{opp.title}</h3>
                  {/* Target Metric */}
                  <div
                    className="p-4 border-2"
                    style={{ borderColor: opp.color }}
                  >
                    <p
                      className="text-3xl font-bold"
                      style={{ color: opp.color }}
                    >
                      {opp.targetMetric}
                    </p>
                    <p className="text-sm text-[#6B7280]">{opp.metricLabel}</p>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:w-2/3 space-y-4">
                  <div>
                    <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-2">
                      Core Problem
                    </p>
                    <p className="body-md text-[#6B7280]">{opp.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-2">
                      Target Market
                    </p>
                    <p className="body-md text-[#6B7280]">{opp.market}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-2">
                      Competitive White Space
                    </p>
                    <p className="body-md text-[#6B7280]">{opp.whiteSpace}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prioritization Framework */}
      <div className="mb-12">
        <h3 className="heading-md text-white mb-6 fade-in-up">
          Prioritization Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prioritizationCriteria.map((criteria) => (
            <div
              key={criteria.name}
              className="fade-in-up bg-white/5 border-2 border-white/20 p-5 hover:border-white/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">{criteria.name}</p>
                  <p className="text-sm text-white/60">{criteria.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="fade-in-up">
        <div className="bg-[#10B981] p-6 md:p-8 border-[3px] border-white">
          <p className="text-xs font-mono font-bold uppercase tracking-wide text-white/70 mb-2">
            Recommendation
          </p>
          <p className="body-lg text-white">
            <strong>The Autonomous FinOps Co-pilot ranks #1</strong> due to
            direct ROI measurability, urgent economic pressure, and clearest
            path to product-market fit. The AI Troubleshooter is #2 for broad
            applicability. The Remote Dev Environment is #3, strategic for
            platform engineering but requires deeper ecosystem integration.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
