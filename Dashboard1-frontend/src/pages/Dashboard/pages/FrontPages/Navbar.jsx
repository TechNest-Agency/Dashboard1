import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavLink to="/frontend/landing" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="text-xl font-semibold text-gray-800">TechNest</span>
        </NavLink>
        <div className="flex space-x-6">
          <NavLink
            to="/frontend/landing"
            className={({ isActive }) =>
              `text-gray-600 hover:text-purple-600 ${isActive ? 'font-semibold text-purple-600' : ''}`
            }
          >
            Landing
          </NavLink>
          <NavLink
            to="/frontend/pricing"
            className={({ isActive }) =>
              `text-gray-600 hover:text-purple-600 ${isActive ? 'font-semibold text-purple-600' : ''}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/frontend/payment"
            className={({ isActive }) =>
              `text-gray-600 hover:text-purple-600 ${isActive ? 'font-semibold text-purple-600' : ''}`
            }
          >
            Payment
          </NavLink>
          <NavLink
            to="/frontend/checkout"
            className={({ isActive }) =>
              `text-gray-600 hover:text-purple-600 ${isActive ? 'font-semibold text-purple-600' : ''}`
            }
          >
            Checkout
          </NavLink>
          <NavLink
            to="/frontend/help-center"
            className={({ isActive }) =>
              `text-gray-600 hover:text-purple-600 ${isActive ? 'font-semibold text-purple-600' : ''}`
            }
          >
            Help Center
          </NavLink>
          <NavLink
            to="/login"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;