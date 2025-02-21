import React from 'react';
import { ExternalLink, Star, Download } from 'lucide-react';

export function PromotionBanner() {
  return (
    <div className="space-y-2">
      {/* DevOps Interview Questions Banner */}
      <a
        href="https://interview.devopscommunity.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-4xl mx-auto group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
          <div className="bg-white rounded-xl p-3 relative border-2 border-transparent hover:border-[#FF4D6A] transition-all duration-500 animated-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] rounded-full p-[2px] shadow-lg">
                    <div className="bg-white p-1 rounded-full">
                      <span className="text-[#FF4D6A] font-bold px-2">NEW</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-[#FF4D6A] flex items-center gap-2">
                    💡 500+ DevOps Interview Questions
                  </h3>
                </div>
                
                <p className="text-gray-600 mt-1 mb-1 text-sm">
                  Comprehensive collection of DevOps interview questions to help you ace your next interview!
                </p>
              </div>
              
              <div className="ml-4 flex flex-col items-end">
                <ExternalLink className="h-4 w-4 text-[#FF4D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] mt-1 px-3 py-1 rounded-lg text-white text-xs font-medium shadow-md group-hover:shadow-lg transition-all duration-200">
                    Explore now →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Remote Job Roadmap Banner */}
      <a
        href="https://rohitghumare.gumroad.com/l/remotejob"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-4xl mx-auto group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
          <div className="bg-white rounded-xl p-3 relative border-2 border-transparent hover:border-[#FF4D6A] transition-all duration-500 animated-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] rounded-full p-[2px] shadow-lg">
                    <div className="bg-white p-1 rounded-full">
                      <span className="text-[#FF4D6A] font-bold px-2">FREE</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-[#FF4D6A] flex items-center gap-2">
                    🚀 Ultimate Remote Job Roadmap
                  </h3>
                </div>
                
                <p className="text-gray-600 mt-1 mb-1 text-sm">
                  Get my comprehensive guide to landing your dream remote job in tech!
                </p>
                
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">5.0 (129)</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-blue-600">
                    <Download className="h-3 w-3" />
                    <span className="font-medium">5,900+ downloads</span>
                  </div>
                </div>
              </div>
              
              <div className="ml-4 flex flex-col items-end">
                <ExternalLink className="h-4 w-4 text-[#FF4D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] mt-1 px-3 py-1 rounded-lg text-white text-xs font-medium shadow-md group-hover:shadow-lg transition-all duration-200">
                    Get it now →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
