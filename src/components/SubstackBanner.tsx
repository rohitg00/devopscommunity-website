import React from 'react';

export function SubstackBanner() {
  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] p-1 rounded-xl h-full">
        <div className="bg-white rounded-lg p-4 transition-all duration-300 hover:bg-opacity-95 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📬</span>
              <h3 className="text-base font-semibold text-[#FF4D6A]">
                That DevOps Guy Newsletter
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Top rated DevOps newsletter with 8,000+ members
            </p>
            <p className="text-xs text-gray-500">
              Get curated insights and career tips
            </p>
          </div>
          <a
            href="https://thatdevopsguy.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] text-white px-4 py-2 rounded-lg font-medium text-sm text-center hover:opacity-90 transition-opacity duration-200"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
