import { HeroSection } from "../components/kubernetes-report/sections/HeroSection";
import { ExecutiveSummary } from "../components/kubernetes-report/sections/ExecutiveSummary";
import { TechnologyStack } from "../components/kubernetes-report/sections/TechnologyStack";
import { EcosystemPlayers } from "../components/kubernetes-report/sections/EcosystemPlayers";
import { MarketProjections } from "../components/kubernetes-report/sections/MarketProjections";
import { MarketOpportunities } from "../components/kubernetes-report/sections/MarketOpportunities";
import { ProductStrategy } from "../components/kubernetes-report/sections/ProductStrategy";
import { GoToMarket } from "../components/kubernetes-report/sections/GoToMarket";
import { Partnerships } from "../components/kubernetes-report/sections/Partnerships";
import { TableOfContents } from "../components/kubernetes-report/scrollytelling/TableOfContents";
import "../styles/kubernetes-report.css";

export function KubernetesReport2026() {
  return (
    <main className="min-h-screen kubernetes-report">
      {/* Fixed Navigation */}
      <TableOfContents />

      {/* Main Content - offset for fixed nav on desktop */}
      <div className="md:mr-64">
        {/* Hero Section */}
        <HeroSection />

        {/* Executive Summary */}
        <ExecutiveSummary />

        {/* Cloud-Native Technology Stack */}
        <TechnologyStack />

        {/* Major Ecosystem Players */}
        <EcosystemPlayers />

        {/* Market Projections */}
        <MarketProjections />

        {/* Market Opportunities */}
        <MarketOpportunities />

        {/* Product Strategy Framework */}
        <ProductStrategy />

        {/* Go-to-Market Strategy */}
        <GoToMarket />

        {/* Partnership Ecosystem */}
        <Partnerships />

        {/* Footer */}
        <footer className="bg-[#1A1A2E] text-white py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm font-mono text-white/60 mb-2">
                  KUBERNETES & CLOUD-NATIVE ECOSYSTEM
                </p>
                <p className="heading-sm">2026 Market Analysis Report</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">
                  Interactive Scrollytelling Report
                </p>
                <p className="text-sm text-white/40 mt-1">
                  Data-driven insights for strategic decision making
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-xs text-white/40 text-center">
                Built with modern web technologies. Best viewed on desktop for full interactive experience.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
