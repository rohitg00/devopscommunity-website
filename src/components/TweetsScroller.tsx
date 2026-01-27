import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Users } from 'lucide-react';

interface Tweet {
  id: string;
  content: string;
  date: string;
}

const FEATURED_TWEETS: Tweet[] = [
  {
    id: '1537460982582128641',
    content: `🎯 DevOps Roadmap 2022

Key Skills to Learn:

1. Linux & Shell Scripting
2. Git & GitHub
3. Jenkins
4. Docker
5. Kubernetes
6. Terraform
7. AWS
8. Prometheus
9. Grafana
10. Python

Start with basics, practice & be consistent!

#devops #cloud`,
    date: 'Jun 16, 2022'
  },
  {
    id: '1523372831513673729',
    content: `🔥 DevOps Project Ideas:

1. CI/CD Pipeline with Jenkins
2. Docker Container Management
3. K8s Cluster Setup
4. Infrastructure as Code with Terraform
5. Monitoring with Prometheus
6. Log Management with ELK Stack
7. Automated Backup Solution
8. High Availability Setup

Start Building! 💪`,
    date: 'May 8, 2022'
  },
  {
    id: '1586751198962495489',
    content: `🚀 DevOps Best Practices:

1. Infrastructure as Code
2. Automated Testing
3. Continuous Integration
4. Continuous Delivery
5. Monitoring & Logging
6. Security First Approach
7. Documentation
8. Collaboration
9. Version Control
10. Backup & Recovery

#devops #cloud #tech`,
    date: 'Oct 30, 2022'
  }
];

export function CommunityCard() {
  return (
    <a
      href="https://x.com/i/communities/1523681883384549376"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-4xl mx-auto mb-6 group"
    >
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 animated-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-[#1DA1F2] rounded-full p-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Join DevOps Community</h3>
              <p className="text-gray-600">Connect with 17,000+ DevOps enthusiasts and professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
            <span className="text-[#1DA1F2] font-medium">Join Now →</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function TweetsScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const scrollAmount = 300;
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };

    container.addEventListener('scroll', checkArrows);
    checkArrows();

    return () => container.removeEventListener('scroll', checkArrows);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <CommunityCard />
      
      <div className="flex items-center gap-2 mb-4">
        <Twitter className="h-5 w-5 text-[#1DA1F2]" />
        <h2 className="text-xl font-semibold">DevOps Tweets</h2>
      </div>

      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory"
        >
          {FEATURED_TWEETS.map((tweet) => (
            <a
              key={tweet.id}
              href={`https://twitter.com/ghumare64/status/${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-[400px] bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 animated-border snap-center"
            >
              <div className="flex justify-between items-start">
                <div className="whitespace-pre-line text-gray-800 text-sm flex-1">
                  {tweet.content}
                </div>
                <Twitter className="h-4 w-4 text-[#1DA1F2] flex-shrink-0 ml-4" />
              </div>
              <div className="mt-4 text-sm text-gray-500">
                {tweet.date}
              </div>
            </a>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
