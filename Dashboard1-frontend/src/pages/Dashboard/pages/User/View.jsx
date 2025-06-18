import { useState } from "react";
import {
  User,
  Bell,
  CreditCard,
  Settings,
  Shield,
  Users,
  Trash2,
  MoreHorizontal,
  Plus,
  Menu,
  X,
} from "lucide-react";

import {
  projects,
  activities,
  invoices,
  paymentMethods,
  connectedServices,
  socialAccounts,
} from "./mockData";

import {
  renderDashboard,
  renderPasswordSettings,
  renderBillingSettings,
  renderNotifications,
  renderConnections,
} from "./ViewComponent";

const View = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [currentView, setCurrentView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { name: "Account", icon: User },
    { name: "Security", icon: Shield },
    { name: "Billing & Plan", icon: CreditCard },
    { name: "Notifications", icon: Bell },
    { name: "Connections", icon: Users },
  ];

  const renderContent = () => {
    const componentProps = {
      projects,
      activities,
      invoices,
      paymentMethods,
      connectedServices,
      socialAccounts,
      MoreHorizontal,
      Plus,
      Settings,
      Trash2,
    };

    switch (currentView) {
      case "password":
        return renderPasswordSettings();
      case "billing":
        return renderBillingSettings(componentProps);
      case "notifications":
        return renderNotifications();
      case "connections":
        return renderConnections(componentProps);
      default:
        return renderDashboard(componentProps);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="font-semibold text-lg">Dashboard</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block w-full lg:w-72 bg-white shadow-sm border-r min-h-screen transition-all duration-300`}
        >
          <div className="p-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">SK</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Salina Kyle</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Admin
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1.23k</div>
                <div className="text-sm text-gray-500">Task Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">568</div>
                <div className="text-sm text-gray-500">Project Done</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-gray-900">Details</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Username:</span> Salina Kyle
                </div>
                <div>
                  <span className="text-gray-500">Billing Email:</span>{" "}
                  example@email.com
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>{" "}
                  <span className="text-green-600">Active</span>
                </div>
                <div>
                  <span className="text-gray-500">Role:</span> Admin
                </div>
                <div>
                  <span className="text-gray-500">Tax ID:</span> Tax-8894
                </div>
                <div>
                  <span className="text-gray-500">Contact:</span> (609)
                  933-44-22
                </div>
                <div>
                  <span className="text-gray-500">Language:</span> English
                </div>
                <div>
                  <span className="text-gray-500">Country:</span> USA
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mb-8">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Edit
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                Suspend
              </button>
            </div>

            {/* Plan Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$99</div>
                <div className="text-sm text-gray-500">/month</div>
                <div className="text-xs text-gray-500 mt-2">25 of 30 Days</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white border-b px-4 py-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => {
                    setActiveTab(tab.name);
                    setCurrentView(
                      tab.name
                        .toLowerCase()
                        .replace(" & plan", "")
                        .replace(" ", "")
                    );
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.name
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
