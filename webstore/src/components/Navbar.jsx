import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-beige-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand */}
        <div className="font-serif text-2xl font-semibold text-primary">
          <NavLink to="/dashboard" className="tracking-tight">
            The Agricultural Editorial
          </NavLink>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex gap-8 text-sm font-medium text-gray-500">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-colors pb-1"}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/wishlist" 
            className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-colors pb-1"}
          >
            Wishlist
          </NavLink>
          <NavLink to="/marketplace" className="hover:text-primary transition-colors pb-1">Marketplace</NavLink>
          <NavLink to="/stories" className="hover:text-primary transition-colors pb-1">Harvest Stories</NavLink>
          <NavLink to="/sustainability" className="hover:text-primary transition-colors pb-1">Sustainability</NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search size={16} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search harvests..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700"
            />
          </div>
          <button className="relative text-gray-700 hover:text-primary transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white border border-primary-light">
            <User size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
