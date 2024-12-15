import React from 'react';

export function SubstackBanner() {
  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] p-1 rounded-xl h-full">
        <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:bg-opacity-95 h-full flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📬</span>
              <h3 className="text-lg font-semibold text-[#FF4D6A] leading-tight">
                DevOps and Cloud Native Newsletter
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Top rated DevOps newsletter with 8,000+ members
            </p>
            <p className="text-sm text-gray-500">
              Get curated insights and career tips
            </p>
          </div>
            
          {/* Infinity Symbol */}
          <div className="flex-grow flex items-center justify-center min-h-[120px]">
            <svg className="devops-infinity w-full h-full" viewBox="0 0 200 100">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4D6A" />
                  <stop offset="100%" stopColor="#FF8547" />
                </linearGradient>
              </defs>
              <path
                className="infinity-path"
                d="M46,50 C46,30 66,30 76,50 C86,70 106,70 106,50 C106,30 86,30 76,50 C66,70 46,70 46,50"
                fill="url(#gradient)"
                transform="scale(0.5, 1)"
              />
            </svg>
          </div>
          <div className="flex-grow flex items-center justify-center min-h-[120px]">
            <svg className="devops-infinity w-full h-full" viewBox="0 0 200 100">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4D6A" />
                  <stop offset="100%" stopColor="#FF8547" />
                </linearGradient>
              </defs>
              <path
                className="infinity-path"
                d="M46,50 C46,30 66,30 76,50 C86,70 106,70 106,50 C106,30 86,30 76,50 C66,70 46,70 46,50"
                fill="url(#gradient)"
                transform="scale(0.5, 1)"
              />
            </svg>
          </div>
          
          <a
            href="https://thatdevopsguy.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] text-white px-4 py-2.5 rounded-lg font-medium text-sm text-center hover:opacity-90 transition-opacity duration-200 w-full inline-block"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
}
