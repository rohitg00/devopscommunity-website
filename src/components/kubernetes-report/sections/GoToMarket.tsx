import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { MetricCard } from "../scrollytelling/MetricCard";
import { DollarSign, Users, Zap, Gift, Star } from "lucide-react";

const pricingModels = [
  {
    name: "Open Core",
    icon: Gift,
    description: "Free core product with paid enterprise features",
    examples: ["GitLab", "Grafana", "HashiCorp"],
    pros: ["Community adoption", "Developer trust", "Network effects"],
    cons: ["Balancing free vs paid", "Support costs"],
    color: "#1E40AF",
  },
  {
    name: "Usage-Based",
    icon: Zap,
    description: "Pay for what you use (nodes, requests, data)",
    examples: ["Datadog", "New Relic", "Snowflake"],
    pros: ["Scales with value", "Low barrier", "Predictable unit economics"],
    cons: ["Bill shock risk", "Complex pricing"],
    color: "#10B981",
  },
  {
    name: "Seat-Based",
    icon: Users,
    description: "Per-user or per-seat licensing",
    examples: ["Slack", "Atlassian", "GitHub"],
    pros: ["Predictable revenue", "Simple pricing", "Easy to budget"],
    cons: ["Limits adoption", "Gaming user counts"],
    color: "#F59E0B",
  },
  {
    name: "Value-Based",
    icon: DollarSign,
    description: "Pricing tied to delivered value (savings, efficiency)",
    examples: ["Spot.io", "Cast AI"],
    pros: ["Aligned incentives", "Easy ROI justification"],
    cons: ["Complex measurement", "Revenue variability"],
    color: "#8B5CF6",
  },
];

const communityStrategies = [
  "Maintain active open-source projects",
  "Host technical webinars and workshops",
  "Create comprehensive documentation & tutorials",
  "Sponsor developer conferences and meetups",
  "Build certification programs that validate expertise",
];

export function GoToMarket() {
  return (
    <SectionWrapper id="go-to-market" variant="alt">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            07
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">
          Go-to-Market Strategy
        </h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          Proven pricing models and distribution strategies for cloud-native
          developer tools, leveraging open-core models and community-led
          adoption.
        </p>
      </div>

      {/* Pricing Model Comparator */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white border-[3px] border-[#1A1A2E] overflow-hidden" style={{ boxShadow: "6px 6px 0 #1A1A2E" }}>
          <div className="p-6 border-b-[3px] border-[#1A1A2E]">
            <h3 className="heading-sm text-[#1A1A2E] mb-2">Pricing Model Comparison</h3>
            <p className="text-sm text-[#6B7280]">
              Evaluate different pricing strategies for cloud-native developer tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {pricingModels.map((model) => (
              <div key={model.name} className="p-6 hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: model.color }}
                  >
                    <model.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1A1A2E]">{model.name}</h4>
                </div>
                
                <p className="text-sm text-[#6B7280] mb-4">{model.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-mono uppercase text-[#6B7280] mb-2">Examples</p>
                  <div className="flex flex-wrap gap-1">
                    {model.examples.map((ex) => (
                      <span key={ex} className="text-xs px-2 py-0.5 bg-[#F3F4F6] border border-[#E5E7EB]">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-mono uppercase text-[#10B981] mb-1">Pros</p>
                    <ul className="text-xs text-[#6B7280] space-y-0.5">
                      {model.pros.map((pro) => (
                        <li key={pro}>+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-[#F43F5E] mb-1">Cons</p>
                    <ul className="text-xs text-[#6B7280] space-y-0.5">
                      {model.cons.map((con) => (
                        <li key={con}>- {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-[#F3F4F6] border-t-[3px] border-[#1A1A2E]">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-sm text-[#6B7280]">
                <strong>Recommendation:</strong> Open Core + Usage-Based hybrid for Kubernetes tools
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Community Strategy */}
      <div className="mb-8">
        <h3 className="heading-md text-[#1A1A2E] mb-6 fade-in-up">
          Community-Led Adoption Strategy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communityStrategies.map((strategy, idx) => (
            <div key={idx} className="fade-in-up">
              <div className="bg-white border-2 border-[#1A1A2E] p-4 flex items-center gap-4 hover:bg-[#F3F4F6] transition-colors">
                <span className="w-8 h-8 bg-[#1E40AF] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#1A1A2E]">{strategy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="fade-in-up">
        <MetricCard
          metric="5x"
          description="Faster growth for companies with strong partner ecosystems, demonstrating the power of community-led adoption"
          sentiment="good"
        />
      </div>
    </SectionWrapper>
  );
}
