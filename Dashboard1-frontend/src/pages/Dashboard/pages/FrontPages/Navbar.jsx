import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50  backdrop-blur-sm'>
      <header className="bg-purple-100/80 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/frontend/landing" className="flex items-center space-x-2">
              <img 
                src="https://i.ibb.co/r2s0r45Z/technes-Logo.png" 
                alt="TechNest Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold text-gray-800">TechNest</span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/frontend/landing"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/frontend/pricing"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/frontend/team"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`
                }
              >
                Team
              </NavLink>
              <NavLink
                to="/frontend/faq"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/frontend/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`
                }
              >
                Contact us
              </NavLink>
              
              {/* Pages Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${pagesOpen ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  Pages
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${pagesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {pagesOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-10">
                    <NavLink
                      to="/frontend/payment"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Payment
                    </NavLink>
                    <NavLink
                      to="/frontend/checkout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Checkout
                    </NavLink>
                    <NavLink
                      to="/frontend/help-center"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Help Center
                    </NavLink>
                    <NavLink
                      to="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Admin
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:block">
              <NavLink
                to="/login"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Login
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-3 space-y-1">
              <NavLink
                to="/frontend/landing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/frontend/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Features
              </NavLink>
              <NavLink
                to="/frontend/team"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Team
              </NavLink>
              <NavLink
                to="/frontend/faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </NavLink>
              <NavLink
                to="/frontend/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </NavLink>
              
              {/* Mobile Pages Dropdown */}
              <div className="px-3 pt-2 pb-3">
                <button 
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                >
                  Pages
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${pagesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {pagesOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <NavLink
                      to="/frontend/payment"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Payment
                    </NavLink>
                    <NavLink
                      to="/frontend/checkout"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Checkout
                    </NavLink>
                    <NavLink
                      to="/frontend/help-center"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Help Center
                    </NavLink>
                    <NavLink
                      to="/admin"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Admin
                    </NavLink>
                  </div>
                )}
              </div>
              
              {/* Login Button - Mobile */}
              <NavLink
                to="/login"
                className="block mx-3 px-4 py-2 rounded-md text-base font-medium text-center text-white bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;