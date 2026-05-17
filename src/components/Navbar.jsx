import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  
  const isModelsPage = location.pathname === '/models';
  const isLightNavbar = isModelsPage || openMenu !== null || scrolled;
  const iconButtonClass = `p-2 rounded-full transition ${
    isLightNavbar ? '!text-black hover:bg-gray-100' : '!text-white hover:bg-white/10'
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { 
      title: 'All Models & Configurator', 
      to: '/models'
    },
    { 
      title: 'Electric', 
      to: '/electric',
      sections: [
        {
          heading: 'Electric cars',
          links: [
            { text: 'BMW electric cars', url: '/electric' },
            { text: 'BMW used electric cars', url: '/electric' },
            { text: 'Benefits of BMW electric vehicles', url: '/electric' },
            { text: 'The cost of electric cars', url: '/electric' },
            { text: 'BMW Plug-in-Hybrid', url: '/electric' }
          ]
        },
        {
          heading: 'Charging and range',
          links: [
            { text: 'Home charging', url: '/electric' },
            { text: 'Public charging for electric cars', url: '/electric' },
            { text: 'Electric car battery and motor', url: '/electric' },
            { text: 'The range of electric cars', url: '/electric' }
          ]
        }
      ]
    },
    { 
      title: 'Shop Online', 
      to: '/shop',
      sections: [
        {
          heading: 'Shop and Configure',
          links: [
            { text: 'Build Your BMW', url: '/shop' },
            { text: 'Compare Models', url: '/shop' },
            { text: 'Find a Dealer', url: '/shop' }
          ]
        },
        {
          heading: 'Offers',
          links: [
            { text: 'Finance Options', url: '/shop' },
            { text: 'Lease Options', url: '/shop' },
            { text: 'Special Offers', url: '/shop' }
          ]
        }
      ]
    },
    { 
      title: 'More BMW', 
      to: '/news',
      sections: [
        {
          heading: 'Finance & Insurance',
          links: [
            { text: 'Finance Options', url: '/news' },
            { text: 'Login to MyAccount', url: '/news' },
            { text: 'End of Term Options', url: '/news' },
            { text: 'BMW Insurance', url: '/news' },
            { text: 'BMW Select Finance Offers', url: '/news' },
            { text: 'Vehicle Return', url: '/news' },
            { text: 'BMW Ijarah, Shariah Compliant Lease', url: '/news' },
            { text: 'Vehicle Finance Calculator', url: '/news' }
          ]
        },
        {
          heading: 'BMW Service',
          links: [
            { text: 'BMW Service', url: '/news' },
            { text: 'Book a Service', url: '/news' },
            { text: 'My BMW Plans', url: '/news' },
            { text: 'Technical Campaigns', url: '/news' }
          ]
        },
        {
          heading: 'Original Parts & Accessories',
          links: [
            { text: 'BMW Accessories', url: '/news' },
            { text: 'Lifestyle', url: '/news' },
            { text: 'Genuine BMW Parts', url: '/news' }
          ]
        },
        {
          heading: 'Digital Services & Apps',
          links: [
            { text: 'BMW ConnectedDrive Overview', url: '/news' },
            { text: 'BMW iDrive', url: '/news' },
            { text: 'BMW Digital Key', url: '/news' },
            { text: 'BMW ConnectedDrive Store', url: '/news' }
          ]
        }
      ]
    }
  ];

  return (
    <>
    <nav
      ref={navRef}
      id="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isLightNavbar ? 'bg-white shadow-none' : 'bg-transparent shadow-none'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 99999,
        fontFamily: "'Orbitron', system-ui, sans-serif"
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="relative w-full px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-8">
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-xl block">
            <div 
              className="h-14 w-14 bg-contain bg-center bg-no-repeat transition-all duration-300"
              style={{ 
                backgroundImage: isLightNavbar
                  ? 'url(/videos/bmw_PNG99547.png)' 
                  : 'url(/videos/logo1.png)',
                minWidth: '56px',
                minHeight: '56px'
              }}
              role="img"
              aria-label="BMW logo"
            />
          </Link>

        <ul className="hidden md:flex items-center gap-9 text-[1.15rem] font-semibold tracking-[0.01em] relative">
          {menuItems.map((menu, i) => (
            <li
              key={i}
              className="relative group"
            >
              {menu.sections && menu.sections.length > 0 ? (
                <Link
                  to={menu.to}
                  className={`relative flex items-center gap-2 px-4 py-3 transition-all duration-150 whitespace-nowrap ${
                    isLightNavbar ? '!text-black' : '!text-white'
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenMenu((prev) => (prev === i ? null : i));
                  }}
                  aria-haspopup="true"
                  aria-expanded={openMenu === i}
                >
                  <span>{menu.title}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === i ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              ) : (
                <Link
                  to={menu.to}
                  className={`relative flex items-center gap-2 px-4 py-3 transition-all duration-150 whitespace-nowrap ${
                    isLightNavbar ? '!text-black' : '!text-white'
                  }`}
                >
                  <span>{menu.title}</span>
                </Link>
              )}
              {/* Blue line overlay on top of main divider */}
              <span className={`absolute left-4 right-4 h-[3px] bg-blue-600 transition-opacity duration-200 z-50 ${openMenu === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ bottom: '-16px' }}></span>
            </li>
          ))}
        </ul>
        </div>

        <div className="hidden shrink-0 lg:flex items-center gap-7 pl-8">
          {/* Top right icons */}
          <button className={iconButtonClass}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M2 20c0-4.418 7.582-6 10-6s10 1.582 10 6" />
            </svg>
          </button>
          <button className={iconButtonClass}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>
          </button>
          <button className={iconButtonClass}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21s-7.2-4.5-9.4-8.4C0.4 8.6 2.1 5 5.8 5c2 0 3.3 1 4.2 2.2C10.9 6 12.2 5 14.2 5c3.7 0 5.4 3.6 3.2 7.6C19.2 16.5 12 21 12 21z" />
            </svg>
          </button>
          <button className={iconButtonClass}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
              <circle cx="12" cy="10" r="2" />
            </svg>
          </button>
        </div>
          {/* Icons row continues here */}
        {/* End of icons row */}

        <button
          className={`lg:hidden rounded-xl p-2 transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
            isLightNavbar ? '!text-black hover:bg-gray-100' : '!text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-4 border-b border-white/40" />
      </div>
      <div className="lg:hidden">
        <div
          className={`mx-4 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/90 px-4 py-4 shadow-2xl transition-all duration-200 ${
            mobileOpen ? 'max-h-[480px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          {menuItems.map((menu) => (
            <Link
              key={menu.title}
              to={menu.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/8"
            >
              <span className="flex items-center gap-3">
                {menu.title}
              </span>
              <span className="text-white/50">↗</span>
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/90"
            >
              Concierge
            </Link>
            <Link
              to="/build-price"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Build yours ↗
            </Link>
          </div>
        </div>
      </div>

    </nav>

    {/* Dropdown Menu Section - Appears below entire navbar */}
    {openMenu !== null && menuItems[openMenu]?.sections && menuItems[openMenu].sections.length > 0 && (
      <div 
        className="fixed top-[104px] left-0 right-0 z-40 bg-white shadow-2xl transition-all duration-300"
        style={{
          animation: 'slideDown 0.3s ease-out',
          fontFamily: "'Orbitron', system-ui, sans-serif"
        }}
      >
        <div className="max-w-7xl mx-auto px-16 py-20">
          <div className={`grid gap-24 ${menuItems[openMenu].sections.length > 2 ? 'grid-cols-4' : 'grid-cols-2'}`}>
            {menuItems[openMenu].sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider pb-4 inline-block">
                  {section.heading}
                </h3>
                <ul className="space-y-4 pl-2">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.url}
                        onClick={() => setOpenMenu(null)}
                        className="text-base text-black hover:text-black hover:translate-x-2 transition-all duration-200 block py-2 font-medium"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
