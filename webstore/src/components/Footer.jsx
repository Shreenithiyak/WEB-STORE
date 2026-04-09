import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Tractor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-beige-50 border-t border-gray-200 mt-auto py-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Area */}
        <div className="md:col-span-1">
          <h2 className="font-serif text-lg font-bold text-primary mb-2">The Agricultural Editorial</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Preserving the soul of Tamil Nadu's agriculture through sustainable commerce and honest storytelling.
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4">Our Mission</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><NavLink to="/stories" className="hover:text-primary">Heritage Stories</NavLink></li>
            <li><NavLink to="/sustainability" className="hover:text-primary">Sustainability</NavLink></li>
            <li><NavLink to="/farmers" className="hover:text-primary">Our Farmers</NavLink></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4">Partner With Us</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><NavLink to="/b2b" className="hover:text-primary">Bulk Inquiry</NavLink></li>
            <li><NavLink to="/support" className="hover:text-primary">Support</NavLink></li>
          </ul>
        </div>

        {/* Links 3 */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4">Legal</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><NavLink to="/privacy" className="hover:text-primary">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-primary">Terms of Service</NavLink></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 The Agricultural Editorial. Honoring Tamil Nadu's Heritage.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Leaf size={14} className="text-primary" />
          <span>100% Plastic Free Shipping</span>
          <Tractor size={14} className="text-primary ml-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
