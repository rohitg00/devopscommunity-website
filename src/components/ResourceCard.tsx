import React from 'react';
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
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-pink-50 p-6 relative">
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="h-5 w-5 text-[#FF4D6A]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 pr-8 group-hover:text-[#FF4D6A] transition-colors duration-200">
          {resource.name}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {resource.information}
        </p>
        {resource.categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {resource.categories.map((category, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium text-[#FF4D6A] bg-pink-50 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}