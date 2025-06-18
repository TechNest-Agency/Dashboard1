import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill(); // Polyfill for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const sections = ['features', 'testimonials', 'team', 'contact', 'faq'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log('Scrolling to:', id, element); // Debug
    if (element) {
      const offset = 80; // Adjust for navbar height (~64px + padding)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    } else {
      console.warn(`Element with id ${id} not found`); // Debug
    }
    setIsOpen(false);
  };

  // Handle section scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/frontend/landing' && location.hash) {
      const id = location.hash.replace('#', '');
      if (sections.includes(id)) {
        setTimeout(() => {
          scrollToSection(id);
        }, 100); // Small delay to ensure rendering
      }
    }
  }, [location]);

  // Setup Intersection Observer
  useEffect(() => {
    const timer = setTimeout(() => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      console.log('Sections found:', sectionElements); // Debug
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Intersecting:', entry.target.id); // Debug
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: [0.2, 0.8], rootMargin: '-80px 0px 0px 0px' }
      );

      sectionElements.forEach((section) => {
        if (section) {
          observer.observe(section);
        } else {
          console.warn('Section not found:', section); // Debug
        }
      });

      return () => {
        sectionElements.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    }, 500); // Wait 500ms for rendering

    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (id) => {
    if (location.pathname !== '/frontend/landing') {
      navigate(`/frontend/landing#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="sticky top-0 z-50 p-4 backdrop-blur-sm">
      <header className="bg-purple-200/50 backdrop-blur-sm rounded-2xl border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/frontend/landing" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/q3D7Z0Yp/novaDash.png"
                alt="TechNest Logo"
                className="w-[140px] "
              />
              {/* <span className="text-xl font-semibold text-gray-800">TechNest</span> */}
            </NavLink>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/frontend/landing"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive && !activeSection ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`
                }
              >
                Home
              </NavLink>
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <div className="relative">
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    pagesOpen ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Pages
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${pagesOpen ? 'transform rotate-180' : ''}`}
                  />
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
                      to="/frontend/pricing"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Pricing
                    </NavLink>
                    <NavLink
                      to="/frontend/help-center"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Help Center
                    </NavLink>
                    <NavLink
                      to="/dashboard/roles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      onClick={() => setPagesOpen(false)}
                    >
                      Admin
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:block">
              <NavLink
                to="/login"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Login
              </NavLink>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden pb-3 space-y-1">
              <NavLink
                to="/frontend/landing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <div className="px-3 pt-2 pb-3">
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                >
                  Pages
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${pagesOpen ? 'transform rotate-180' : ''}`}
                  />
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
                      to="/frontend/pricing"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsOpen(false);
                        setPagesOpen(false);
                      }}
                    >
                      Pricing
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
                      to="/dashboard/roles"
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