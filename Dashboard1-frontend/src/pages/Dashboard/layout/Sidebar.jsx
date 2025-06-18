/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../../assets/images/logo/Nova.jpg";

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
  ArrowRight,
  List,
  Eye,
  Package,
  Home,
  Handshake,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem, isSidebarOpen, setIsSidebarOpen }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isFrontPagesOpen, setIsFrontPagesOpen] = useState(false);
  const [isRolesPermissionsOpen, setIsRolesPermissionsOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isWizardExamplesOpen, setIsWizardExamplesOpen] = useState(false);
  const [isTablesOpen, setIsTablesOpen] = useState(false);

  const sidebarItems = [
    { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics", active: true },
    { icon: Users, label: "CRM", path: "/dashboard/crm" },
    { icon: ShoppingCart, label: "Ecommerce", path: "/dashboard/ecommerce" },
    { icon: GraduationCap, label: "Academy", path: "/dashboard/academy" },
    { icon: Truck, label: "Logistics", path: "/dashboard/logistics" },
  ];

  const userItems = [
    { icon: List, label: "List", path: "/dashboard/user/list" },
    { icon: Eye, label: "View", path: "/dashboard/user/view" },
  ];

  const pagesItems = [
    { icon: User, label: "User Profile", path: "/dashboard/pages/user-profile" },
    { icon: Settings, label: "Account Settings", path: "/dashboard/pages/account-settings" },
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

  const wizardExamples = [
    { icon: Home, label: "Property Listing", path: "/dashboard/wizard/property-listing" },
    { icon: Handshake, label: "Create Deal", path: "/dashboard/wizard/create-deal" },
  ];

  const tablesItems = [
    { icon: Package, label: "Simple Table", path: "/dashboard/simple-table" },
    { icon: Package, label: "Data Table", path: "/dashboard/data-table" },
  ];

  const invoiceItems = [
    { icon: FileText, label: "Preview", path: "/dashboard/invoice/preview" },
    { icon: FileText, label: "List", path: "/dashboard/invoice/list" },
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
    <>
      {/* Overlay for small devices */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-45 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col fixed top-0 left-0 z-50 transition-transform duration-300 sm:sticky sm:translate-x-0 h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-[15px] border-b border-gray-200 flex-shrink-0 sm:block hidden">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/q3D7Z0Yp/novaDash.png"
              alt="Nova Logo"
              className="w-[140px]"
            />
          </NavLink>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
          {/* Dashboards */}
          <div className="px-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dashboards
              </span>
              <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1">5</span>
            </div>
            <div className="space-y-1">
              {sidebarItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={getNavLinkClasses}
                  onClick={() => {
                    setActiveItem && setActiveItem(item.label);
                    setIsSidebarOpen(false);
                  }}
                >
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Apps & Pages */}
          <div className="px-4 space-y-1">
            {/* Form Validation */}
            <NavLink
              to="/dashboard/form-validation"
              className={getNavLinkClasses}
              onClick={() => {
                setActiveItem && setActiveItem("Form Validation");
                setIsSidebarOpen(false);
              }}
            >
              <FileText size={20} />
              <span className="text-sm font-medium">Form Validation</span>
            </NavLink>

            {/* Tables */}
            <Dropdown
              label="Tables"
              icon={Package}
              isOpen={isTablesOpen}
              toggle={() => setIsTablesOpen(!isTablesOpen)}
              items={tablesItems}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* User */}
            <Dropdown
              label="User"
              icon={User}
              isOpen={isUserOpen}
              toggle={() => setIsUserOpen(!isUserOpen)}
              items={userItems}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Pages */}
            <Dropdown
              label="Pages"
              icon={FileText}
              isOpen={isPagesOpen}
              toggle={() => setIsPagesOpen(!isPagesOpen)}
              items={pagesItems}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Front Pages */}
            <Dropdown
              label="Front Pages"
              icon={Globe}
              isOpen={isFrontPagesOpen}
              toggle={() => setIsFrontPagesOpen(!isFrontPagesOpen)}
              items={frontPagesItems}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Wizard Examples */}
            <Dropdown
              label="Wizard Examples"
              icon={Settings}
              isOpen={isWizardExamplesOpen}
              toggle={() => setIsWizardExamplesOpen(!isWizardExamplesOpen)}
              items={wizardExamples}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Roles & Permissions */}
            <Dropdown
              label="Roles & Permissions"
              icon={Shield}
              isOpen={isRolesPermissionsOpen}
              toggle={() => setIsRolesPermissionsOpen(!isRolesPermissionsOpen)}
              items={roleAndPermission}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Invoice */}
            <Dropdown
              label="Invoice"
              icon={ArrowRight}
              isOpen={isInvoiceOpen}
              toggle={() => setIsInvoiceOpen(!isInvoiceOpen)}
              items={invoiceItems}
              getNavLinkClasses={getNavLinkClasses}
              setActiveItem={setActiveItem}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Additional */}
            <div className="space-y-1 mt-4">
              {additionalItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={getNavLinkClasses}
                  onClick={() => {
                    setActiveItem && setActiveItem(item.label);
                    setIsSidebarOpen(false);
                  }}
                >
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable dropdown component
const Dropdown = ({ label, icon: Icon, isOpen, toggle, items, getNavLinkClasses, setActiveItem, setIsSidebarOpen }) => (
  <div className="space-y-1 mt-2">
    <div
      className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r from-purple-100 to-blue-100 transition-all duration-300"
      onClick={toggle}
    >
      <Icon size={20} className="text-purple-600" />
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <ChevronDown
        size={16}
        className={`ml-auto transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
    {isOpen && (
      <div className="pl-8 space-y-1">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={getNavLinkClasses}
            onClick={() => {
              setActiveItem && setActiveItem(item.label);
              setIsSidebarOpen(false);
            }}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    )}
  </div>
);

export default Sidebar;
