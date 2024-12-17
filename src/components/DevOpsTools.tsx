import React, { useState, useMemo } from 'react';
import { Tool, ToolCategory } from '../types/Tool';
import { tools } from '../data/tools';
import { Search, Filter, ExternalLink, Github } from 'lucide-react';

export function DevOpsTools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'All'>('All');
  const [selectedImportance, setSelectedImportance] = useState<Tool['importance'] | 'All'>('All');
  const [showOpenSourceOnly, setShowOpenSourceOnly] = useState(false);

  const categories = useMemo(() => {
    const cats = tools.reduce((acc, tool) => {
      if (!acc.includes(tool.category)) {
        acc.push(tool.category);
      }
      return acc;
    }, [] as ToolCategory[]);
    return ['All', ...cats.sort()];
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesImportance = selectedImportance === 'All' || tool.importance === selectedImportance;
      const matchesOpenSource = !showOpenSourceOnly || tool.isOpenSource;

      return matchesSearch && matchesCategory && matchesImportance && matchesOpenSource;
    });
  }, [searchTerm, selectedCategory, selectedImportance, showOpenSourceOnly]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">DevOps Tools</h1>
      
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ToolCategory | 'All')}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Importance Filter */}
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedImportance}
            onChange={(e) => setSelectedImportance(e.target.value as Tool['importance'] | 'All')}
          >
            <option value="All">All Importance Levels</option>
            <option value="Essential">Essential</option>
            <option value="Recommended">Recommended</option>
            <option value="Optional">Optional</option>
          </select>

          {/* Open Source Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="openSourceToggle"
              className="mr-2"
              checked={showOpenSourceOnly}
              onChange={(e) => setShowOpenSourceOnly(e.target.checked)}
            />
            <label htmlFor="openSourceToggle">Show Open Source Only</label>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div key={tool.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <div className="flex gap-2">
                {tool.githubUrl && (
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{tool.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {tool.category}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                tool.importance === 'Essential'
                  ? 'bg-purple-100 text-purple-800'
                  : tool.importance === 'Recommended'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {tool.importance}
              </span>
              {tool.isOpenSource && (
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Open Source
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
