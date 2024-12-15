import React from 'react';

export function SubstackBanner() {
  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] p-1 rounded-xl h-full">
        <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:bg-opacity-95 h-full flex flex-col justify-between">
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
            
            {/* DevOps Infinity Symbol */}
            <div className="my-6 hover:scale-105 transition-transform duration-300">
              <div className="devops-infinity">
                <div className="infinity-loop"></div>
              </div>
              <div className="text-center text-sm text-gray-600 mt-3">
                <span className="font-semibold">DevOps Community Newsletter</span>
              </div>
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
