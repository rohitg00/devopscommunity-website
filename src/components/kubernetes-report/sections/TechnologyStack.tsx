import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../../../lib/utils";
import { Box, Layers, Network, Eye, Shield, ChevronDown } from "lucide-react";

const stackLayers = [
  {
    id: "runtime",
    icon: Box,
    name: "Container Runtime",
    shortName: "Runtime",
    tools: [
      { name: "containerd", description: "Industry-standard container runtime" },
      { name: "CRI-O", description: "Lightweight runtime for Kubernetes" },
    ],
    description: "Provides the execution environment for containers at the base of the stack.",
    longDescription: "At the foundation of the cloud-native stack, container runtimes like containerd and CRI-O provide the essential execution environment. These runtimes manage the complete container lifecycle—from image pulling to process isolation—enabling consistent, reproducible deployments across any infrastructure.",
    color: "#1E40AF",
  },
  {
    id: "orchestration",
    icon: Layers,
    name: "Orchestration",
    shortName: "Orchestration",
    tools: [
      { name: "Kubernetes", description: "Container orchestration platform" },
    ],
    description: "Manages containerized workloads with automated scaling and self-healing.",
    longDescription: "Kubernetes dominates the orchestration layer, managing containerized workloads with automated scaling and self-healing capabilities. With 82% of container users now running Kubernetes in production, it has evolved from an emerging platform to the de facto standard for modern infrastructure.",
    color: "#3B82F6",
  },
  {
    id: "mesh",
    icon: Network,
    name: "Service Mesh",
    shortName: "Mesh",
    tools: [
      { name: "Istio", description: "Full-featured service mesh" },
      { name: "Linkerd", description: "Ultralight service mesh" },
      { name: "Cilium", description: "eBPF-powered networking" },
    ],
    description: "Handles inter-service communication, security, and observability.",
    longDescription: "Service mesh technologies—led by Istio, Linkerd, and Cilium—handle inter-service communication, security, and observability. Istio alone serves as the foundation for leading commercial offerings, with widespread adoption for production AI workloads and mission-critical applications.",
    color: "#10B981",
  },
  {
    id: "observability",
    icon: Eye,
    name: "Observability",
    shortName: "Observability",
    tools: [
      { name: "OpenTelemetry", description: "Vendor-neutral observability" },
      { name: "Prometheus", description: "Metrics and monitoring" },
      { name: "Fluentd", description: "Log aggregation" },
    ],
    description: "Provides monitoring, logging, and tracing for cloud-native apps.",
    longDescription: "The observability layer features OpenTelemetry as the second-highest velocity CNCF project, with Prometheus and Fluentd providing monitoring and logging capabilities. This layer enables teams to understand system behavior, debug issues, and maintain reliability at scale.",
    color: "#F59E0B",
  },
  {
    id: "security",
    icon: Shield,
    name: "Security & Policy",
    shortName: "Security",
    tools: [
      { name: "OPA", description: "Open Policy Agent" },
      { name: "Kyverno", description: "Kubernetes-native policies" },
      { name: "Falco", description: "Runtime security" },
    ],
    description: "Enforces security policies and compliance requirements.",
    longDescription: "Security and policy enforcement forms the crucial top layer, with tools like Open Policy Agent, Kyverno, and Falco ensuring compliance and protection. As cloud-native adoption grows, this layer becomes increasingly critical for enterprise governance and regulatory requirements.",
    color: "#F43F5E",
  },
];

