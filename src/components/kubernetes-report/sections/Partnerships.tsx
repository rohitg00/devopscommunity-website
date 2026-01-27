import { useState, useEffect, useRef, useCallback } from "react";
import { SectionWrapper } from "../scrollytelling/SectionWrapper";
import { BrutalistCard } from "../scrollytelling/BrutalistCard";
import { MetricCard } from "../scrollytelling/MetricCard";
import { Cloud, GitBranch, Activity, Eye, CheckCircle2 } from "lucide-react";

const partnerCategories = [
  {
    icon: Cloud,
    title: "Cloud Provider Integration",
    color: "#1E40AF",
    categoryKey: "cloud",
    description:
      "Partnerships with AWS, Azure, and GCP provide distribution through marketplace listings, technical validation through co-selling programs, and deeper integration via native APIs.",
    example:
      "Microsoft's Cloud Solution Provider program offers partners recurring revenue opportunities and technical enablement.",
  },
  {
    icon: GitBranch,
    title: "CNCF Ecosystem Alignment",
    color: "#10B981",
    categoryKey: "cncf",
    description:
      "Contributing to projects like Kubernetes, Prometheus, and Helm positions tools within the ecosystem's trusted framework and establishes credibility.",
    example:
      "Project integration ensures compatibility with the broader cloud-native stack.",
  },
  {
    icon: Activity,
    title: "CI/CD Platform Integration",
    color: "#F59E0B",
    categoryKey: "cicd",
    description:
      "GitHub Actions, GitLab CI, and similar platforms represent critical workflow integration points for seamless GitOps workflows.",
    example:
      "GitLab and HashiCorp's collaboration integrates Terraform directly into CI/CD pipelines.",
  },
  {
    icon: Eye,
    title: "Observability Vendor Partnerships",
    color: "#8B5CF6",
    categoryKey: "observability",
    description:
      "Integrations with Datadog, New Relic, and similar platforms extend product capabilities through complementary monitoring and troubleshooting features.",
    example:
      "Creates comprehensive developer experiences through data correlation.",
  },
];

export function Partnerships() {
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const categoryRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categoryRefs.current.forEach((element, categoryKey) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setHighlightedCategory(categoryKey);
            }
          });
        },
        { threshold: [0.5], rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setCategoryRef = useCallback((key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      categoryRefs.current.set(key, el);
    }
  }, []);

  return (
    <SectionWrapper id="partnerships" variant="light">
      {/* Section Header */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
            08
          </span>
          <div className="h-px flex-1 bg-[#1E40AF]/30" />
        </div>
        <h2 className="heading-lg text-[#1A1A2E] mb-4">
          Strategic Partnership Framework
        </h2>
        <p className="body-lg text-[#6B7280] max-w-3xl">
          Building a thriving partnership ecosystem requires structured
          collaboration across four strategic categories to drive distribution
          and technical validation.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="fade-in-up">
          <MetricCard
            metric="5x"
            description="Faster growth for companies with strong partner ecosystems"
            sentiment="good"
          />
        </div>
        <div className="fade-in-up">
          <MetricCard
            metric="76%"
            description="Executives saying partnerships are essential to revenue goals"
            sentiment="good"
          />
        </div>
      </div>

      {/* Partnership Ecosystem Diagram */}
      <div className="mb-12 fade-in-up">
        <div className="bg-white border-[3px] border-[#1A1A2E] p-6 md:p-8" style={{ boxShadow: "6px 6px 0 #1A1A2E" }}>
          <h3 className="heading-sm text-[#1A1A2E] mb-6 text-center">Partnership Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partnerCategories.map((category) => (
              <div 
                key={category.categoryKey}
                className={`text-center transition-all duration-300 ${
                  highlightedCategory === category.categoryKey ? 'scale-110' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div 
                  className="w-16 h-16 mx-auto flex items-center justify-center mb-2 transition-transform duration-300"
                  style={{ 
                    backgroundColor: category.color,
                    transform: highlightedCategory === category.categoryKey ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-bold text-[#1A1A2E]">{category.title.split(' ')[0]}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#6B7280]">
              Scroll through the partner categories below to highlight each ecosystem component
            </p>
          </div>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {partnerCategories.map((category) => (
          <div
            key={category.title}
            ref={setCategoryRef(category.categoryKey)}
            className="fade-in-up"
          >
            <BrutalistCard
              hover={false}
              padding="lg"
              className={
                highlightedCategory === category.categoryKey
                  ? "ring-2 ring-offset-2"
                  : ""
              }
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-300"
                  style={{
                    backgroundColor: category.color,
                    transform:
                      highlightedCategory === category.categoryKey
                        ? "scale(1.1)"
                        : "scale(1)",
                  }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-sm text-[#1A1A2E]">{category.title}</h3>
              </div>
              <p className="body-md text-[#6B7280] mb-4">
                {category.description}
              </p>
              <div
                className="bg-[#F3F4F6] p-4 border-l-4"
                style={{ borderColor: category.color }}
              >
                <p className="text-sm text-[#6B7280]">
                  <span className="font-bold text-[#1A1A2E]">Example: </span>
                  {category.example}
                </p>
              </div>
            </BrutalistCard>
          </div>
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="fade-in-up">
        <div
          className="bg-[#1A1A2E] p-8 md:p-10 border-[3px] border-[#1A1A2E] text-center"
          style={{ boxShadow: "8px 8px 0 #1E40AF" }}
        >
          <h3 className="heading-md text-white mb-4">Key Strategic Insight</h3>
          <p className="body-lg text-white/80 max-w-3xl mx-auto mb-6">
            Developer adoption hinges on community trust. Success requires
            maintaining active open-source projects, creating comprehensive
            documentation, and building certification programs that validate
            expertise and drive adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Open Source", "Documentation", "Certifications", "Community"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 text-white text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
