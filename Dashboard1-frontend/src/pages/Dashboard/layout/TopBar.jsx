import React from "react";
import { Search, Bell, Grid3X3, Settings } from "lucide-react";

const TopBar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search ⌘K"
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Settings size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Grid3X3 size={20} />
        </button>
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