function StackDiagram({ activeLayer, hoveredLayer }: { activeLayer: number; hoveredLayer: number | null }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md">
        <div className="flex flex-col-reverse gap-2 md:gap-3">
          {stackLayers.map((layer, index) => {
            const isActive = index <= activeLayer;
            const isCurrentLayer = index === activeLayer;
            const isHovered = hoveredLayer === index;
            const Icon = layer.icon;
            
            return (
              <div
                key={layer.id}
                className={cn(
                  "relative transition-all duration-500 ease-out transform",
                  isActive ? "opacity-100 translate-y-0" : "opacity-20 translate-y-4",
                  (isCurrentLayer || isHovered) && "scale-105 z-10"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className={cn(
                    "relative overflow-hidden transition-all duration-300 border-[3px] border-[#1A1A2E]",
                    (isCurrentLayer || isHovered) 
                      ? "shadow-[6px_6px_0_#1A1A2E]" 
                      : "shadow-[4px_4px_0_#1A1A2E]"
                  )}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${layer.color}15, ${layer.color}25)`
                      : "#F3F4F6",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                    style={{ backgroundColor: isActive ? layer.color : "#E5E7EB" }}
                  />
                  
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 pl-4 md:pl-6">
                    <div
                      className={cn(
                        "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shrink-0",
                        isActive ? "text-white" : "text-[#6B7280]"
                      )}
                      style={{ backgroundColor: isActive ? layer.color : "#E5E7EB" }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono font-bold transition-colors duration-300"
                          style={{ color: isActive ? layer.color : "#9CA3AF" }}
                        >
                          L{index + 1}
                        </span>
                        <h4
                          className={cn(
                            "font-semibold text-sm md:text-base transition-colors duration-300 truncate",
                            isActive ? "text-[#1A1A2E]" : "text-[#9CA3AF]"
                          )}
                        >
                          {layer.name}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {layer.tools.map((tool) => (
                          <span
                            key={tool.name}
                            className={cn(
                              "px-2 py-0.5 text-xs font-medium transition-all duration-300",
                              isActive
                                ? "bg-white border border-[#1A1A2E] text-[#1A1A2E]"
                                : "bg-[#E5E7EB] text-[#9CA3AF]"
                            )}
                          >
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {isCurrentLayer && (
                      <div className="relative w-3 h-3 shrink-0">
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: layer.color }}
                        />
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: layer.color }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 md:mt-6 flex items-center justify-center gap-2">
          <div className="h-px flex-1 bg-[#1A1A2E]/20" />
          <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider">
            Infrastructure Base
          </span>
          <div className="h-px flex-1 bg-[#1A1A2E]/20" />
        </div>
      </div>
    </div>
  );
}

function LayerTextPanel({ 
  layer, 
  index, 
  isActive,
  onEnter,
  onLeave
}: { 
  layer: typeof stackLayers[0]; 
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = layer.icon;
  
  return (
    <div 
      className={cn(
        "min-h-[60vh] md:min-h-[70vh] flex items-center py-12 md:py-20 transition-opacity duration-500",
        isActive ? "opacity-100" : "opacity-40"
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white"
            style={{ backgroundColor: layer.color }}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <span 
              className="text-xs font-mono font-bold uppercase tracking-widest"
              style={{ color: layer.color }}
            >
              Layer {index + 1}
            </span>
            <h3 className="heading-md text-[#1A1A2E]">{layer.name}</h3>
          </div>
        </div>
        
        <p className="body-lg text-[#4B5563] mb-6 md:mb-8 leading-relaxed">
          {layer.longDescription}
        </p>
        
        <div className="space-y-3">
          <p className="text-sm font-mono font-bold text-[#1A1A2E] uppercase tracking-wider mb-3">
            Key Technologies
          </p>
          <div className="grid grid-cols-1 gap-3">
            {layer.tools.map((tool) => (
              <div
                key={tool.name}
                className="p-4 bg-white border-2 border-[#1A1A2E] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#1A1A2E] cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 mt-2 shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div>
                    <span className="font-semibold text-[#1A1A2E]">{tool.name}</span>
                    <p className="text-sm text-[#6B7280] mt-1">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressIndicator({ activeLayer, onLayerClick }: { activeLayer: number; onLayerClick: (index: number) => void }) {
  return (
    <div className="hidden lg:flex fixed right-[calc(256px+2rem)] top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
      {stackLayers.map((layer, index) => (
        <button
          key={layer.id}
          onClick={() => onLayerClick(index)}
          className="group flex items-center gap-2 transition-all duration-200 cursor-pointer"
          aria-label={`Go to ${layer.name}`}
        >
          <div
            className={cn(
              "w-3 h-3 transition-all duration-300",
              index <= activeLayer ? "scale-100" : "scale-75 opacity-50"
            )}
            style={{ backgroundColor: index <= activeLayer ? layer.color : "#E5E7EB" }}
          />
          <span
            className={cn(
              "text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap",
              index === activeLayer ? "text-[#1A1A2E]" : "text-[#6B7280]"
            )}
          >
            {layer.shortName}
          </span>
        </button>
      ))}
    </div>
  );
}

export function TechnologyStack() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (sectionRect.top > viewportHeight || sectionRect.bottom < 0) return;
      
      let maxVisibility = 0;
      let mostVisibleLayer = 0;
      
      layerRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / rect.height;
        
        const centerOffset = Math.abs((rect.top + rect.bottom) / 2 - viewportHeight / 2);
        const centerWeight = 1 - (centerOffset / viewportHeight);
        const weightedVisibility = visibility * centerWeight;
        
        if (weightedVisibility > maxVisibility) {
          maxVisibility = weightedVisibility;
          mostVisibleLayer = index;
        }
      });
      
      setActiveLayer(mostVisibleLayer);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLayer = useCallback((index: number) => {
    const ref = layerRefs.current[index];
    if (ref) {
      const yOffset = -100;
      const y = ref.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <section ref={sectionRef} id="technology-stack" className="relative bg-[#F3F4F6]">
      <div className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-widest">
                02
              </span>
              <div className="h-px flex-1 bg-[#1E40AF]/30 max-w-32" />
            </div>
            <h2 className="heading-lg text-[#1A1A2E] mb-4">
              The Cloud-Native Technology Stack
            </h2>
            <p className="body-lg text-[#6B7280] max-w-3xl">
              The modern cloud-native stack comprises five foundational layers, each providing essential capabilities for containerized application deployment. Scroll to explore each layer.
            </p>
            
            <div className="flex items-center gap-2 mt-6 text-[#6B7280]">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span className="text-sm font-mono">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:self-start">
              <div className="h-full bg-white border-[3px] border-[#1A1A2E] shadow-[6px_6px_0_#1A1A2E]">
                <StackDiagram activeLayer={activeLayer} hoveredLayer={hoveredLayer} />
              </div>
            </div>
            
            <div className="lg:hidden sticky top-0 z-20 bg-[#F3F4F6] py-4 -mx-6 px-6">
              <div className="bg-white border-[3px] border-[#1A1A2E] shadow-[4px_4px_0_#1A1A2E] h-[300px]">
                <StackDiagram activeLayer={activeLayer} hoveredLayer={hoveredLayer} />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              {stackLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  ref={(el) => { layerRefs.current[index] = el; }}
                >
                  <LayerTextPanel
                    layer={layer}
                    index={index}
                    isActive={index === activeLayer}
                    onEnter={() => setHoveredLayer(index)}
                    onLeave={() => setHoveredLayer(null)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ProgressIndicator activeLayer={activeLayer} onLayerClick={scrollToLayer} />
      </div>
      
      <div className="section-padding pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="bg-[#1E40AF] p-6 md:p-8 text-white border-[3px] border-[#1A1A2E] shadow-[6px_6px_0_#1A1A2E]">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="text-sm font-mono uppercase tracking-wide text-white/60 mb-2">
                  Key Insight
                </p>
                <p className="body-lg text-white">
                  OpenTelemetry is the second-highest velocity CNCF project, with Istio serving as the foundation for leading commercial offerings and widespread adoption for production AI workloads.
                </p>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white/30">#2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
