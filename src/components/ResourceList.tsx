import { ResourceCard } from './ResourceCard';
import { Resource } from '../types/Resource';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a]">
      {resources.length === 0 ? (
        <div className="col-span-full bg-[#09090b] text-center py-16">
          <div className="font-mono text-sm text-[#52525b]">
            <span className="text-[#22c55e]">$</span> No results found
          </div>
        </div>
      ) : (
        resources.map((resource, index) => (
          <div key={index} className="bg-[#09090b]">
            <ResourceCard resource={resource} />
          </div>
        ))
      )}
    </div>
  );
}
