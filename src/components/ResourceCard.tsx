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
      className="block group"
      aria-label={`View resource: ${resource.name}`}
    >
      <div className="bg-[#111111] border border-[#262626] rounded-lg p-5 transition-all duration-200 hover:bg-[#1a1a1a] hover:border-[#404040] relative">
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="h-4 w-4 text-[#71717a]" />
        </div>
        <h3 className="text-base font-medium text-white mb-2 pr-6 group-hover:text-[#a1a1aa] transition-colors">
          {resource.name}
        </h3>
        <p className="text-sm text-[#71717a] leading-relaxed line-clamp-2 mb-3">
          {resource.information}
        </p>
        {resource.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {resource.categories.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className="inline-block px-2 py-0.5 text-xs font-medium text-[#a1a1aa] bg-[#1a1a1a] border border-[#262626] rounded"
              >
                {category}
              </span>
            ))}
            {resource.categories.length > 3 && (
              <span className="inline-block px-2 py-0.5 text-xs text-[#71717a]">
                +{resource.categories.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}
