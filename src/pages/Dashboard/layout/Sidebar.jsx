import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "py-2 px-4 rounded hover:text-yellow-400 transition-colors duration-200";

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-gray-700` : linkClass
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/saved"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-gray-700` : linkClass
          }
        >
          Saved
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-gray-700` : linkClass
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
