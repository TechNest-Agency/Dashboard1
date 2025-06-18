import React from "react";
import { Search, Bell, Grid3X3, Settings, Menu, X } from "lucide-react";

const TopBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6">
      {/* Left Section - Menu Button and Search */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Mobile Menu Button - Only visible on small screens */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <X size={24} className="shrink-0" />
          ) : (
            <Menu size={24} className="shrink-0" />
          )}
        </button>

        {/* Search Bar - Adapts to screen size */}
        <div className="relative max-w-xs w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition duration-150"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none md:hidden">
            <kbd className="inline-flex items-center px-1.5 py-0.5 border border-gray-200 rounded text-xs font-sans font-medium text-gray-400 bg-white">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Section - Icons and User */}
      <div className="flex items-center space-x-1 sm:space-x-3">
        {/* Settings - Hidden on mobile */}
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors hidden sm:block">
          <Settings size={20} />
        </button>

        {/* Grid - Hidden on mobile */}
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors hidden sm:block">
          <Grid3X3 size={20} />
        </button>

        {/* Notifications - Always visible */}
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* User Avatar - Adapts to screen size */}
        <div className="ml-2 sm:ml-4 flex items-center">
          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          {/* User name - Hidden on mobile */}
          <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;