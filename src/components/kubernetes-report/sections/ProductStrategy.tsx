import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { DollarSign, Zap, Code2, User, CheckCircle } from "lucide-react";

const products = [
  {
    id: "finops",
    icon: DollarSign,
    color: "#10B981",
    title: "Autonomous FinOps Co-pilot",
    positioning:
      "An AI-powered co-pilot that doesn't just show you Kubernetes costs—it autonomously eliminates waste.",
    differentiator:
      "Shift from passive visibility to proactive, autonomous action.",
    personas: [
      {
        name: "Priya, Platform Engineer",
        pain: "Spends hours manually tuning resource requests/limits for hundreds of microservices.",
        success: "Reduced tuning time, fewer OOMKilled incidents, demonstrable waste reduction",
      },
      {
        name: "Frank, FinOps Analyst",
        pain: "Lacks technical expertise for Kubernetes optimizations.",
        success: "Predictable lower bills, clear audit trails, accurate cost attribution",
      },
    ],
    mvpFeatures: [
      "Cluster Onboarding: Read-only Helm agent for EKS, GKE, AKS",
      "AI Analysis Engine: Ingests CPU/memory usage from Metrics Server",
      "Rightsizing UI: Dashboard with AI-generated optimization recommendations",
      "Manual Action Workflow: One-click kubectl patch commands",
    ],
    roadmap: [
      { quarter: "Q1", phase: "MVP", feature: "Recommendation engine with manual approval" },
      { quarter: "Q2", phase: "GitOps", feature: "Auto-create PRs with recommended changes" },
      { quarter: "Q3", phase: "Autonomous", feature: "Opt-in autonomous mode for dev/staging" },
      { quarter: "Q4", phase: "Advanced", feature: "HPA management, spot instances, cluster autoscaling" },
    ],
  },
  {
    id: "troubleshooter",
    icon: Zap,
    color: "#F59E0B",
    title: "AI-Powered Troubleshooter",
    positioning:
      "The AI SRE for your Kubernetes clusters. Get instant AI-driven root cause analysis instead of drowning in dashboards.",
    differentiator:
      "Provides answers, not just data, by correlating signals automatically.",
    personas: [
      {
        name: "Alex, Application Developer",
        pain: "On-call at 2 AM jumping between Grafana, Loki, Jaeger.",
        success: "Identify root cause in under 5 minutes, reduced on-call burnout",
      },
      {
        name: "Sam, Site Reliability Engineer",
        pain: "Spends significant time on post-incident reviews piecing together data.",
        success: "50% MTTR reduction, automated post-mortem evidence",
      },
    ],
    mvpFeatures: [
      "Data Integration: Connectors for Prometheus, Loki, K8s Events API",
      "Incident Context Input: Simple UI for alert specification",
      "AI Correlation Engine: Analyzes four golden signals and logs",
      "Root Cause Summary: Plain-English markdown report",
    ],
    roadmap: [
      { quarter: "Q1", phase: "MVP", feature: "Post-incident analysis tool" },
      { quarter: "Q2", phase: "Real-Time", feature: "Alertmanager integration, Slack/Teams delivery" },
      { quarter: "Q3", phase: "Deep Observability", feature: "OpenTelemetry/Jaeger support, eBPF signals" },
      { quarter: "Q4", phase: "Predictive", feature: "Failure detection, PR-level risk analysis" },
    ],
  },
  {
    id: "devenv",
    icon: Code2,
    color: "#8B5CF6",
    title: "Remote Development Environment",
    positioning:
      "Code locally, test in the cloud. Get ephemeral production-replica Kubernetes environments in seconds.",
    differentiator:
      "Best of both worlds—local development speed with realistic cloud fidelity.",
    personas: [
      {
        name: "Chloe, Microservice Developer",
        pain: "'Works on my machine' daily reality. 15-minute CI feedback loop.",
        success: "Sub-minute feedback loop, fewer late-stage CI bugs",
      },
      {
        name: "Priya, Platform Engineer",
        pain: "Shared staging constantly broken from 100+ developer contention.",
        success: "Significant support ticket reduction, lower cloud costs",
      },
    ],
    mvpFeatures: [
      "CLI Tool: Simple `dev-env connect <deployment>` interface",
      "Traffic Interception: Proxy redirects remote pod traffic to local",
      "Environment Injection: Fetches remote pod env vars/secrets",
      "Network Proxy: Routes local calls through cluster for DNS access",
    ],
    roadmap: [
      { quarter: "Q1", phase: "MVP", feature: "CLI for single-service traffic interception" },
      { quarter: "Q2", phase: "Isolation", feature: "vcluster integration for ephemeral namespaces" },
      { quarter: "Q3", phase: "IDP", feature: "Backstage plugin for web UI management" },
      { quarter: "Q4", phase: "GitOps", feature: "Environment composition via YAML config" },
    ],
  },
];

