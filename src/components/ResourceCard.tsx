import { Resource } from '../types/Resource';
import { ArrowUpRight } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`View resource: ${resource.name}`}
    >
      <div className="h-full bg-[#18181b] border border-[#27272a] p-5 transition-all duration-200 hover:border-[#3f3f46] hover:bg-[#1f1f23] relative">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#27272a] border-l-[32px] border-l-transparent group-hover:border-t-[#22c55e]/30 transition-colors" />
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="h-4 w-4 text-[#22c55e]" />
        </div>

        {/* Content */}
        <h3 className="text-sm font-medium text-white mb-2 pr-8 group-hover:text-[#22c55e] transition-colors leading-snug">
          {resource.name}
        </h3>
        <p className="text-xs text-[#71717a] leading-relaxed line-clamp-2 mb-4">
          {resource.information}
        </p>

        {/* Tags */}
        {resource.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {resource.categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="font-mono text-[10px] text-[#52525b] bg-[#09090b] border border-[#27272a] px-1.5 py-0.5"
              >
                {category}
              </span>
            ))}
            {resource.categories.length > 2 && (
              <span className="font-mono text-[10px] text-[#3f3f46]">
                +{resource.categories.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}
