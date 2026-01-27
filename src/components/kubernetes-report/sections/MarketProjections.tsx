import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { MetricCard } from "../scrollytelling/MetricCard";
import { BrutalistCard } from "../scrollytelling/BrutalistCard";
import { DollarSign, TrendingUp, Zap, Server, Users } from "lucide-react";

const opportunities = [
  {
    icon: DollarSign,
    title: "FinOps Automation",
    pain: "23-35% Kubernetes waste",
    opportunity: "Autonomous cost optimization and right-sizing",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "AI-Powered Troubleshooting",
    pain: "Complex deployment debugging",
    opportunity: "Intelligent root cause analysis with LLMs",
    color: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Remote Development Environments",
    pain: "Local/production environment mismatch",
    opportunity: "High-fidelity cloud dev environments",
    color: "#8B5CF6",
  },
];

const marketData = [
  { label: "K8s Management Tools Market", current: "$1.8B", projected: "$4.2B", growth: "133%" },
  { label: "Median Platform Budget", current: "$0.8M", projected: "$2M+", growth: "150%" },
  { label: "Leading Org Investment", current: "$3M", projected: "$7.5M", growth: "150%" },
  { label: "K8s Production Usage", current: "66%", projected: "82%", growth: "+16pts" },
  { label: "Cloud-Native Adoption", current: "85%", projected: "98%", growth: "+13pts" },
];

export function MarketProjections() {
  return (
    <SectionWrapper id="market-projections" variant="alt">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            04
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">
          Market Projections for 2026
        </h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          The Kubernetes management tools market demonstrates explosive growth
          as organizations deploy increasingly complex multi-cluster
          environments.
        </p>
      </div>

      {/* Budget Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="fade-in-up">
          <MetricCard
            metric="$2M+"
            description="Median platform engineering budget rising from sub-$1M—a doubling in investment"
            sentiment="good"
          />
        </div>
        <div className="fade-in-up">
          <MetricCard
            metric="$5-10M"
            description="Leading organizations investing to support comprehensive AI, security, and observability"
            sentiment="good"
          />
        </div>
      </div>

      {/* Market Growth Data */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white border-[3px] border-[#1A1A2E] overflow-hidden" style={{ boxShadow: "6px 6px 0 #1A1A2E" }}>
          <div className="p-6 border-b-[3px] border-[#1A1A2E] flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1E40AF] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="heading-sm text-[#1A1A2E]">Market Growth Trajectory</h3>
              <p className="text-xs font-mono text-[#6B7280] uppercase tracking-wide">
                2023 → 2026-28 Projections
              </p>
            </div>
          </div>
          
          <div className="divide-y divide-[#E5E7EB]">
            {marketData.map((item, idx) => (
              <div key={item.label} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/3">
                  <p className="font-semibold text-[#1A1A2E]">{item.label}</p>
                </div>
                <div className="md:w-2/3 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#6B7280]">2023: <span className="font-bold text-[#1A1A2E]">{item.current}</span></span>
                      <span className="text-sm text-[#6B7280]">2026-28: <span className="font-bold text-[#1E40AF]">{item.projected}</span></span>
                    </div>
                    <div className="h-3 bg-[#E5E7EB] border border-[#1A1A2E] relative overflow-hidden">
                      <div 
                        className="h-full bg-[#1E40AF] transition-all duration-1000"
                        style={{ width: idx < 3 ? '100%' : `${parseInt(item.projected)}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#10B981] whitespace-nowrap">
                    +{item.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-[#F3F4F6] border-t-[3px] border-[#1A1A2E] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#D1D5DB] border border-[#1A1A2E]" />
                <span className="text-xs font-mono text-[#6B7280]">2023 Baseline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#1E40AF] border border-[#1A1A2E]" />
                <span className="text-xs font-mono text-[#6B7280]">2026-28 Projected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underserved Segments */}
      <div className="mb-8">
        <h3 className="heading-md text-[#1A1A2E] mb-6 fade-in-up">
          Three Underserved Segments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((opp) => (
            <div key={opp.title} className="fade-in-up">
              <BrutalistCard hover={true} padding="lg">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4"
                  style={{ backgroundColor: opp.color }}
                >
                  <opp.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="heading-sm text-[#1A1A2E] mb-3">{opp.title}</h4>
                <div className="mb-4">
                  <p className="text-xs font-mono uppercase text-[#6B7280] mb-1">
                    Pain Point
                  </p>
                  <p className="body-md text-[#1A1A2E] font-medium">
                    {opp.pain}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-[#6B7280] mb-1">
                    Opportunity
                  </p>
                  <p className="body-md text-[#6B7280]">{opp.opportunity}</p>
                </div>
              </BrutalistCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
