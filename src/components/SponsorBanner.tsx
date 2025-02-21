import React from 'react';

export function SponsorBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#523d6e] text-white py-1">
      <div className="container mx-auto px-4">
        {/* Mobile view (stacked) */}
        <div className="md:hidden flex flex-col items-center space-y-2 py-2 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm">🎉 Sponsor of the Month:</span>
            <a 
              href="https://bit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img 
                src="https://static.bit.dev/bit-logo.svg" 
                alt="bit.dev"
                className="h-7"
              />
            </a>
          </div>
          <p className="text-sm">Build composable software architecture with ease</p>
          <a
            href="https://bit.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white text-[#6C5CE7] rounded-full text-sm font-medium hover:bg-opacity-90"
          >
            Learn More →
          </a>
        </div>

        {/* Desktop view (inline) */}
        <div className="hidden md:flex items-center justify-center space-x-2 py-1">
          <span>🎉 Sponsor of the Month:</span>
          <a 
            href="https://bit.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://static.bit.dev/bit-logo.svg" 
              alt="bit.dev"
              className="h-9"
            />
          </a>
          <span>- Build composable software architecture with ease</span>
          <a
            href="https://bit.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white text-[#6C5CE7] rounded-full text-sm font-medium hover:bg-opacity-90"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
} 