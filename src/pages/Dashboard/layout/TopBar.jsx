import React from "react";

const Topbar = () => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Welcome, Admin</span>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
