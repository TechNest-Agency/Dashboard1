/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  ChevronDown,
  Home,
  Tag,
  CreditCard,
  ShoppingBag,
  LifeBuoy,
  Shield,
  UserCheck,
  Lock,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isFrontPagesOpen, setIsFrontPagesOpen] = useState(false);
  const [isRolesPermissionsOpen, setIsRolesPermissionsOpen] = useState(false);

  const sidebarItems = [
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/dashboard/analytics",
      active: true,
    },
    { icon: Users, label: "CRM", path: "/dashboard/crm" },
    { icon: ShoppingCart, label: "Ecommerce", path: "/dashboard/ecommerce" },
    { icon: GraduationCap, label: "Academy", path: "/dashboard/academy" },
    { icon: Truck, label: "Logistics", path: "/dashboard/logistics" },
  ];

  const frontPagesItems = [
    { icon: ShoppingCart, label: "Ecommerce", path: "/front-pages/ecommerce" },
    { icon: GraduationCap, label: "Academy", path: "/front-pages/academy" },
    { icon: Truck, label: "Logistics", path: "/front-pages/logistics" },
    { icon: Mail, label: "Email", path: "dashboard/app/email" },
    { icon: MessageCircle, label: "Chat", path: "/apps/chat" },
    { icon: Calendar, label: "Calendar", path: "/apps/calendar" },
    { icon: Trello, label: "Kanban", path: "/apps/kanban" },
  ];

  const roleAndPermission = [
    { icon: UserCheck, label: "Roles", path: "/dashboard/roles" },
    { icon: Lock, label: "Permissions", path: "/dashboard/permissions" },
  ];

  const additionalItems = [
    { icon: Mail, label: "Email", path: "/dashboard/app/email" },
    { icon: MessageCircle, label: "Chat", path: "/dashboard/chat" },
    { icon: Calendar, label: "Calendar", path: "/dashboard/calendar" },
    { icon: Trello, label: "Kanban", path: "/dashboard/kanban" },
  ];

  const getNavLinkClasses = ({ isActive }) => {
    return `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
      isActive
        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Logo - Unchanged */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">TechNest</span>
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dashboards
            </span>
            <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1">
              5
            </span>
          </div>
          <div className="space-y-1">
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
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apps & Pages
            </span>
          </div>

          {/* Front Pages dropdown */}
          <div className="space-y-1">
            <div
              className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
              onClick={() => setIsFrontPagesOpen(!isFrontPagesOpen)}
            >
              <Globe size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-800">
                Front Pages
              </span>
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform duration-300 ${
                  isFrontPagesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isFrontPagesOpen && (
              <div className="pl-8 space-y-1">
                {frontPagesItems.map((item, index) => (
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
            )}
          </div>

          {/* Roles & Permissions dropdown */}
          <div className="space-y-1 mt-2">
            <div
              className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
              onClick={() => setIsRolesPermissionsOpen(!isRolesPermissionsOpen)}
            >
              <Shield size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-800">
                Roles & Permissions
              </span>
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform duration-300 ${
                  isRolesPermissionsOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isRolesPermissionsOpen && (
              <div className="pl-8 space-y-1">
                {roleAndPermission.map((item, index) => (
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
            )}
          </div>

          {/* Additional Items */}
          <div className="space-y-1 mt-4">
            {additionalItems?.map((item, index) => (
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
        </div>

        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default Sidebar;