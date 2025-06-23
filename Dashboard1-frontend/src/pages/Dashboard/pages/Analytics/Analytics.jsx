import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Analytics = () => {
  // Sample data for charts
  const earningsData = [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 150 },
    { month: "Mar", value: 300 },
    { month: "Apr", value: 250 },
    { month: "May", value: 400 },
    { month: "Jun", value: 350 },
  ];

  const dailySalesData = [
    { day: "Mon", sales: 25000 },
    { day: "Tue", sales: 28000 },
    { day: "Wed", sales: 24000 },
    { day: "Thu", sales: 30000 },
    { day: "Fri", sales: 32000 },
    { day: "Sat", sales: 28000 },
    { day: "Sun", sales: 26000 },
  ];

  const totalEarningsData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 70 },
    { month: "Apr", value: 90 },
    { month: "May", value: 85 },
    { month: "Jun", value: 75 },
  ];

  const countries = [
    {
      name: "USA",
      flag: "🇺🇸",
      percentage: "28.55%",
      value: "+20.9%",
      color: "text-green-500",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      percentage: "24.41%",
      value: "-8.2%",
      color: "text-red-500",
    },
    {
      name: "Great Britain",
      flag: "🇬🇧",
      percentage: "14.86%",
      value: "+12.6%",
      color: "text-green-500",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      percentage: "9.45%",
      value: "+16.2%",
      color: "text-green-500",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      percentage: "7.92%",
      value: "+10.3%",
      color: "text-green-500",
    },
    {
      name: "France",
      flag: "🇫🇷",
      percentage: "5.12%",
      value: "+8.1%",
      color: "text-green-500",
    },
    {
      name: "Other",
      percentage: "9.69%",
      value: "+14.8%",
      color: "text-green-500",
    },
  ];

  const sources = [
    {
      name: "Direct Source",
      visits: 1240,
      percentage: "+4.8%",
      color: "text-green-500",
    },
    {
      name: "Social Network",
      visits: 1040,
      percentage: "+21.8%",
      color: "text-green-500",
    },
    {
      name: "Email Newsletter",
      visits: 950,
      percentage: "+18.2%",
      color: "text-green-500",
    },
    {
      name: "Referrals",
      visits: 750,
      percentage: "-3.1%",
      color: "text-red-500",
    },
    { name: "ADVT", visits: 540, percentage: "+1.4%", color: "text-green-500" },
    {
      name: "Other",
      visits: 470,
      percentage: "+12.6%",
      color: "text-green-500",
    },
  ];

  const projects = [
    {
      name: "Hoffman Website",
      type: "Laravel Project",
      client: "Catalyzt",
      team: ["👤", "👤"],
      progress: 60,
      status: "PROGRESS",
    },
    {
      name: "Blockchain Website",
      type: "React Project",
      client: "Abstron",
      team: ["👤", "👤"],
      progress: 30,
      status: "PROGRESS",
    },
    {
      name: "Ecommerce Web App",
      type: "Vue Project",
      client: "Netconic",
      team: ["👤", "👤", "👤"],
      progress: 51,
      status: "PROGRESS",
    },
    {
      name: "Banking Dashboard",
      type: "Laravel Project",
      client: "Mayonth",
      team: ["👤", "👤"],
      progress: 49,
      status: "PROGRESS",
    },
    {
      name: "Dashboard Design",
      type: "Figma Project",
      client: "Acme Inc",
      team: ["👤", "👤"],
      progress: 62,
      status: "PROGRESS",
    },
  ];

  const campaigns = [
    {
      type: "Emails",
      sent: "12,346",
      rate: "+3.1%",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      type: "Opened",
      sent: "8,734",
      rate: "+2.1%",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      type: "Clicked",
      sent: "967",
      rate: "+4.9%",
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      type: "Subscribe",
      sent: "345",
      rate: "+8.5%",
      color: "text-pink-500",
      bg: "bg-pink-100",
    },
    {
      type: "Complaints",
      sent: "10",
      rate: "+1.4%",
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      type: "Unsubscribe",
      sent: "86",
      rate: "+0.8%",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Website Analytics */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 sm:p-6 text-white md:col-span-2 xl:col-span-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-medium opacity-90">
                  Website Analytics
                </h3>
                <p className="text-xs sm:text-sm opacity-75">
                  Bounce Rate & Growth
                </p>
              </div>
              <button className="text-white opacity-75 hover:opacity-100">
                ⋯
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold">62.2%</div>
                <div className="text-xs sm:text-sm opacity-75">Growth</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:space-x-6 gap-2 sm:gap-0 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <span>Bounce</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-pink-300"></div>
                <span>Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <span>Referral</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
                <span>Campaigns</span>
              </div>
            </div>
          </div>

          {/* Average Daily Sales */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-600 text-xs sm:text-sm">
                  Average Daily Sales
                </h3>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                $28,450
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                15% increase
              </div>
            </div>

            <div className="h-12 sm:h-16">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailySalesData}>
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-600 text-xs sm:text-sm">
                  Order Status
                </h3>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                $42.5k
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Completed</span>
                <span className="text-gray-900">62.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "62.2%" }}
                ></div>
              </div>

              <div className="flex justify-between text-xs sm:text-sm mt-3">
                <span className="text-gray-600">Pending</span>
                <span className="text-gray-900">25.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-orange-400 h-1.5 rounded-full"
                  style={{ width: "25.5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Earning Reports */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                  Earning Reports
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Weekly Earnings Overview
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                $468
              </div>
              <div className="text-green-500 text-xs sm:text-sm">+4.2%</div>
            </div>

            <div className="h-24 sm:h-32 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningsData}>
                  <Bar dataKey="value" fill="#8B5CF6" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">
                  $545.69
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">Earning</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">
                  $256.34
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">Expense</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">
                  $74.19
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">Expense</div>
              </div>
            </div>
          </div>

          {/* Support Tracker */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                  Support Tracker
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">Last 7 Days</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                    className="sm:hidden"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${85 * 1.6} ${(100 - 85) * 1.6}`}
                    strokeLinecap="round"
                    className="sm:hidden"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    fill="none"
                    className="hidden sm:block"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#8B5CF6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${85 * 2.2} ${(100 - 85) * 2.2}`}
                    strokeLinecap="round"
                    className="hidden sm:block"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    85%
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                164
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Total Tickets
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    New Tickets
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium">142</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Open Tickets
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium">28</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Response Time
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium">1 Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Sales by Countries */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                Sales by Countries
              </h3>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="space-y-3">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-base sm:text-lg">{country.flag}</span>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                        {country.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {country.percentage}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium ${country.color}`}
                  >
                    {country.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Earning */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                Total Earning
              </h3>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                87%
              </div>
              <div className="text-green-500 text-xs sm:text-sm">+2.6%</div>
            </div>

            <div className="h-24 sm:h-32 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={totalEarningsData}>
                  <Bar dataKey="value" fill="#8B5CF6" radius={2} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Revenue</span>
                <span className="text-green-500">+$126</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Sales</span>
                <span className="text-blue-500">-$98</span>
              </div>
            </div>
          </div>

          {/* Monthly Campaign State */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm md:col-span-2 xl:col-span-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                Monthly Campaign State
              </h3>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="space-y-3">
              {campaigns.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${campaign.bg} flex items-center justify-center`}
                    >
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${campaign.color.replace(
                          "text-",
                          "bg-"
                        )}`}
                      ></div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                        {campaign.type}
                      </div>
                      <div className="text-xs text-gray-500">
                        {campaign.sent}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium ${campaign.color}`}
                  >
                    {campaign.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {/* Source Visits */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                Source Visits
              </h3>
              <button className="text-gray-400 hover:text-gray-600">⋯</button>
            </div>

            <div className="space-y-4">
              {sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-6 sm:h-8 bg-blue-500 rounded"></div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                        {source.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {source.visits} Visits
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium ${source.color}`}
                  >
                    {source.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project List */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 space-y-3 sm:space-y-0">
              <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                Project List
              </h3>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="px-3 py-1 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                />
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 hover:bg-gray-50 rounded-lg space-y-3 sm:space-y-0"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 flex-shrink-0"
                    />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-xs sm:text-sm font-bold">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                        {project.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {project.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end sm:space-x-4 pl-9 sm:pl-0">
                    <div className="text-xs sm:text-sm text-gray-600">
                      {project.client}
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="flex -space-x-1">
                        {project.team.map((member, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-500 h-1.5 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 w-8 text-right">
                          {project.progress}%
                        </div>
                      </div>
                      <div className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded whitespace-nowrap">
                        {project.status}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋯
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-blue-500 text-white flex items-center justify-center text-xs sm:text-sm">
                  1
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded hover:bg-gray-100 flex items-center justify-center text-xs sm:text-sm">
                  2
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded hover:bg-gray-100 flex items-center justify-center text-xs sm:text-sm">
                  3
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 rounded hover:bg-gray-100 flex items-center justify-center text-xs sm:text-sm">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
