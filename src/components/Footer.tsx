import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white mt-12 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              Special thanks to{' '}
              <a
                href="https://github.com/rohitg00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D6A] hover:text-[#FF8547] font-medium transition-colors duration-200"
              >
                Rohit Ghumare
              </a>{' '}
              for curating these valuable DevOps resources.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/rohitg00/DevOpsCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-[#FF4D6A] transition-colors duration-200"
              aria-label="Join us on GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/ghumare64"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-[#FF4D6A] transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}