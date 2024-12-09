import React from 'react';
import { ExternalLink, Star, Download } from 'lucide-react';

export function PromotionBanner() {
  return (
    <a
      href="https://rohitghumare.gumroad.com/l/remotejob"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-4xl mx-auto mb-6 group px-4 sm:px-0"
    >
      <div className="bg-white rounded-xl p-4 sm:p-6 animated-border">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] rounded-full p-[2px] shadow-lg">
                <div className="bg-white p-1 rounded-full">
                  <span className="text-[#FF4D6A] font-bold px-2">FREE</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#FF4D6A] flex items-center gap-2">
                🚀 Ultimate Remote Job Roadmap
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              Get my comprehensive guide to landing your dream remote job in tech!
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-xs sm:text-sm">5.0 (129 ratings)</span>
              </div>
              
              <div className="flex items-center gap-1 text-blue-600">
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium text-xs sm:text-sm">5,600+ downloads</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end">
            <ExternalLink className="h-5 w-5 text-[#FF4D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block" />
            <div className="w-full sm:w-auto sm:mt-auto">
              <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] mt-2 px-4 py-2 rounded-lg text-white text-sm font-medium shadow-md group-hover:shadow-lg transition-all duration-200 text-center sm:text-left">
                Get it now →
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
