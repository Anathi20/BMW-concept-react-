import React from 'react';
import { FaCarSide, FaNewspaper, FaBuilding, FaShoppingBag, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="sticky top-0 w-full flex justify-between p-4 bg-transparent z-50 transition-opacity duration-300 opacity-100"
    >
      <img src="/videos/logo1.png" alt="BMW logo" className="h-16" />
      <ul className="flex space-x-10 text-lg relative font-sans font-semibold tracking-wide text-white">
        {[
          { title: 'Models', icon: <FaCarSide />, items: ['3 Series', '5 Series', '7 Series', 'X5'] },
          { title: 'Electric', icon: <FaCarSide />, items: ['i3', 'i4', 'iX'] },
          { title: 'Build & Price', icon: <FaBuilding />, items: ['Build Your BMW'] },
          { title: 'Shop Online', icon: <FaShoppingBag />, items: ['Accessories', 'Parts', 'Apparel'] },
          { title: 'More BMW', icon: null, items: ['About Us', 'Careers', 'Sustainability'] },
          ].map((menu, i) => (
          <li key={i} className="cursor-pointer flex items-center space-x-2">
            <span className="custom-underline transition flex items-center space-x-1">
              <span>{menu.title}</span>
              {(menu.title === 'Electric' || menu.title === 'Shop Online' || menu.title === 'More BMW') && (
                <FaChevronDown className="ml-1" />
              )}
            </span>
          </li>
          ))}
      </ul>
    </nav>
  );
}
