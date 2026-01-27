import { ResourceCard } from './ResourceCard';
import { Resource } from '../types/Resource';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {resources.length === 0 ? (
        <div className="col-span-full text-center py-16">
          <p className="text-[#71717a] text-sm">No resources found. Try adjusting your search.</p>
        </div>
      ) : (
        resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))
      )}
    </div>
  );
}
