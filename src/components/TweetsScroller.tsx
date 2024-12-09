import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export function TweetsScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

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
            <div className="whitespace-pre-line text-gray-800 text-sm">
              {tweet.content}
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
  );
}
