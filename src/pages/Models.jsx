import React, { useState, useEffect, useContext } from 'react';
import { InfoCardContext } from '../context/InfoCardContext';

export default function Models() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDrivetrain, setSelectedDrivetrain] = useState('all');
  const [showMOnly, setShowMOnly] = useState(false);
  const [minPrice, setMinPrice] = useState(705000);
  const [maxPrice, setMaxPrice] = useState(3675000);
  const { openCardId, previousCardInfo, openCard, closeCard, clearPrevious } = useContext(InfoCardContext);

  useEffect(() => {
    if (!openCardId) return;
    const id = `panel-${openCardId}`;
    // wait for DOM to update
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }, [openCardId]);

  const allModels = {
    electric: [
      { name: 'iX', type: 'SUV', badge: 'New', drivetrain: 'Electric', price: 'From R 2,249,000', image: '/videos/bmw ix eletric.webp', panelImage: '/videos/ix side panel.png', isM: false },
      { name: 'X1', type: 'SUV', badge: '', drivetrain: 'Electric', price: 'From R 1,210,000', image: '/videos/bmw x1.webp', panelImage: '/videos/x1 side panel.webp', isM: false },
      { name: 'i7', type: 'Sedan', badge: '', drivetrain: 'Electric', price: 'From R 2,850,000', image: '/videos/bmw i7.webp', panelImage: '/videos/i7 side panel.png', isM: false },
      { name: 'i5', type: 'Sedan', badge: '', drivetrain: 'Electric', price: 'From R 1,650,000', image: '/videos/bmw i5.webp', panelImage: '/videos/i5 side panel.png', isM: false },
      { name: 'i5 M', type: 'Sedan', badge: '', badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Electric', price: 'From R 2,150,000', image: '/videos/bmw i5 m.webp', isM: true },
      { name: 'i4', type: 'Gran Coupé', badge: '', drivetrain: 'Electric', price: 'From R 1,450,000', image: '/videos/bmw i4.webp', panelImage: '/videos/i4gran coupe side panel.png', isM: false },
      { name: 'i4 M', type: 'Gran Coupé', badge: '', badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Electric', price: 'From R 1,980,000', image: '/videos/bmw i4 m.webp', isM: true },
    ],
    petrol: [
      { name: 'X7', type: 'SUV', badge: '', drivetrain: 'Petrol', price: 'From R 2,515,000', image: '/videos/x7.webp', panelImage: '/videos/x7 side panel.png', isM: true },
      { name: 'X6', type: 'SUV', badge: '', drivetrain: 'Petrol', price: 'From R 1,957,000', image: '/videos/x6.webp', panelImage: '/videos/x6 side panel.png', isM: true },
      { name: 'X6 M', type: 'SUV', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 2,266,000', image: '/videos/x6m.webp', panelImage: '/videos/x6 m side panel.png', isM: true },
      { name: 'X5', type: 'SUV', badge: '', drivetrain: 'Petrol', price: 'From R 1,836,000', image: '/videos/x5.webp', panelImage: '/videos/x5 side panel.png', isM: true },
      { name: 'X5 M', type: 'SUV', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 3,270,000', image: '/videos/x5m.webp', panelImage: '/videos/x5 m side panel.png', isM: true },
      { name: 'X3', type: 'SUV', badge: '', drivetrain: 'Petrol', price: 'From R 1,450,000', image: '/videos/x3.webp', panelImage: '/videos/x3 side panel.png', isM: true },
      { name: 'X2', type: 'SUV', badge: '', drivetrain: 'Petrol', price: 'From R 850,000', image: '/videos/x2.webp', isM: false },

      { name: '5 Series', type: 'Sedan', badge: '', drivetrain: 'Petrol', price: 'From R 1,250,000', image: '/videos/5series.webp', isM: true },
      { name: '4 Series ', type: 'Gran Coupé', badge: '', drivetrain: 'Petrol', price: 'From R 990,000', image: '/videos/4series gran coupe.webp', panelImage: '/videos/4 series gran coupe side panel.png', isM: true },
      { name: '4 Series', type: 'Gran Coupé', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 1,450,000', image: '/videos/4series gran coupe m.webp', panelImage: '/videos/4 series gran coupe side panel.png', isM: true },
      { name: '4 Series', type: 'Convertible', badge: '', drivetrain: 'Petrol', price: 'From R 1,100,000', image: '/videos/bmw 4 series convertible.webp', isM: false },


      { name: '3 Series', type: 'Sedan', badge: '', drivetrain: 'Petrol', price: 'From R 850,000', image: '/videos/3series.webp', panelImage: '/videos/3 series side panel.png', isM: true },
      { name: '2 Series', type: 'Coupé', badge: '', drivetrain: 'Petrol', price: 'From R 720,000', image: '/videos/2series.webp', panelImage: '/videos/2 series side panel.png', isM: true },
      
      { name: 'M5', type: 'Sedan', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 2,800,000', image: '/videos/bmw i5 m.webp', panelImage: '/videos/m5 side panel.png', isM: true },
      { name: 'M4', type: 'Coupé', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 2,200,000', image: '/videos/m4.webp', isM: true },
      { name: 'M3', type: 'Sedan', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 2,100,000', image: '/videos/m3.webp', isM: true },
      { name: 'M2', type: 'Coupé', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Petrol', price: 'From R 1,650,000', image: '/videos/m2.webp', isM: true },
      
    ],

    hybrid: [
      { name: 'XM', type: 'SUV', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Hybrid', price: 'From R 3,675,000', image: '/videos/bmw xm.webp', panelImage: '/videos/xm side panel.png', isM: true },
      { name: 'X5', type: 'SUV', badge: '', drivetrain: 'Hybrid', price: 'From R 1,930,000', image: '/videos/bmw x5.webp', panelImage: '/videos/x5 side panel.png', isM: false },
      { name: 'X3', type: 'SUV', badge: '', drivetrain: 'Hybrid', price: 'From R 1,282,000', image: '/videos/bmw x3.webp', panelImage: '/videos/x3 side panel.png', isM: false },
      { name: 'X1', type: 'SUV', badge: '', drivetrain: 'Hybrid', price: 'From R 950,000', image: '/videos/bmw x1-hybrid.webp', panelImage: '/videos/x1 side panel.webp', isM: false },

      { name: 'M5', type: 'Sedan', badge: '',badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Hybrid', price: 'From R 3,202,000', image: '/videos/bmw i5 m.webp', panelImage: '/videos/m5 side panel.png', isM: true },
      { name: 'M5', type: 'Touring', badge: '', badgeImage: '/videos/BMW_M_Badge.png', drivetrain: 'Hybrid', price: 'From R 3,202,000', image: '/videos/bmw m5 touring.webp', panelImage: '/videos/m5 touring.png', isM: true },
    ],
    diesel: [
      { name: 'X7', type: 'SUV', badge: '', drivetrain: 'Diesel', price: 'From R 2,200,000', image: '/videos/x7.webp', panelImage: '/videos/x7 side panel.png', isM: false },
      { name: 'X5', type: 'SUV', badge: '', drivetrain: 'Diesel', price: 'From R 1,650,000', image: '/videos/x5.webp', panelImage: '/videos/x5 side panel.png', isM: false },
      { name: 'X3', type: 'SUV', badge: '', drivetrain: 'Diesel', price: 'From R 1,200,000', image: '/videos/x3.webp', panelImage: '/videos/x3 side panel.png', isM: false },
      { name: '5 Series', type: 'Sedan', badge: '', drivetrain: 'Diesel', price: 'From R 1,100,000', image: '/videos/5series.webp', isM: false },
      { name: '3 Series', type: 'Sedan', badge: '', drivetrain: 'Diesel', price: 'From R 750,000', image: '/videos/3series.webp', isM: false },
    ]
  };

  // shared state to ensure only one panel is inserted across all sections
  const panelState = { inserted: false };


  const categories = [
    { id: 'SUV', name: 'SUV', icon: '/videos/Sporty BMW SUV side profile sketch.png' },
    { id: 'Touring', name: 'Touring', icon: '/videos/BMW Touring line drawing in profile.png' },
    { id: 'Sedan', name: 'Sedan', icon: '/videos/BMW M3 side profile illustration.png' },
    { id: 'Coupé', name: 'Coupé', icon: '/videos/Sleek BMW coupe side profile.png' },
    { id: 'Compact', name: 'Compact', icon: '/videos/Sporty BMW hatchback vector design.png' },
    { id: 'Convertible', name: 'Convertible', icon: '/videos/BMW convertible side profile drawing.png' },
  ];

  const drivetrains = [
    { id: 'Electric', name: '100% Electric' },
    { id: 'Hybrid', name: 'Plug-in Hybrid' },
    { id: 'Petrol', name: 'Petrol' },
    { id: 'Diesel', name: 'Diesel' },
  ];

  const priceOptions = [705000, 750000, 850000, 950000, 1100000, 1250000, 1450000, 1650000, 1930000, 2100000, 2249000, 2850000, 3202000, 3675000];

  const parsePrice = (price) => Number(price.replace(/[^\d]/g, ''));

  const formatPrice = (value) => `R ${value.toLocaleString('en-ZA').replace(/,/g, ' ')}`;

  const applyFilters = (models) =>
    models.filter((model) => {
      const modelPrice = parsePrice(model.price);
      const matchesCategory = selectedCategory === 'all' || model.type === selectedCategory;
      const matchesM = !showMOnly || model.isM;
      const matchesPrice = modelPrice >= minPrice && modelPrice <= maxPrice;
      return matchesCategory && matchesM && matchesPrice;
    });

  const filteredElectric = applyFilters(allModels.electric);
  const filteredHybrid = applyFilters(allModels.hybrid);
  const filteredPetrol = applyFilters(allModels.petrol);
  const filteredDiesel = applyFilters(allModels.diesel);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedDrivetrain('all');
    setShowMOnly(false);
    setMinPrice(705000);
    setMaxPrice(3675000);
    closeCard();
  };

  const ModelCard = ({ model, isSelected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left bg-[#f3f3f3] transition-colors duration-200 group relative border ${
        isSelected ? 'border-blue-600' : 'border-gray-200 hover:border-gray-400'
      }`}
      aria-expanded={isSelected}
      aria-label={`${model.name} details`}
    >
      <div className="relative">
        <div className="p-4 pt-3">
          <div className="mb-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-gray-600 uppercase tracking-wide font-medium whitespace-nowrap max-w-[95px] truncate">{model.type}</span>
              {model.badge && (
                <span className="bg-black text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
                  {model.badge}
                </span>
              )}
              {model.badgeImage && (
                <img src={model.badgeImage} alt={`${model.name} badge`} className="h-4 w-auto" />
              )}
            </div>
            <h3 className="text-5xl font-normal mt-1 mb-0 leading-none text-gray-800">{model.name}</h3>
            <p className="text-sm text-gray-700 mt-1">Models</p>
          </div>

          <div className="h-64 bg-[#f3f3f3] flex items-end justify-center overflow-hidden relative mb-4">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-contain object-bottom"
            />
          </div>

          <div className="mb-2">
            <span className="text-xs text-gray-900 font-medium">
              {model.drivetrain}
            </span>
          </div>

          <p className="text-sm font-bold text-gray-900 flex items-center gap-1">
            {model.price}
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </p>
        </div>
      </div>
    </button>
  );

  const renderExpandedPanel = (model, isClosing = false, idAttr = undefined) => (
    <div 
      id={idAttr}
      className={`col-span-3 border border-[#d2d2d2] bg-white px-6 py-5 relative ${isClosing ? 'z-10 pointer-events-none' : 'z-20'}`}
      style={{
        animation: isClosing ? 'panelClose 0.35s ease-in forwards' : 'panelOpen 0.4s ease-out forwards',
      }}
      onAnimationEnd={isClosing ? clearPrevious : undefined}
    >
      <button
        type="button"
        onClick={() => closeCard()}
        className="absolute right-5 top-4 text-4xl leading-none text-gray-600 hover:text-gray-800"
        aria-label="Close model details"
      >
        ×
      </button>

      <div className="flex items-stretch gap-4 pr-12 min-h-[320px]">
        <div className="w-[28%] min-w-[180px] flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-wide text-gray-600 bg-[#dfdfdf] px-1.5 py-0.5">{model.type}</span>
            {model.badge && (
              <span className="bg-[#777] text-white text-[10px] px-1.5 py-0.5 font-bold uppercase tracking-wider">
                {model.badge}
              </span>
            )}
          </div>

          <h3 className="text-[52px] font-normal text-gray-900 leading-[0.95]">{model.name}</h3>
          <p className="text-[30px] font-light text-gray-800 leading-none mt-1">Models</p>

          <div className="mt-auto pt-6">
            <p className="text-base text-blue-700 leading-tight">{model.drivetrain}</p>
          </div>
        </div>

        <div className="flex-1 min-w-[360px] flex items-end justify-start overflow-hidden -ml-6">
          <img
            src={model.panelImage || model.image}
            alt={model.name}
            className="w-full h-[320px] object-contain object-left"
          />
        </div>

        <div className="w-[230px] flex flex-col justify-center gap-2">
          <button className="h-12 px-4 bg-[#1f66cc] text-white text-[18px] font-medium leading-none hover:bg-[#1758b3] transition-colors">
            Vehicle information
          </button>
          <button className="h-12 px-4 border border-[#666] text-gray-800 text-[18px] font-medium leading-none hover:border-[#444] transition-colors">
            Keep me informed
          </button>
          <button className="h-12 px-4 border border-[#666] text-gray-800 text-[18px] font-medium leading-none hover:border-[#444] transition-colors">
            Build & Price
          </button>
        </div>
      </div>
    </div>
  );

  const parseCardId = (id) => {
    if (!id) return null;
    const dash = id.lastIndexOf('-');
    if (dash === -1) return null;
    const section = id.slice(0, dash);
    const index = Number(id.slice(dash + 1));
    return { section, index };
  };

  // Render a section's cards and insert at most one panel (open or closing) globally
  const renderSectionWithPanels = (models, sectionKey, panelState) => {
    const parsedOpen = parseCardId(openCardId);
    const selectedInSection = parsedOpen?.section === sectionKey ? parsedOpen : null;

    const previous = previousCardInfo;

    const items = [];

    for (let idx = 0; idx < models.length; idx++) {
      const model = models[idx];
      const isSelected = selectedInSection?.index === idx;
      const rowEndIndex = Math.min(Math.floor(idx / 3) * 3 + 2, models.length - 1);

      items.push(
        <ModelCard
          key={`${sectionKey}-${model.name}-${idx}`}
          model={model}
          isSelected={isSelected}
          onClick={() => {
            const id = `${sectionKey}-${idx}`;
            const rowEnd = rowEndIndex;
            if (openCardId === id) closeCard({ section: sectionKey, index: idx, rowEnd });
            else openCard(id, { section: sectionKey, index: idx, rowEnd });
          }}
        />
      );

      // After reaching the end of a row, possibly insert the single panel
      if (rowEndIndex === idx && !panelState.inserted) {
        if (selectedInSection && selectedInSection.index <= rowEndIndex) {
          const panelId = `panel-${sectionKey}-${selectedInSection.index}`;
          items.push(renderExpandedPanel(models[selectedInSection.index], false, panelId));
          panelState.inserted = true;
        } else if (
          previous &&
          previous.section === sectionKey &&
          previous.id !== openCardId &&
          previous.rowEnd === rowEndIndex
        ) {
          const parsedPrev = parseCardId(previous.id);
          if (parsedPrev) {
            const panelId = `panel-${previous.id}`;
            items.push(renderExpandedPanel(models[parsedPrev.index], true, panelId));
            panelState.inserted = true;
          }
        }
      }
    }

    return <div className="grid grid-cols-3 gap-4">{items}</div>;
  };

  return (
    <div className="min-h-screen bg-white pt-20" style={{ fontFamily: 'Orbitron, system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @keyframes panelOpen {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        @keyframes panelClose {
          from {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
      {/* Header Section */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8">
          <h1 className="text-3xl mb-2 text-gray-900" style={{ fontWeight: 400 }}>Discover and configure all BMW models.</h1>
          <p className="text-base text-gray-700 max-w-5xl leading-relaxed">
            Explore our latest car models to find the smart technology, innovative features and engine type that's right for you. Simply compare, build and locate your perfect new BMW.
          </p>
          
          {/* Sort Dropdown */}
          <div className="mt-5 flex justify-end">
            <select className="border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-500 bg-white">
              <option className="text-gray-900">Default</option>
              <option className="text-gray-900">Price: Low to High</option>
              <option className="text-gray-900">Price: High to Low</option>
              <option className="text-gray-900">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pl-6 pr-0 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-[400px] flex-shrink-0 pr-4 border-r border-gray-300 sticky top-32 self-start max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain">
            {/* Categories */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-between font-normal text-4xl mb-5 text-gray-800 !bg-transparent !border-none !p-0 !shadow-none">
                Categories
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                    className={`flex flex-col items-center justify-center h-[84px] p-2 border transition-all !bg-white text-gray-700 ${
                      selectedCategory === cat.id 
                        ? 'border-gray-700' 
                        : 'border-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <div className="w-20 h-12 mb-1 flex items-center justify-center overflow-hidden">
                      <img src={cat.icon} alt={cat.name} className="max-w-full max-h-full object-contain opacity-70" />
                    </div>
                    <span className="text-[18px] leading-none font-normal text-center text-gray-700">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-300 my-7" />

            {/* Drivetrain Variants */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-between font-normal text-4xl mb-5 text-gray-800 !bg-transparent !border-none !p-0 !shadow-none">
                Drivetrain variants
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="grid grid-cols-2 gap-2">
                {drivetrains.map(dt => (
                  <button
                    key={dt.id}
                    onClick={() => setSelectedDrivetrain(selectedDrivetrain === dt.id ? 'all' : dt.id)}
                    className={`flex flex-col items-center justify-center h-[112px] p-2 border transition-all !bg-white text-gray-700 ${
                      selectedDrivetrain === dt.id 
                        ? 'border-gray-700' 
                        : 'border-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {dt.id === 'Electric' ? (
                      <svg className="w-8 h-8 mb-1.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : dt.id === 'Hybrid' ? (
                      <svg className="w-8 h-8 mb-1.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 mb-1.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    <span className="text-[17px] font-normal text-center leading-tight text-gray-700">{dt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* BMW M */}
            <div>
              <button className="w-full flex items-center justify-between font-normal text-4xl mb-3 text-gray-800 !bg-transparent !border-none !p-0 !shadow-none">
                BMW M
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => setShowMOnly(!showMOnly)}
                className={`h-[36px] w-[68px] border flex items-center justify-center !bg-white ${showMOnly ? 'border-gray-700' : 'border-gray-400 hover:border-gray-600'}`}
              >
                <img src="/videos/BMW_M_Badge.png" alt="BMW M" className="h-4 w-auto" />
              </button>
            </div>

            <div className="border-t border-gray-300 my-7" />

            <div className="mb-6">
              <button className="w-full flex items-center justify-between font-normal text-4xl mb-5 text-gray-800 !bg-transparent !border-none !p-0 !shadow-none">
                Price
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              <p className="text-base text-gray-700 mb-2">From</p>
              <select
                value={minPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setMinPrice(value <= maxPrice ? value : maxPrice);
                }}
                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white text-gray-900 mb-3"
              >
                {priceOptions.map((value) => (
                  <option key={`min-${value}`} value={value} className="text-gray-900">
                    {formatPrice(value)}
                  </option>
                ))}
              </select>

              <p className="text-base text-gray-700 mb-2">Up to</p>
              <select
                value={maxPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setMaxPrice(value >= minPrice ? value : minPrice);
                }}
                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white text-gray-900"
              >
                {priceOptions.map((value) => (
                  <option key={`max-${value}`} value={value} className="text-gray-900">
                    {formatPrice(value)}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-t border-gray-300 my-7" />

            <div className="mb-6">
              <button className="w-full flex items-center justify-between font-normal text-4xl mb-5 text-gray-800 !bg-transparent !border-none !p-0 !shadow-none">
                Further categories
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button className="h-[36px] px-5 border border-gray-400 bg-white text-gray-700 text-base hover:border-gray-600">
                Concept Cars
              </button>
            </div>

            <div className="border-t border-gray-300 my-7" />

            <button
              onClick={resetFilters}
              className="text-3xl text-gray-700 font-normal !bg-transparent !border-none !p-0 !shadow-none"
            >
              Reset all
            </button>
          </div>

          {/* Models Grid */}
          <div className="flex-1 bg-[#e9e9e9] p-5">
            {(selectedDrivetrain === 'all' || selectedDrivetrain === 'Electric') && (
              <div className="mb-12">
                <div className="flex items-center gap-2.5 mb-5">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h2 className="text-3xl font-normal text-gray-900">
                    Full electric ({filteredElectric.length})
                  </h2>
                </div>
                {renderSectionWithPanels(filteredElectric, 'electric', panelState)}
              </div>
            )}

            {(selectedDrivetrain === 'all' || selectedDrivetrain === 'Hybrid') && (
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h2 className="text-3xl font-normal text-gray-900">
                    Plug-in hybrid ({filteredHybrid.length})
                  </h2>
                </div>
                {renderSectionWithPanels(filteredHybrid, 'hybrid', panelState)}
              </div>
            )}

            {(selectedDrivetrain === 'all' || selectedDrivetrain === 'Petrol') && (
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h2 className="text-3xl font-normal text-gray-900">
                    Petrol ({filteredPetrol.length})
                  </h2>
                </div>
                {renderSectionWithPanels(filteredPetrol, 'petrol', panelState)}
              </div>
            )}

            {(selectedDrivetrain === 'all' || selectedDrivetrain === 'Diesel') && (
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h2 className="text-3xl font-normal text-gray-900">
                    Diesel ({filteredDiesel.length})
                  </h2>
                </div>
                {renderSectionWithPanels(filteredDiesel, 'diesel', panelState)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
