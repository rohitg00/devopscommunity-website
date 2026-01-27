import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface Category {
  name: string;
  count: number;
}

interface FilterDropdownProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalResources: number;
}

export function FilterDropdown({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortedCategories = [...categories].sort((a, b) => b.count - a.count);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 font-mono text-xs transition-all border ${
          selectedCategory 
            ? 'bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/30' 
            : 'bg-[#18181b] text-[#a1a1aa] border-[#27272a] hover:border-[#3f3f46] hover:text-white'
        }`}
      >
        <span>filter:</span>
        <span className={selectedCategory ? 'text-[#22c55e]' : 'text-[#52525b]'}>
          {selectedCategory || 'all'}
        </span>
        {selectedCategory ? (
          <X 
            className="h-3 w-3 hover:text-white cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              onCategoryChange('');
            }}
          />
        ) : (
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-[#18181b] border border-[#27272a] shadow-xl overflow-hidden">
          <div className="max-h-[50vh] overflow-y-auto">
            {sortedCategories.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => {
                  onCategoryChange(name === selectedCategory ? '' : name);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 font-mono text-xs transition-colors flex items-center justify-between ${
                  selectedCategory === name
                    ? 'bg-[#22c55e]/10 text-[#22c55e]'
                    : 'text-[#a1a1aa] hover:bg-[#27272a] hover:text-white'
                }`}
              >
                <span className="truncate">{name}</span>
                <span className="text-[#52525b] ml-2 flex-shrink-0">
                  ({count})
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
