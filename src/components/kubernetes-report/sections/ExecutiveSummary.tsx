import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { MetricCard } from "../scrollytelling/MetricCard";
import { BrutalistCard } from "../scrollytelling/BrutalistCard";
import { TrendingUp, Cpu, Target } from "lucide-react";

export function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary" variant="light">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            01
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">Executive Summary</h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          The Kubernetes and cloud-native ecosystem has reached a critical
          inflection point in 2026, with transformative trends reshaping the
          landscape.
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="fade-in-up">
          <MetricCard
            metric="82%"
            description="Container users now running Kubernetes in production—up from 66% in 2023"
            sentiment="good"
          />
        </div>
        <div className="fade-in-up">
          <MetricCard
            metric="98%"
            description="Organizations report adopting cloud-native techniques"
            sentiment="good"
          />
        </div>
        <div className="fade-in-up">
          <MetricCard
            metric="59%"
            description="Describe 'much' or 'nearly all' development as cloud-native"
            sentiment="good"
          />
        </div>
      </div>

      {/* Transformative Trends */}
      <div className="mb-12">
        <h3 className="heading-md text-[#1A1A2E] mb-6 fade-in-up">
          Three Transformative Trends for 2026
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="fade-in-up">
            <BrutalistCard variant="primary" hover={false} padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E40AF] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase">
                  Trend 01
                </span>
              </div>
              <h4 className="heading-sm text-[#1A1A2E] mb-3">
                AI Integration is Non-Negotiable
              </h4>
              <p className="body-md text-[#6B7280] mb-4">
                94% of organizations view AI as critical to platform
                engineering's future. 66% use Kubernetes for generative AI
                inference workloads.
              </p>
              <div className="flex items-center gap-2 text-[#10B981]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">Critical Priority</span>
              </div>
            </BrutalistCard>
          </div>

          <div className="fade-in-up">
            <BrutalistCard variant="primary" hover={false} padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E40AF] flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase">
                  Trend 02
                </span>
              </div>
              <h4 className="heading-sm text-[#1A1A2E] mb-3">
                Platform Engineering Maturation
              </h4>
              <p className="body-md text-[#6B7280] mb-4">
                Organizations shifting from "shifting left" to "shifting
                down"—embedding capabilities directly into platforms rather than
                pushing complexity onto developers.
              </p>
              <div className="flex items-center gap-2 text-[#F59E0B]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">Rapidly Evolving</span>
              </div>
            </BrutalistCard>
          </div>

          <div className="fade-in-up">
            <BrutalistCard variant="primary" hover={false} padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E40AF] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase">
                  Trend 03
                </span>
              </div>
              <h4 className="heading-sm text-[#1A1A2E] mb-3">
                The Measurement Crisis
              </h4>
              <p className="body-md text-[#6B7280] mb-4">
                29.6% of teams still lack any success metrics, creating an
                existential funding challenge as economic pressures intensify
                across organizations.
              </p>
              <div className="flex items-center gap-2 text-[#F43F5E]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">Critical Challenge</span>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="fade-in-up">
        <div
          className="bg-[#1A1A2E] p-8 md:p-10 border-[3px] border-[#1A1A2E]"
          style={{ boxShadow: "6px 6px 0 #1E40AF" }}
        >
          <h3 className="heading-sm text-white mb-4">Key Takeaway</h3>
          <p className="body-lg text-white/80 max-w-3xl">
            Near-universal adoption signals a fundamental shift from
            experimentation to enterprise-standard infrastructure. The ecosystem
            is no longer emerging—it's the de facto standard for modern
            infrastructure deployment.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
