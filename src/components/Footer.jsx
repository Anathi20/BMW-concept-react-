import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src="/videos/logo1.png" alt="BMW logo" className="h-20 mb-6" />
          <p className="text-base text-gray-400 leading-relaxed">
            Experience the ultimate in luxury and performance with BMW. Discover innovation on every drive.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Models</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">News</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Company</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Store</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-extrabold mb-6">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Warranty</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-extrabold mb-6">Follow Us</h3>
          <div className="flex space-x-6 text-3xl">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition"><FaYoutube /></a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Email: info@bmw.com<br />
            Phone: +1 (800) BMW-DRIVE
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BMW. All rights reserved.</p>
        <ul className="flex justify-center space-x-8 mt-4 text-sm">
          <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
