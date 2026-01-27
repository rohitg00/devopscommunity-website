import { useEffect, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './components/SearchBar';
import { ResourceList } from './components/ResourceList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Resource } from './types/Resource';
import { fetchResources } from './utils/api';
import { Terminal, Wrench, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await fetchResources();
        setResources(data);
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(resources, {
      keys: ['title', 'description', 'categories'],
      threshold: 0.4,
    });
  }, [resources]);

  const filteredResources = useMemo(() => {
    let result = resources;

    if (searchTerm) {
      const searchResults = fuse.search(searchTerm);
      result = searchResults.map((result) => result.item);
    }

    if (selectedCategory) {
      result = result.filter((resource) =>
        resource.categories.includes(selectedCategory.toLowerCase())
      );
    }

    return result;
  }, [resources, searchTerm, selectedCategory, fuse]);

  const categoriesWithCount = useMemo(() => {
    const categories = resources.reduce((acc, resource) => {
      resource.categories.forEach((category) => {
        acc[category] = (acc[category] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categories).map(([name, count]) => ({
      name,
      count,
    }));
  }, [resources]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <div className="flex items-center gap-2 font-mono text-sm text-[#52525b]">
          <span className="text-[#22c55e]">$</span>
          <span>loading</span>
          <span className="cursor-blink">_</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col noise-overlay relative">
      <Header />
      
      <main className="flex-grow pt-14">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
            {/* Terminal-style intro */}
            <div className="font-mono text-xs text-[#52525b] mb-6 fade-up">
              <span className="text-[#22c55e]">~/devops</span>
              <span className="text-[#3f3f46]"> $ </span>
              <span className="text-[#a1a1aa]">cat welcome.md</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 fade-up fade-up-delay-1">
              <span className="text-white">Learn</span>
              <span className="text-[#22c55e]">.</span>
              <span className="text-white">Build</span>
              <span className="text-[#22c55e]">.</span>
              <span className="text-white">Ship</span>
              <span className="text-[#22c55e]">.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mb-10 fade-up fade-up-delay-2">
              The <span className="accent-underline text-white">open-source</span> collection of DevOps resources, 
              tools, and guides curated by engineers, for engineers.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 fade-up fade-up-delay-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{resources.length}</span>
                <span className="text-sm text-[#52525b]">resources</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{categoriesWithCount.length}</span>
                <span className="text-sm text-[#52525b]">categories</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#22c55e]">Free</span>
                <span className="text-sm text-[#52525b]">forever</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 fade-up fade-up-delay-3">
              <a
                href="https://tools.devopscommunity.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#09090b] text-sm font-medium rounded hover:bg-[#e4e4e7] transition-colors"
              >
                <Wrench className="h-4 w-4" />
                DevOps Tools
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://interview.devopscommunity.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-transparent text-white text-sm font-medium border border-[#3f3f46] rounded hover:bg-[#18181b] hover:border-[#52525b] transition-all"
              >
                <Terminal className="h-4 w-4" />
                Interview Prep
              </a>
              <Link
                to="/kubernetes-report-2026"
                className="group flex items-center gap-2 px-5 py-2.5 bg-transparent text-[#22c55e] text-sm font-medium border border-[#22c55e]/30 rounded hover:bg-[#22c55e]/10 hover:border-[#22c55e]/50 transition-all glow-border"
              >
                <FileText className="h-4 w-4" />
                K8s Report 2026
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="border-t border-[#27272a]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-xs text-[#52525b]">
                <span className="text-[#22c55e]">$</span> ls resources/
              </div>
            </div>
            
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              categories={categoriesWithCount}
              onCategoryChange={setSelectedCategory}
              totalResources={resources.length}
              filteredCount={filteredResources.length}
            />
            <ResourceList resources={filteredResources} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
