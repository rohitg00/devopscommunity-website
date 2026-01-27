import React from 'react';
import { ResourceCard } from './ResourceCard';
import { Resource } from '../types/Resource';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      {resources.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No resources found. Try adjusting your search.</p>
        </div>
      ) : (
        resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))
      )}
    </div>
  );
}