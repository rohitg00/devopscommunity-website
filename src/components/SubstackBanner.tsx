import React from 'react';

export function SubstackBanner() {
  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] p-1 rounded-xl h-full">
        <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:bg-opacity-95 h-full flex flex-col justify-between">
          <div>
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
            
            {/* Infinity Symbol */}
            <div className="my-6">
              <svg className="devops-infinity" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF4D6A" />
                    <stop offset="100%" stopColor="#FF8547" />
                  </linearGradient>
                </defs>
                <path
                  className="infinity-path"
                  d="M30,20 C30,12 38,12 40,20 C42,28 50,28 50,20 C50,12 58,12 60,20 C62,28 70,28 70,20"
                  fill="url(#gradient)"
                />
              </svg>
            </div>
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
