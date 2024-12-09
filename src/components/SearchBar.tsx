import React from 'react';
import { Search } from 'lucide-react';
import { FilterDropdown } from './FilterDropdown';

interface Category {
  name: string;
  count: number;
}

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  categories: Category[];
  onCategoryChange: (category: string) => void;
  totalResources: number;
  filteredCount: number;
}

// Common DevOps terms for quick filters
const QUICK_FILTERS = {
  'Content Type': ['tweet', 'guide', 'roadmap'],
  'Technologies': ['docker', 'kubernetes', 'k8s', 'git', 'terraform', 'ansible', 'jenkins'],
  'Platforms': ['aws', 'azure', 'gcp', 'cloud'],
  'Topics': ['security', 'monitoring', 'automation', 'container', 'microservices', 'infrastructure']
};

// Special filter display names
const FILTER_DISPLAY_NAMES: Record<string, string> = {
  'tweet': 'Twitter Threads 🐦',
  'guide': 'Guides 📚',
  'roadmap': 'Roadmaps 🗺️'
};

export function SearchBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  categories,
  onCategoryChange,
  totalResources,
  filteredCount
}: SearchBarProps) {
  // Group categories by type
  const groupedCategories = React.useMemo(() => {
    const groups: Record<string, Category[]> = {
      'Quick Access': [],
      'Other': []
    };

    categories.forEach(category => {
      let placed = false;
      for (const [groupName, terms] of Object.entries(QUICK_FILTERS)) {
        if (terms.includes(category.name)) {
          if (!groups[groupName]) groups[groupName] = [];
          groups[groupName].push(category);
          placed = true;
          break;
        }
      }
      if (!placed) groups['Other'].push(category);
    });

    return groups;
  }, [categories]);

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search DevOps resources..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4D6A] bg-white"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {filteredCount} of {totalResources} resources
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </div>
        <FilterDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          totalResources={totalResources}
        />
      </div>
    </div>
  );
}