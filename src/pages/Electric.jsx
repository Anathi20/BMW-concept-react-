import React from 'react';

export default function Electric() {
  const electricModels = [
    {
      name: 'BMW i3',
      tagline: 'Urban Electric Pioneer',
      range: 'Up to 153 miles',
      power: '170 HP',
      charging: '0-80% in 40 min (DC fast)',
      price: 'Starting at $44,450'
    },
    {
      name: 'BMW i4',
      tagline: 'Electric Performance Sedan',
      range: 'Up to 301 miles',
      power: 'Up to 536 HP',
      charging: '0-80% in 31 min (DC fast)',
      price: 'Starting at $56,395'
    },
    {
      name: 'BMW iX',
      tagline: 'The Ultimate Electric SAV',
      range: 'Up to 324 miles',
      power: 'Up to 516 HP',
      charging: '0-80% in 35 min (DC fast)',
      price: 'Starting at $87,250'
    },
    {
      name: 'BMW i7',
      tagline: 'Electric Luxury Redefined',
      range: 'Up to 321 miles',
      power: '536 HP',
      charging: '0-80% in 34 min (DC fast)',
      price: 'Starting at $105,700'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 text-sm font-semibold mb-6">
            ⚡ ELECTRIC MOBILITY
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            BMW Electric
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of driving with BMW's all-electric lineup. Zero emissions, unlimited possibilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-xl font-bold mb-2">Extended Range</h3>
            <p className="text-white/70">Up to 324 miles on a single charge</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast Charging</h3>
            <p className="text-white/70">DC fast charging up to 195 kW</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2">Zero Emissions</h3>
            <p className="text-white/70">100% electric, 0% compromises</p>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {electricModels.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{model.name}</h3>
                    <p className="text-sky-400">{model.tagline}</p>
                  </div>
                  <div className="text-4xl">⚡</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-white/60 mb-1">Range</p>
                    <p className="font-semibold">{model.range}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-white/60 mb-1">Power</p>
                    <p className="font-semibold">{model.power}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 col-span-2">
                    <p className="text-sm text-white/60 mb-1">Charging</p>
                    <p className="font-semibold">{model.charging}</p>
                  </div>
                </div>

                <p className="text-2xl font-bold mb-6">{model.price}</p>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition">
                    Configure
                  </button>
                  <button className="px-6 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition font-semibold">
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-sky-400/10 to-blue-600/10 border border-sky-400/30 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Electric?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Experience the thrill of instant torque and whisper-quiet performance. Schedule your test drive today.
          </p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-sky-500/30 transition">
            Schedule Test Drive →
          </button>
        </div>
      </div>
    </div>
  );
}
