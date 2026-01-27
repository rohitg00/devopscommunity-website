import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  number: string;
}

const tocItems: TocItem[] = [
  { id: "executive-summary", label: "Executive Summary", number: "01" },
  { id: "technology-stack", label: "Technology Stack", number: "02" },
  { id: "ecosystem-players", label: "Ecosystem Players", number: "03" },
  { id: "market-projections", label: "Market Projections", number: "04" },
  { id: "market-opportunities", label: "Market Opportunities", number: "05" },
  { id: "product-strategy", label: "Product Strategy", number: "06" },
  { id: "go-to-market", label: "Go-to-Market", number: "07" },
  { id: "partnerships", label: "Partnerships", number: "08" },
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-white border-2 border-[#1A1A2E] p-3 shadow-[3px_3px_0_#1A1A2E] hover:shadow-[4px_4px_0_#1A1A2E] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#1A1A2E]" />
        ) : (
          <Menu className="w-5 h-5 text-[#1A1A2E]" />
        )}
      </button>

      {/* Navigation Panel */}
      <nav
        className={cn(
          "fixed top-0 right-0 h-full bg-white border-l-[3px] border-[#1A1A2E] z-40 transition-transform duration-300 ease-in-out",
          "w-72 md:w-64",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          "shadow-[-6px_0_0_#1A1A2E] md:shadow-none"
        )}
      >
        <div className="p-6 pt-20 md:pt-8 h-full overflow-y-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-6">
            Contents
          </p>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 flex items-center gap-3 transition-all group cursor-pointer",
                    activeSection === item.id
                      ? "bg-[#1E40AF] text-white"
                      : "hover:bg-[#F3F4F6] text-[#1A1A2E]"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-mono font-bold",
                      activeSection === item.id
                        ? "text-white/70"
                        : "text-[#1E40AF]"
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="text-sm font-medium flex-1">
                    {item.label}
                  </span>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 opacity-0 transition-opacity",
                      activeSection === item.id
                        ? "opacity-100"
                        : "group-hover:opacity-50"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
