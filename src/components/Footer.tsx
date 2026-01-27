import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#71717a]">
            Curated by{' '}
            <a
              href="https://github.com/rohitg00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
            >
              Rohit Ghumare
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rohitg00/DevOpsCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ghumare64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
