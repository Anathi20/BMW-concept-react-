import React from 'react';

export default function FinancialServices() {
  return (
    <section className="bg-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {/* Financial Services Content */}
      <div className="max-w-[1600px] mx-auto px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Car Image */}
          <div className="overflow-hidden rounded-2xl h-[600px]">
            <img 
              src="/videos/bmw-financial.jpg" 
              alt="BMW Financial Services" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-10">
            <h2 className="text-6xl md:text-7xl font-bold text-black leading-tight">
              BMW Financial Services.
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              View our BMW select finance offers available across the range
              <sup className="text-lg">[1]</sup>.
            </p>
            <button className="group flex items-center space-x-3 text-2xl font-semibold text-black border border-black/20 hover:border-black hover:bg-black/5 transition-colors duration-200 rounded-none px-6 py-4">
              <span>Explore offers</span>
              <svg 
                className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-base text-gray-500 pt-6">
              <sup>[1]</sup> BMW Financial Services (South Africa) (Pty) Ltd is an Authorised Financial Services Provider (FSP 4623) and Registered Credit Provider (NCRCP2341).
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-12 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-8">
              <img 
                src="/videos/bmw_PNG99547.png" 
                alt="BMW Logo" 
                className="h-20 w-20 object-contain"
              />
              <p className="text-2xl text-gray-800">
                Stay up to date with all the latest news from BMW.
              </p>
            </div>
            <button className="group flex items-center space-x-3 text-2xl font-semibold text-white border border-[#1c69d4] bg-[#1c69d4] hover:bg-[#1557af] hover:border-[#1557af] transition-colors duration-200 whitespace-nowrap rounded-none px-6 py-4">
              <span>Subscribe to BMW News</span>
              <svg 
                className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
