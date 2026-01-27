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

export function SearchBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  categories,
  onCategoryChange,
  totalResources,
  filteredCount
}: SearchBarProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 pl-11 rounded-lg border border-[#262626] bg-[#111111] text-white placeholder-[#71717a] focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#71717a] h-4 w-4" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-[#71717a]">
          <span className="text-[#a1a1aa] font-medium">{filteredCount}</span> of {totalResources} resources
          {searchTerm && <span className="text-[#71717a]"> matching "<span className="text-[#a1a1aa]">{searchTerm}</span>"</span>}
          {selectedCategory && <span className="text-[#71717a]"> in <span className="text-[#a1a1aa]">{selectedCategory}</span></span>}
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
