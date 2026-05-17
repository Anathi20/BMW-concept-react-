import React from 'react';

export default function Motorsport() {
  return (
    <section className="bg-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      {/* Banner with Background Image and Overlay Text */}
      <div 
        className="w-full h-[600px] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: "url('/videos/bmw-m-motorsport.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        
        {/* Content on top of image */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              BMW M Motorsport.
            </h2>
            <p className="text-2xl text-white leading-relaxed mb-8">
              Where racing heritage meets road performance. Experience the pinnacle of BMW's engineering excellence, 
              born on the track and perfected for the street.
            </p>
            <button className="group flex items-center space-x-3 text-2xl font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 hover:text-gray-200 transition-colors duration-200 rounded-none px-6 py-4">
              <span>Discover M Motorsport</span>
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
