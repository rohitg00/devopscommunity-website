import { Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/logo.svg"
              alt="DevOps Community"
              className="h-8 w-auto text-white"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="flex items-center">
              <span className="text-lg font-semibold text-white tracking-tight">
                DevOps Community
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            <Link
              to="/kubernetes-report-2026"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors hidden md:block"
            >
              K8s Report →
            </Link>
            <a
              href="https://github.com/rohitg00/DevOpsCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#52525b] hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
