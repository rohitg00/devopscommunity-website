import { useEffect, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './components/SearchBar';
import { ResourceList } from './components/ResourceList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromotionBanner } from './components/PromotionBanner';
import { SubstackBanner } from './components/SubstackBanner';
import { TweetsScroller } from './components/TweetsScroller';
import { DevOpsProjectTweets } from './components/DevOpsProjectTweets';
import { DevOpsTools } from './components/DevOpsTools';
import { DevOpsToolsCollection } from './components/DevOpsToolsCollection';
import { Resource } from './types/Resource';
import { fetchResources } from './utils/api';
import { SponsorBanner } from './components/SponsorBanner';

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
      <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading resources...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col">
      <SponsorBanner />
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-8">
              <div className="space-y-4">
                <DevOpsToolsCollection />
                <PromotionBanner />
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="h-full flex flex-col justify-center">
                <SubstackBanner />
              </div>
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
          <DevOpsProjectTweets />
          <TweetsScroller />
          <DevOpsTools />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;