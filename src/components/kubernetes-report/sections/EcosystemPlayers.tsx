import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { MetricCard } from "../scrollytelling/MetricCard";

const projectStats = [
  { label: "Graduated Projects", count: 34, color: "#1E40AF" },
  { label: "Incubating Projects", count: 37, color: "#6B7280" },
  { label: "Sandbox Projects", count: 143, color: "#D1D5DB" },
];

const keyProjects = [
  { name: "Kubernetes", category: "Orchestration", status: "Graduated" },
  { name: "Prometheus", category: "Monitoring", status: "Graduated" },
  { name: "Envoy", category: "Proxy", status: "Graduated" },
  { name: "Helm", category: "Package Mgmt", status: "Graduated" },
  { name: "Backstage", category: "Platform Eng", status: "#5 Velocity" },
  { name: "Argo CD", category: "GitOps", status: "Graduated" },
  { name: "Flux", category: "GitOps", status: "Graduated" },
  { name: "OPA", category: "Policy", status: "Graduated" },
];

export function EcosystemPlayers() {
  return (
    <SectionWrapper id="ecosystem-players" variant="light">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            03
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">
          Major Ecosystem Players
        </h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          The Cloud Native Computing Foundation governs a thriving ecosystem of
          projects, with platform engineering tools emerging as critical
          orchestration layers.
        </p>
      </div>

      {/* CNCF Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {projectStats.map((stat) => (
          <div key={stat.label} className="fade-in-up">
            <div
              className="bg-white p-6 border-[3px] border-[#1A1A2E]"
              style={{ boxShadow: `6px 6px 0 ${stat.color}` }}
            >
              <p
                className="text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.count}
              </p>
              <p className="text-sm font-medium text-[#6B7280] uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CNCF Network Description */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white border-[3px] border-[#1A1A2E] p-6 md:p-8" style={{ boxShadow: "6px 6px 0 #1A1A2E" }}>
          <h3 className="heading-sm text-[#1A1A2E] mb-4">CNCF Project Network</h3>
          <p className="body-md text-[#6B7280] mb-4">
            The CNCF ecosystem features interconnected projects across orchestration, observability, 
            service mesh, platform engineering, GitOps, security, networking, runtime, and more. 
            Key projects like Kubernetes serve as the foundation, with graduated projects like 
            Prometheus, Envoy, Helm, and Argo CD building on top.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1E40AF] border border-[#1A1A2E]" />
              <span className="text-xs text-[#6B7280]">Graduated (34)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#6B7280] border border-[#1A1A2E]" />
              <span className="text-xs text-[#6B7280]">Incubating (37)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#D1D5DB] border border-[#1A1A2E]" />
              <span className="text-xs text-[#6B7280]">Sandbox (143)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Projects Grid */}
      <div className="mb-12">
        <h3 className="heading-md text-[#1A1A2E] mb-6 fade-in-up">
          Key Projects & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyProjects.map((project) => (
            <div
              key={project.name}
              className="fade-in-up bg-white border-2 border-[#1A1A2E] p-4 hover:bg-[#F3F4F6] transition-colors group cursor-default"
            >
              <p className="font-bold text-[#1A1A2E] mb-1 group-hover:text-[#1E40AF] transition-colors">
                {project.name}
              </p>
              <p className="text-xs text-[#6B7280] mb-2">{project.category}</p>
              <span
                className={`inline-block px-2 py-0.5 text-xs font-medium ${
                  project.status === "Graduated"
                    ? "bg-[#1E40AF] text-white"
                    : "bg-[#10B981] text-white"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Engineering Highlight */}
      <div className="fade-in-up">
        <MetricCard
          metric="#5"
          description="Backstage ranks #5 by velocity among CNCF projects, indicating strong momentum in platform engineering adoption"
          sentiment="good"
          variant="featured"
        />
      </div>
    </SectionWrapper>
  );
}
