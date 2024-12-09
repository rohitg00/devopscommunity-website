import React, { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface Category {
  name: string;
  count: number;
}

interface FilterDropdownProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Special filter display names with emojis
const FILTER_DISPLAY_NAMES: Record<string, string> = {
  'tweet': 'Twitter Threads 🐦',
  'guide': 'Guides 📚',
  'roadmap': 'Roadmaps 🗺️',
  'docker': 'Docker 🐳',
  'kubernetes': 'Kubernetes ⚓️',
  'aws': 'AWS ☁️',
  'terraform': 'Terraform 🏗️',
  'jenkins': 'Jenkins 🤖',
  'git': 'Git 🌳',
  'security': 'Security 🔒',
  'monitoring': 'Monitoring 📊',
  'automation': 'Automation ⚡️'
};

// Filter groups
const FILTER_GROUPS = {
  'Content Type 📑': ['tweet', 'guide', 'roadmap'],
  'Technologies 🛠': ['docker', 'kubernetes', 'git', 'terraform', 'jenkins'],
  'Cloud ☁️': ['aws', 'azure', 'gcp'],
  'Topics 📌': ['security', 'monitoring', 'automation', 'devops']
};

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

  // Group categories
  const groupedCategories = React.useMemo(() => {
    const groups: Record<string, Category[]> = {};
    
    // Initialize groups
    Object.keys(FILTER_GROUPS).forEach(group => {
      groups[group] = [];
    });
    groups['Other 🔍'] = [];

    // Sort categories into groups
    categories.forEach(category => {
      let placed = false;
      for (const [groupName, terms] of Object.entries(FILTER_GROUPS)) {
        if (terms.includes(category.name.toLowerCase())) {
          groups[groupName].push(category);
          placed = true;
          break;
        }
      }
      if (!placed) groups['Other 🔍'].push(category);
    });

    // Remove empty groups
    return Object.fromEntries(
      Object.entries(groups).filter(([_, cats]) => cats.length > 0)
    );
  }, [categories]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#FF4D6A]"
      >
        <Filter className="h-4 w-4" />
        <span>{selectedCategory ? FILTER_DISPLAY_NAMES[selectedCategory] || selectedCategory : 'Filter'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="max-h-[70vh] overflow-y-auto">
            {Object.entries(groupedCategories).map(([groupName, groupCategories]) => (
              <div key={groupName} className="p-2">
                <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {groupName}
                </div>
                {groupCategories.map(({ name, count }) => (
                  <button
                    key={name}
                    onClick={() => {
                      onCategoryChange(name === selectedCategory ? '' : name);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between group ${
                      selectedCategory === name
                        ? 'bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>{FILTER_DISPLAY_NAMES[name] || name}</span>
                    <span className={`text-xs ${
                      selectedCategory === name ? 'text-white' : 'text-gray-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
