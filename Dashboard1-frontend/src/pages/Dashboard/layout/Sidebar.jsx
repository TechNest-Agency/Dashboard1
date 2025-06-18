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
  ChevronDown,
  CreditCard,
  ShoppingBag,
  LifeBuoy,
  LayoutDashboard,
  BadgeDollarSign,
  UserCheck,
  Lock,
  Shield,
  FileText,
  User,
  Settings,
  DollarSign,
  HelpCircle,
  List,
  Eye,
  Package,
  Home,
  Handshake,
  MessageSquare,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isFrontPagesOpen, setIsFrontPagesOpen] = useState(false);
  const [isRolesPermissionsOpen, setIsRolesPermissionsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isWizardExamplesOpen, setIsWizardExamplesOpen] = useState(false);
  const [isDialogExamplesOpen, setIsDialogExamplesOpen] = useState(false);

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

  const userItems = [
    {
      icon: List,
      label: "List",
      path: "/dashboard/user/list",
    },
    {
      icon: Eye,
      label: "View",
      path: "/dashboard/user/view",
    },
  ];

  const pagesItems = [
    {
      icon: User,
      label: "User Profile",
      path: "/dashboard/pages/user-profile",
    },
    {
      icon: Settings,
      label: "Account Settings",
      path: "/dashboard/pages/account-settings",
    },
    { icon: DollarSign, label: "Pricing", path: "/dashboard/pages/pricing" },
    { icon: HelpCircle, label: "FAQ", path: "/dashboard/pages/faq" },
  ];

  const frontPagesItems = [
    { icon: LayoutDashboard, label: "Landing", path: "/frontend/landing" },
    { icon: BadgeDollarSign, label: "Pricing", path: "/frontend/pricing" },
    { icon: CreditCard, label: "Payment", path: "/frontend/payment" },
    { icon: ShoppingBag, label: "Checkout", path: "/frontend/checkout" },
    { icon: LifeBuoy, label: "Help Center", path: "/frontend/help-center" },
  ];

  const roleAndPermission = [
    { icon: UserCheck, label: "Roles", path: "/dashboard/roles" },
    { icon: Lock, label: "Permissions", path: "/dashboard/permissions" },
  ];

  // New Wizard Examples - Updated options based on your image
  const wizardExamples = [
    {
      icon: ShoppingBag,
      label: "Checkout",
      path: "/dashboard/wizard/checkout",
    },
    {
      icon: Home,
      label: "Property Listing",
      path: "/dashboard/wizard/property-listing",
    },
    {
      icon: Handshake,
      label: "Create Deal",
      path: "/dashboard/wizard/create-deal",
    },
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
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <NavLink to="/" className="flex items-center space-x-2">
          <img
                src="https://i.ibb.co/q3D7Z0Yp/novaDash.png"
                alt="TechNest Logo"
                className="w-[160px] "
              />
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
        {/* Dashboards Section */}
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

        {/* Apps & Pages Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apps & Pages
            </span>
          </div>

          {/* User dropdown */}
          <div className="space-y-1">
            <div
              className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
              onClick={() => setIsUserOpen(!isUserOpen)}
            >
              <User size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-800">User</span>
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform duration-300 ${
                  isUserOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isUserOpen && (
              <div className="pl-8 space-y-1">
                {userItems.map((item, index) => (
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

          {/* Pages dropdown */}
          <div className="space-y-1 mt-2">
            <div
              className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
              onClick={() => setIsPagesOpen(!isPagesOpen)}
            >
              <FileText size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-800">Pages</span>
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform duration-300 ${
                  isPagesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isPagesOpen && (
              <div className="pl-8 space-y-1">
                {pagesItems.map((item, index) => (
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

          {/* Front Pages dropdown */}
          <div className="space-y-1 mt-2">
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

          {/* Wizard Examples dropdown */}
          <div className="space-y-1 mt-2">
            <div
              className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
              onClick={() => setIsWizardExamplesOpen(!isWizardExamplesOpen)}
            >
              <Settings size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-800">
                Wizard Examples
              </span>
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform duration-300 ${
                  isWizardExamplesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isWizardExamplesOpen && (
              <div className="pl-8 space-y-1">
                {wizardExamples.map((item, index) => (
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