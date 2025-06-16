import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Eye,
  MoreHorizontal,
  Calendar,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react";

const CRM = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Orders */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm font-medium">Orders</h3>
              <div className="text-xs text-gray-400">Last 7 days</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">124k</div>
            <div className="flex items-center text-green-500 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </div>
          </div>

          {/* Sales */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm font-medium">Sales</h3>
              <div className="text-xs text-gray-400">Last 7 days</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">175k</div>
            <div className="flex items-center text-red-500 text-sm">
              <TrendingDown className="w-4 h-4 mr-1" />
              -8.1%
            </div>
          </div>

          {/* Total Profit */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm font-medium">
                Total Profit
              </h3>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1.2M</div>
            <div className="flex items-center text-green-500 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +11.01%
            </div>
          </div>

          {/* Total Sales */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$4,673</div>
            <div className="flex items-center text-green-500 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +1.01%
            </div>
          </div>

          {/* Revenue Growth */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm font-medium">
                Revenue Growth
              </h3>
              <div className="text-xs text-gray-400">Monthly Report</div>
            </div>
            <div className="h-16 flex items-end justify-between space-x-1">
              {[40, 60, 30, 70, 45, 80, 35].map((height, i) => (
                <div
                  key={i}
                  className="bg-green-400 rounded-sm flex-1"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Earning Reports */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Earning Reports
              </h3>
              <div className="text-xs text-gray-400">
                Yearly Earning Overview
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                Trending
              </button>
              <button className="px-4 py-2 text-gray-500 text-sm">Sales</button>
              <button className="px-4 py-2 text-gray-500 text-sm">
                Profit
              </button>
              <button className="px-4 py-2 text-gray-500 text-sm">
                Expense
              </button>
            </div>

            <div className="h-48 flex items-end justify-between space-x-2">
              {[20, 40, 80, 35, 60, 25, 45].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full rounded-t ${
                      i === 2 ? "bg-blue-500" : "bg-gray-200"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-xs text-gray-400 mt-2">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales 3D Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Sales</h3>
            </div>

            <div className="flex items-center justify-center h-48">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl transform rotate-12 shadow-lg"></div>
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-300 to-teal-400 rounded-2xl transform -rotate-6 shadow-md"></div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Sales</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Visits</span>
              </div>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Active Projects
              </h3>
              <div className="text-xs text-gray-400">Average 72% Completed</div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Technology", progress: 78, color: "red" },
                { name: "Music", progress: 18, color: "blue" },
                { name: "Travel", progress: 63, color: "green" },
                { name: "Rent", progress: 8, color: "teal" },
                { name: "Smartphone", progress: 49, color: "purple" },
                { name: "Business", progress: 72, color: "yellow" },
              ].map((project, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 bg-${project.color}-500 rounded-full`}
                    ></div>
                    <span className="text-sm text-gray-700">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 bg-${project.color}-500 rounded-full`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales by Countries */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Sales by Countries
              </h3>
              <div className="text-xs text-gray-400">
                Monthly Sales Overview
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  country: "United States",
                  flag: "🇺🇸",
                  sales: "$8,656k",
                  change: "+25.6%",
                  positive: true,
                },
                {
                  country: "Brazil",
                  flag: "🇧🇷",
                  sales: "$2,415k",
                  change: "+16.2%",
                  positive: true,
                },
                {
                  country: "India",
                  flag: "🇮🇳",
                  sales: "$865k",
                  change: "-11.9%",
                  positive: false,
                },
                {
                  country: "Australia",
                  flag: "🇦🇺",
                  sales: "$745k",
                  change: "+22.5%",
                  positive: true,
                },
                {
                  country: "France",
                  flag: "🇫🇷",
                  sales: "$45k",
                  change: "+16.2%",
                  positive: true,
                },
                {
                  country: "China",
                  flag: "🇨🇳",
                  sales: "$12k",
                  change: "+14.8%",
                  positive: true,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.flag}</span>
                    <span className="text-sm text-gray-700">
                      {item.country}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">
                      {item.sales}
                    </span>
                    <span
                      className={`text-xs ${
                        item.positive ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Status */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Status
              </h3>
            </div>

            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-gray-900">$4,3742</div>
              <div className="text-green-500 text-sm">+10.2%</div>
            </div>

            <div className="h-32 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <path
                  d="M10,40 Q30,10 50,25 T90,20"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm text-gray-500">Donates</div>
                <div className="text-lg font-semibold text-gray-900">
                  $756,35
                </div>
                <div className="text-xs text-green-500">+18.4%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Podcasts</div>
                <div className="text-lg font-semibold text-gray-900">
                  $1,908.46
                </div>
                <div className="text-xs text-green-500">+18.4%</div>
              </div>
            </div>
          </div>

          {/* Last Transaction & Activity Timeline */}
          <div className="space-y-6">
            {/* Last Transaction */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Last Transaction
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    card: "VISA",
                    date: "06/02",
                    amount: "+$2,145",
                    status: "pending",
                    type: "Refund",
                  },
                  {
                    card: "Mastercard",
                    date: "25/11",
                    amount: "+$1,234",
                    status: "completed",
                    type: "Order #24",
                  },
                  {
                    card: "VISA",
                    date: "19/09",
                    amount: "-$842",
                    status: "rejected",
                    type: "Buy",
                  },
                ].map((transaction, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-xs text-white font-medium">
                          VISA
                        </span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-900">
                          {transaction.type}
                        </div>
                        <div className="text-xs text-gray-500">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${
                          transaction.amount.includes("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.amount}
                      </div>
                      <div
                        className={`text-xs px-2 py-1 rounded ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : transaction.status === "pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Activity Timeline
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Calendar,
                    iconColor: "text-red-500",
                    title: "12 Invoices have been paid",
                    desc: "Invoices have been paid to the company",
                    time: "12 min ago",
                  },
                  {
                    icon: User,
                    iconColor: "text-green-500",
                    title: "Client Meeting",
                    desc: "Project meeting with john @10:15am",
                    time: "45 min ago",
                    avatars: true,
                  },
                  {
                    icon: Briefcase,
                    iconColor: "text-blue-500",
                    title: "Create a new project for client",
                    desc: "Add files to new design folder",
                    time: "2 days ago",
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.iconColor === "text-red-500"
                          ? "bg-red-100"
                          : activity.iconColor === "text-green-500"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <activity.icon
                        className={`w-4 h-4 ${activity.iconColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">
                        {activity.desc}
                      </div>
                      {activity.avatars && (
                        <div className="flex -space-x-1 mb-1">
                          <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-gray-600">+3</span>
                          </div>
                        </div>
                      )}
                      <div className="text-xs text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
