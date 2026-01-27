import { useEffect, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './components/SearchBar';
import { ResourceList } from './components/ResourceList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Resource } from './types/Resource';
import { fetchResources } from './utils/api';
import { ArrowRight, Wrench, Terminal, FileText } from 'lucide-react';
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
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-[#a1a1aa] text-sm font-mono">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" />
                <span className="text-sm font-mono text-[#71717a]">Community-driven resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                DevOps Resources
                <br />
                <span className="text-[#71717a]">for Engineers</span>
              </h1>
              <p className="text-lg text-[#a1a1aa] mb-8 max-w-2xl">
                Curated collection of DevOps tools, guides, roadmaps, and best practices. 
                Everything you need to level up your infrastructure skills.
              </p>
              
              {/* Quick Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://tools.devopscommunity.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-[#e5e5e5] transition-colors"
                >
                  <Wrench className="h-4 w-4" />
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://interview.devopscommunity.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium border border-[#262626] rounded-md hover:bg-[#262626] hover:border-[#404040] transition-colors"
                >
                  <Terminal className="h-4 w-4" />
                  Interview Prep
                </a>
                <Link
                  to="/kubernetes-report-2026"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium border border-[#262626] rounded-md hover:bg-[#262626] hover:border-[#404040] transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  K8s Report 2026
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
