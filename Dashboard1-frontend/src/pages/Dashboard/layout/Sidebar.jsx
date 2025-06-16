/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Users,
  ShoppingCart,
  GraduationCap,
  Truck,
  Globe,
  Mail,
  MessageCircle,
  Calendar,
  Trello,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const sidebarItems = [
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/dashboard/analytics",
      active: true,
    },
    { icon: Users, label: "CRM", path: "/dashboard/crm" },
    { icon: ShoppingCart, label: "Ecommerce", path: "/dashboard//ecommerce" },
    { icon: GraduationCap, label: "Academy", path: "/dashboard//academy" },
    { icon: Truck, label: "Logistics", path: "/dashboard//logistics" },
  ];

  const frontPagesItems = [
    { icon: ShoppingCart, label: "Ecommerce", path: "/front-pages/ecommerce" },
    { icon: GraduationCap, label: "Academy", path: "/front-pages/academy" },
    { icon: Truck, label: "Logistics", path: "/front-pages/logistics" },
    { icon: Mail, label: "Email", path: "/apps/email" },
    { icon: MessageCircle, label: "Chat", path: "/apps/chat" },
    { icon: Calendar, label: "Calendar", path: "/apps/calendar" },
    { icon: Trello, label: "Kanban", path: "/apps/kanban" },
  ];

  // Common styling for navigation items
  const getNavLinkClasses = ({ isActive }) => {
    return `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
      isActive
        ? "bg-purple-100 text-purple-600"
        : "text-gray-600 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">TechNest</span>
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dashboards
            </span>
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              5
            </span>
          </div>
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={getNavLinkClasses}
              onClick={() => setActiveItem && setActiveItem(item.label)}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apps & Pages
            </span>
          </div>

          {/* Front Pages - This could be a dropdown or expandable section */}
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100">
            <Globe size={20} />
            <span className="text-sm font-medium">Front Pages</span>
            <ChevronRight size={16} className="ml-auto" />
          </div>

          {frontPagesItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={getNavLinkClasses}
              onClick={() => setActiveItem && setActiveItem(item.label)}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
              {item.label === "Ecommerce" ||
              item.label === "Academy" ||
              item.label === "Logistics" ? (
                <ChevronRight size={16} className="ml-auto" />
              ) : null}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
