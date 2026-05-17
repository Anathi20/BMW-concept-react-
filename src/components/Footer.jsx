import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerSections = [
    {
      heading: 'Models',
      links: [
        { label: 'All Models', href: '#' },
        { label: 'BMW i (Electric)', href: '#' },
        { label: 'M Series', href: '#' },
        { label: 'X Series (SAV)', href: '#' },
        { label: '3 Series', href: '#' },
        { label: '5 Series', href: '#' },
        { label: '7 Series', href: '#' },
      ]
    },
    {
      heading: 'Shop',
      links: [
        { label: 'Build & Price', href: '#' },
        { label: 'Shop Online', href: '#' },
        { label: 'Find a Dealer', href: '#' },
        { label: 'Request a Quote', href: '#' },
        { label: 'Test Drive', href: '#' },
        { label: 'Special Offers', href: '#' },
        { label: 'Certified Pre-Owned', href: '#' },
      ]
    },
    {
      heading: 'Explore',
      links: [
        { label: 'BMW Innovation', href: '#' },
        { label: 'Technology', href: '#' },
        { label: 'Performance', href: '#' },
        { label: 'Design', href: '#' },
        { label: 'Sustainability', href: '#' },
        { label: 'BMW Stories', href: '#' },
        { label: 'News & Events', href: '#' },
      ]
    },
    {
      heading: 'Owners',
      links: [
        { label: 'My BMW App', href: '#' },
        { label: 'Owner Support', href: '#' },
        { label: 'Service & Maintenance', href: '#' },
        { label: 'Warranty Information', href: '#' },
        { label: 'Parts & Accessories', href: '#' },
        { label: 'ConnectedDrive', href: '#' },
        { label: 'FAQs', href: '#' },
      ]
    },
    {
      heading: 'Company',
      links: [
        { label: 'About BMW', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Press Center', href: '#' },
        { label: 'BMW Group', href: '#' },
        { label: 'Investor Relations', href: '#' },
        { label: 'Sustainability', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <img src="/videos/bmw_PNG99547.png" alt="BMW logo" className="h-16 mb-4" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Sheer Driving Pleasure
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-wide">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-lg text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-6">
              <span className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Follow BMW:</span>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="text-lg text-gray-600 text-center md:text-right">
              <p>Email: info@bmw.com | Phone: +1 (800) BMW-DRIVE</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-lg text-gray-600 mb-3">
            &copy; {new Date().getFullYear()} BMW of North America, LLC. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center space-x-6 text-lg">
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Legal Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hover:underline underline-offset-2">
                Do Not Sell My Personal Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
