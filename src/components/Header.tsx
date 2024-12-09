import React from 'react';
import { Github } from 'lucide-react';
import { LOGO_URL } from '../utils/constants';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#FF4D6A] to-[#FF8547] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src={LOGO_URL}
                alt="DevOps Community"
                className="h-12 w-12"
                onError={(e) => {
                  e.currentTarget.src = 'https://github.com/rohitg00/DevOpsCommunity/blob/main/assets/default.png?raw=true';
                }}
              />
              <div className="ml-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  DevOps Community
                </h1>
                <p className="text-pink-100 text-sm">
                  Do&apos;s &amp; Don&apos;ts as a DevOps Engineer
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/rohitg00/DevOpsCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}