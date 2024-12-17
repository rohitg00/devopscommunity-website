import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DevOpsProjectTweet {
  id: string;
  title: string;
  description: string;
  level: string;
  tools: string[];
}

const DEVOPS_PROJECT_TWEETS: DevOpsProjectTweet[] = [
  {
    id: '1860977683770781795',
    title: 'AWS VPC For Application',
    description: 'AWS VPC For Application and Automate VPC Creation Using Terraform',
    level: 'Intermediate',
    tools: ['AWS', 'Terraform', 'VPC']
  },
  {
    id: '1755831955348672605',
    title: 'Azure DevOps CI/CD',
    description: 'Azure DevOps CI/CD Pipeline for .NET Application',
    level: 'Intermediate',
    tools: ['Azure DevOps', '.NET', 'CI/CD']
  },
  {
    id: '1753049520898703452',
    title: 'Jenkins Pipeline',
    description: 'Jenkins Pipeline for Node.js Application with SonarQube',
    level: 'Intermediate',
    tools: ['Jenkins', 'Node.js', 'SonarQube']
  },
  {
    id: '1746791586585788578',
    title: 'Terraform Infrastructure',
    description: 'Terraform Infrastructure Deployment with GitHub Actions',
    level: 'Advanced',
    tools: ['Terraform', 'GitHub Actions', 'IaC']
  },
  {
    id: '1736597327622599052',
    title: 'Kubernetes Deployment',
    description: 'Deploy Application on Kubernetes using ArgoCD',
    level: 'Advanced',
    tools: ['Kubernetes', 'ArgoCD', 'Docker']
  },
  {
    id: '1724302925365703160',
    title: 'Docker Compose',
    description: 'Docker Compose for Multi-Container Applications',
    level: 'Beginner',
    tools: ['Docker', 'Docker Compose', 'YAML']
  },
  {
    id: '1717156202994336189',
    title: 'AWS ECS Deployment',
    description: 'Deploy Containerized Application on AWS ECS',
    level: 'Intermediate',
    tools: ['AWS', 'ECS', 'Docker']
  },
  {
    id: '1713027854634811826',
    title: 'Monitoring Stack',
    description: 'Setup Monitoring Stack with Prometheus and Grafana',
    level: 'Intermediate',
    tools: ['Prometheus', 'Grafana', 'Monitoring']
  },
  {
    id: '1712688890669412803',
    title: 'GitHub Actions',
    description: 'GitHub Actions Pipeline for Python Application',
    level: 'Beginner',
    tools: ['GitHub Actions', 'Python', 'CI/CD']
  },
  {
    id: '1712324512166138152',
    title: 'AWS Lambda',
    description: 'Serverless Application with AWS Lambda and API Gateway',
    level: 'Intermediate',
    tools: ['AWS Lambda', 'API Gateway', 'Serverless']
  },
  {
    id: '1711939993734959423',
    title: 'Ansible Automation',
    description: 'Infrastructure Automation with Ansible',
    level: 'Intermediate',
    tools: ['Ansible', 'YAML', 'IaC']
  },
  {
    id: '1710152519840895420',
    title: 'GitLab CI/CD',
    description: 'GitLab CI/CD Pipeline for Java Application',
    level: 'Intermediate',
    tools: ['GitLab CI', 'Java', 'Maven']
  },
  {
    id: '1693487978063220777',
    title: 'AWS EKS Cluster',
    description: 'Setup AWS EKS Cluster using Terraform',
    level: 'Advanced',
    tools: ['AWS', 'EKS', 'Terraform']
  }
];

export function DevOpsProjectTweets() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">DevOps Project Series</h2>
        <a
          href="https://x.com/ghumare64"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Follow @ghumare64 →
        </a>
      </div>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 scroll-smooth hide-scrollbar"
        >
          {DEVOPS_PROJECT_TWEETS.map((tweet) => (
            <a
              key={tweet.id}
              href={`https://x.com/ghumare64/status/${tweet.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[350px]"
            >
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all h-full border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(tweet.level)}`}>
                    {tweet.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{tweet.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{tweet.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tweet.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Project Details →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
