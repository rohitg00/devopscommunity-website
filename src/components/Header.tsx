import { Github, Terminal, Wrench, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

export function Header() {
  return (
    <header className="border-b border-[#262626] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="DevOps Community"
              className="h-9 w-9"
              onError={(e) => {
                e.currentTarget.src = 'https://github.com/rohitg00/DevOpsCommunity/blob/main/assets/default.png?raw=true';
              }}
            />
            <span className="text-lg font-semibold text-white group-hover:text-[#a1a1aa] transition-colors">
              DevOps Community
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="https://tools.devopscommunity.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white transition-colors rounded-md hover:bg-[#1a1a1a]"
            >
              <Wrench className="h-4 w-4" />
              <span>Tools</span>
            </a>
            <a
              href="https://interview.devopscommunity.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white transition-colors rounded-md hover:bg-[#1a1a1a]"
            >
              <Terminal className="h-4 w-4" />
              <span>Interview</span>
            </a>
            <Link
              to="/kubernetes-report-2026"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white transition-colors rounded-md hover:bg-[#1a1a1a]"
            >
              <FileText className="h-4 w-4" />
              <span>K8s Report</span>
            </Link>
          </nav>

          {/* GitHub */}
          <a
            href="https://github.com/rohitg00/DevOpsCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-white border border-[#262626] hover:border-[#404040] rounded-md transition-all hover:bg-[#1a1a1a]"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