export function ProductStrategy() {
  return (
    <SectionWrapper id="product-strategy" variant="light">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            06
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">
          Product Strategy Framework
        </h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          Comprehensive product strategies for three distinct Kubernetes
          developer tool opportunities, each addressing severe unmet needs while
          aligning with 2026 platform engineering trends.
        </p>
      </div>

      {/* Product Roadmap Overview */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white border-[3px] border-[#1A1A2E] overflow-hidden" style={{ boxShadow: "6px 6px 0 #1A1A2E" }}>
          <div className="p-6 border-b-[3px] border-[#1A1A2E]">
            <h3 className="heading-sm text-[#1A1A2E] mb-2">Product Roadmap Overview</h3>
            <p className="text-sm text-[#6B7280]">
              Each product follows a phased approach from MVP to full autonomy
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {["Q1 - MVP", "Q2 - Integration", "Q3 - Automation", "Q4 - Advanced"].map((quarter, idx) => (
                <div key={quarter} className="text-center">
                  <div className="w-full h-2 bg-[#1E40AF] mb-2" style={{ opacity: 0.3 + (idx * 0.2) }} />
                  <span className="text-xs font-mono text-[#6B7280]">{quarter}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0" style={{ backgroundColor: product.color }}>
                    <product.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A2E] w-48 shrink-0">{product.title}</span>
                  <div className="flex-1 grid grid-cols-4 gap-2">
                    {product.roadmap.map((item) => (
                      <div 
                        key={item.quarter} 
                        className="text-xs px-2 py-1 bg-[#F3F4F6] border border-[#E5E7EB] truncate"
                        title={item.feature}
                      >
                        {item.phase}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-12">
        {products.map((product) => (
          <div key={product.id} className="fade-in-up">
            <div
              className="bg-white border-[3px] border-[#1A1A2E] p-6 md:p-8"
              style={{ boxShadow: `8px 8px 0 ${product.color}` }}
            >
              {/* Product Header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="w-14 h-14 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: product.color }}
                >
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="heading-md text-[#1A1A2E] mb-2">
                    {product.title}
                  </h3>
                  <p className="body-md text-[#6B7280]">{product.positioning}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Personas */}
                <div>
                  <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-4">
                    Target Personas
                  </p>
                  <div className="space-y-4">
                    {product.personas.map((persona) => (
                      <div
                        key={persona.name}
                        className="border-2 border-[#E5E7EB] p-4 hover:border-[#1E40AF] transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <User className="w-4 h-4 text-[#1E40AF]" />
                          <p className="font-bold text-[#1A1A2E]">
                            {persona.name}
                          </p>
                        </div>
                        <p className="text-sm text-[#6B7280] mb-2">
                          <span className="font-medium text-[#F43F5E]">Pain: </span>
                          {persona.pain}
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          <span className="font-medium text-[#10B981]">
                            Success:{" "}
                          </span>
                          {persona.success}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: MVP Features */}
                <div>
                  <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-4">
                    Core MVP Features
                  </p>
                  <ul className="space-y-3">
                    {product.mvpFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: product.color }}
                        />
                        <span className="text-sm text-[#6B7280]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Roadmap */}
              <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
                <p className="text-xs font-mono font-bold text-[#1E40AF] uppercase mb-4">
                  Phased Roadmap
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.roadmap.map((item) => (
                    <div
                      key={item.quarter}
                      className="border-2 p-3"
                      style={{ borderColor: product.color }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-mono font-bold px-2 py-0.5"
                          style={{
                            backgroundColor: product.color,
                            color: "white",
                          }}
                        >
                          {item.quarter}
                        </span>
                        <span className="text-xs font-bold text-[#6B7280]">
                          {item.phase}
                        </span>
                      </div>
                      <p className="text-sm text-[#1A1A2E]">{item.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
