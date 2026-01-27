import { ChevronDown, Cloud, Server, Shield, Gauge, Code2 } from "lucide-react";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("executive-summary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient min-h-screen relative flex flex-col justify-center items-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rotate-12" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-white/10 -rotate-6" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/5 rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/30 px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#10B981] animate-pulse" />
          <span className="text-sm font-mono font-bold uppercase tracking-widest text-white/90">
            2026 Market Analysis
          </span>
        </div>

        {/* Main Title */}
        <h1 className="heading-xl text-white mb-6 text-balance">
          Kubernetes & Cloud-Native
          <br />
          <span className="text-white/80">Ecosystem Report</span>
        </h1>

        {/* Subtitle */}
        <p className="body-lg text-white/70 max-w-2xl mx-auto mb-12 text-pretty">
          A comprehensive analysis of market dynamics, technology landscape, and
          strategic opportunities in the rapidly evolving cloud-native ecosystem.
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {[
            { value: "82%", label: "K8s Adoption", icon: Server },
            { value: "98%", label: "Cloud-Native", icon: Cloud },
            { value: "94%", label: "AI Critical", icon: Code2 },
            { value: "$2M+", label: "Median Budget", icon: Gauge },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 border-2 border-white/30 p-4 md:p-6 group hover:bg-white/20 transition-colors"
            >
              <item.icon className="w-5 h-5 text-white/60 mb-2 mx-auto" />
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Topic Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Server, label: "Infrastructure" },
            { icon: Shield, label: "Security" },
            { icon: Gauge, label: "Observability" },
            { icon: Code2, label: "Platform Eng" },
            { icon: Cloud, label: "Multi-Cloud" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-white/50 text-sm"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="group flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-mono uppercase tracking-widest mb-2">
            Explore Report
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
    </section>
  );
}
