import React, { useState } from 'react';

export default function BuildPrice() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState('alpine-white');
  const [selectedInterior, setSelectedInterior] = useState('black');
  const [selectedWheels, setSelectedWheels] = useState('standard');

  const models = [
    { id: '3-series', name: '3 Series', basePrice: 42300 },
    { id: '5-series', name: '5 Series', basePrice: 56200 },
    { id: '7-series', name: '7 Series', basePrice: 93300 },
    { id: 'x5', name: 'X5', basePrice: 62800 },
    { id: 'x7', name: 'X7', basePrice: 77850 },
    { id: 'm-series', name: 'M Series', basePrice: 74700 }
  ];

  const colors = [
    { id: 'alpine-white', name: 'Alpine White', hex: '#F5F5F5', price: 0 },
    { id: 'jet-black', name: 'Jet Black', hex: '#0A0A0A', price: 0 },
    { id: 'mineral-grey', name: 'Mineral Grey', hex: '#6B7280', price: 550 },
    { id: 'portimao-blue', name: 'Portimao Blue', hex: '#1E40AF', price: 550 },
    { id: 'fire-red', name: 'Fire Red', hex: '#DC2626', price: 550 }
  ];

  const interiors = [
    { id: 'black', name: 'Black Leather', price: 0 },
    { id: 'cognac', name: 'Cognac Leather', price: 1450 },
    { id: 'ivory', name: 'Ivory Leather', price: 1450 },
    { id: 'red', name: 'Red Leather', price: 1950 }
  ];

  const wheels = [
    { id: 'standard', name: '18" Standard', price: 0 },
    { id: 'sport', name: '19" Sport', price: 800 },
    { id: 'msport', name: '20" M Sport', price: 1500 },
    { id: 'performance', name: '21" Performance', price: 2500 }
  ];

  const calculateTotal = () => {
    if (!selectedModel) return 0;
    const model = models.find(m => m.id === selectedModel);
    const color = colors.find(c => c.id === selectedColor);
    const interior = interiors.find(i => i.id === selectedInterior);
    const wheel = wheels.find(w => w.id === selectedWheels);
    return model.basePrice + color.price + interior.price + wheel.price;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Build & Price Your BMW
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Configure your perfect BMW. Choose your model, customize every detail, and see your price in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Model Selection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Select Your Model</h2>
              <div className="grid grid-cols-2 gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-6 rounded-xl border-2 transition ${
                      selectedModel === model.id
                        ? 'border-sky-400 bg-sky-400/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                    <p className="text-sm text-white/70">
                      ${model.basePrice.toLocaleString()}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {selectedModel && (
              <>
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Choose Exterior Color</h2>
                  <div className="grid grid-cols-5 gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`aspect-square rounded-xl border-2 transition ${
                          selectedColor === color.id
                            ? 'border-sky-400 scale-110'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={`${color.name} ${color.price > 0 ? `+$${color.price}` : ''}`}
                      >
                        <span className="sr-only">{color.name}</span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    {colors.find(c => c.id === selectedColor)?.name}
                    {colors.find(c => c.id === selectedColor)?.price > 0 && 
                      ` (+$${colors.find(c => c.id === selectedColor)?.price})`
                    }
                  </p>
                </div>

                {/* Interior Selection */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Select Interior</h2>
                  <div className="space-y-3">
                    {interiors.map((interior) => (
                      <button
                        key={interior.id}
                        onClick={() => setSelectedInterior(interior.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition ${
                          selectedInterior === interior.id
                            ? 'border-sky-400 bg-sky-400/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{interior.name}</span>
                          <span className="text-white/70">
                            {interior.price > 0 ? `+$${interior.price.toLocaleString()}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Wheels Selection */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Choose Wheels</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {wheels.map((wheel) => (
                      <button
                        key={wheel.id}
                        onClick={() => setSelectedWheels(wheel.id)}
                        className={`p-6 rounded-xl border-2 transition ${
                          selectedWheels === wheel.id
                            ? 'border-sky-400 bg-sky-400/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <h3 className="text-lg font-bold mb-2">{wheel.name}</h3>
                        <p className="text-sm text-white/70">
                          {wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : 'Included'}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Summary & Visual */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              {selectedModel ? (
                <>
                  <div className="flex items-center justify-center h-64 mb-8 rounded-xl bg-white/5">
                    <div className="text-6xl">🚗</div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">
                    {models.find(m => m.id === selectedModel)?.name}
                  </h3>

                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Base Price</span>
                      <span className="font-semibold">
                        ${models.find(m => m.id === selectedModel)?.basePrice.toLocaleString()}
                      </span>
                    </div>
                    {colors.find(c => c.id === selectedColor)?.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Exterior Color</span>
                        <span className="font-semibold">
                          +${colors.find(c => c.id === selectedColor)?.price}
                        </span>
                      </div>
                    )}
                    {interiors.find(i => i.id === selectedInterior)?.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Interior</span>
                        <span className="font-semibold">
                          +${interiors.find(i => i.id === selectedInterior)?.price.toLocaleString()}
                        </span>
                      </div>
                    )}
                    {wheels.find(w => w.id === selectedWheels)?.price > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Wheels</span>
                        <span className="font-semibold">
                          +${wheels.find(w => w.id === selectedWheels)?.price.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/10 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-bold">Total Price</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition">
                      Continue to Checkout →
                    </button>
                    <button className="w-full px-6 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition font-semibold">
                      Save Configuration
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-6">🚗</div>
                  <p className="text-white/70">Select a model to begin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
