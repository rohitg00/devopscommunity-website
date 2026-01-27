import React from 'react';
import { ExternalLink } from 'lucide-react';

export function DevOpsToolsCollection() {
  return (
    <div className="space-y-2">
      <a
        href="https://tools.devopscommunity.in"
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
                    🛠️ Collection of 2500+ DevOps Tools
                  </h3>
                </div>
                
                <p className="text-gray-600 mt-1 mb-1 text-sm">
                  Explore our comprehensive collection of DevOps tools to enhance your development and operations workflow!
                </p>
              </div>
              
              <div className="ml-4 flex flex-col items-end">
                <ExternalLink className="h-4 w-4 text-[#FF4D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] mt-1 px-3 py-1 rounded-lg text-white text-xs font-medium shadow-md group-hover:shadow-lg transition-all duration-200">
                    Explore Tools →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://linux.devopscommunity.in"
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
                    🐧 Linux Command Cheatsheet
                  </h3>
                </div>
                
                <p className="text-gray-600 mt-1 mb-1 text-sm">
                  Master Linux commands with our comprehensive cheatsheet - perfect for DevOps engineers and system administrators!
                </p>
              </div>
              
              <div className="ml-4 flex flex-col items-end">
                <ExternalLink className="h-4 w-4 text-[#FF4D6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] mt-1 px-3 py-1 rounded-lg text-white text-xs font-medium shadow-md group-hover:shadow-lg transition-all duration-200">
                    View Cheatsheet →
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
