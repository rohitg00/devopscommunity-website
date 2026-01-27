import React, { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';

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

  // Sort categories by count
  const sortedCategories = [...categories].sort((a, b) => b.count - a.count);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all border ${
          selectedCategory 
            ? 'bg-[#1a1a1a] text-white border-[#404040]' 
            : 'bg-[#111111] text-[#a1a1aa] border-[#262626] hover:border-[#404040] hover:text-white'
        }`}
      >
        <Filter className="h-3.5 w-3.5" />
        <span>{selectedCategory || 'Filter'}</span>
        {selectedCategory ? (
          <X 
            className="h-3.5 w-3.5 hover:text-white" 
            onClick={(e) => {
              e.stopPropagation();
              onCategoryChange('');
            }}
          />
        ) : (
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 bg-[#111111] rounded-lg border border-[#262626] shadow-xl overflow-hidden">
          <div className="max-h-[60vh] overflow-y-auto p-1">
            {sortedCategories.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => {
                  onCategoryChange(name === selectedCategory ? '' : name);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                  selectedCategory === name
                    ? 'bg-[#262626] text-white'
                    : 'text-[#a1a1aa] hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                <span className="truncate">{name}</span>
                <span className="text-xs text-[#71717a] ml-2 flex-shrink-0">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
