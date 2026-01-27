import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-[#52525b]">
            <span className="text-[#22c55e]">$</span> echo "Built by{' '}
            <a
              href="https://github.com/rohitg00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-[#22c55e] transition-colors"
            >
              @rohitg00
            </a>
            "
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rohitg00/DevOpsCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#52525b] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/ghumare64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#52525b] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
