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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center pl-4 pointer-events-none">
          <span className="font-mono text-xs text-[#22c55e] mr-2">$</span>
          <Search className="h-4 w-4 text-[#52525b]" />
        </div>
        <input
          type="text"
          placeholder="grep -i 'your search'..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-16 pr-4 py-3 font-mono text-sm bg-[#18181b] border border-[#27272a] text-white placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] focus:ring-1 focus:ring-[#3f3f46] transition-all"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="font-mono text-xs text-[#52525b]">
          <span className="text-[#a1a1aa]">{filteredCount}</span>
          <span className="text-[#3f3f46]"> / </span>
          <span>{totalResources}</span>
          {searchTerm && (
            <span className="text-[#3f3f46]"> | matching "{searchTerm}"</span>
          )}
          {selectedCategory && (
            <span className="text-[#3f3f46]"> | in <span className="text-[#22c55e]">{selectedCategory}</span></span>
          )}
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
