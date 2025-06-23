import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingBag,
  CreditCard,
  Repeat,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Congratulations Card */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">
                    Congratulations John! 🎉
                  </h3>
                  <p className="text-purple-100 mb-4">
                    You have done 72% more sales today.
                  </p>
                  <div className="text-2xl font-bold mb-4">$48.9k</div>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View Sales
                  </button>
                </div>
                <div className="absolute right-4 top-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">245k</div>
                  <div className="text-sm text-gray-600">Sales</div>
                </div>

                <div className="bg-white rounded-xl p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">12.5k</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>

                <div className="bg-white rounded-xl p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">1.423k</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>

                <div className="bg-white rounded-xl p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">$9745</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profit Card */}
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Profit
                  </h3>
                  <span className="text-sm text-gray-500">This Month</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">624k</div>
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">+8.24%</span>
                  </div>
                </div>
                <div className="h-20 flex items-end space-x-1">
                  {[20, 40, 30, 50, 45, 60, 35, 80, 65, 90, 75, 85].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-200 to-purple-400 rounded-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  )}
                </div>
              </div>

              {/* Generated Leads */}
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Generated Leads
                  </h3>
                  <span className="text-sm text-gray-500">Monthly Report</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  4,350
                </div>
                <div className="flex items-center text-green-600 mb-4">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+15.8%</span>
                </div>
                <div className="relative w-32 h-32 mx-auto">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="78, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      78%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Earning Reports */}
            <div className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Earning Reports
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Net Profit
                      </div>
                      <div className="text-sm text-gray-500">12.4k Sales</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">$1,619</div>
                    <div className="text-sm text-green-600">+18.7%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Total Income
                      </div>
                      <div className="text-sm text-gray-500">
                        Sales, Affiliation
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">$3,571</div>
                    <div className="text-sm text-green-600">+39.6%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Total Expenses
                      </div>
                      <div className="text-sm text-gray-500">
                        ADVT, Marketing
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">$430</div>
                    <div className="text-sm text-red-600">-27.4%</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
            </div>

            {/* Transactions */}
            <div className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Transactions
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Total 58 Transactions done in this Month
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: CreditCard,
                    name: "Paypal",
                    desc: "Send money",
                    amount: "+$4850",
                    color: "green",
                  },
                  {
                    icon: Repeat,
                    name: "Wallet",
                    desc: "Mac&Book",
                    amount: "-$100",
                    color: "gray",
                  },
                  {
                    icon: Repeat,
                    name: "Transfer",
                    desc: "Refund",
                    amount: "+$4850",
                    color: "green",
                  },
                  {
                    icon: CreditCard,
                    name: "Paypal",
                    desc: "Client payment",
                    amount: "+$24500",
                    color: "green",
                  },
                  {
                    icon: CreditCard,
                    name: "Master Card",
                    desc: "Electric Bill",
                    amount: "-$100",
                    color: "red",
                  },
                  {
                    icon: Repeat,
                    name: "Transfer",
                    desc: "Refund",
                    amount: "+$50",
                    color: "green",
                  },
                  {
                    icon: CreditCard,
                    name: "Paypal",
                    desc: "Client payment",
                    amount: "+$24500",
                    color: "green",
                  },
                ].map((transaction, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <transaction.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {transaction.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {transaction.desc}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-medium text-sm ${
                        transaction.color === "green"
                          ? "text-green-600"
                          : transaction.color === "red"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Revenue Report */}
            <div className="bg-white rounded-xl p-6 border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Revenue Report
                </h3>
                <button className="text-sm text-purple-600 font-medium">
                  2024
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                $25,825
              </div>
              <div className="text-sm text-gray-500 mb-4">Budget</div>

              <div className="h-32 mb-4">
                <div className="h-full flex items-end justify-between space-x-2">
                  {[40, 80, 60, 90, 50, 70, 45, 85, 30, 75, 40, 60].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center flex-1"
                      >
                        <div
                          className="w-full bg-gradient-to-t from-purple-400 to-purple-600 rounded-sm mb-1"
                          style={{ height: `${height}%` }}
                        ></div>
                        <div
                          className="w-full bg-gradient-to-t from-orange-300 to-orange-500 rounded-sm"
                          style={{ height: `${height * 0.6}%` }}
                        ></div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Earning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                  <span className="text-gray-600">Expense</span>
                </div>
              </div>

              <div className="mt-4 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="w-full h-8 flex items-end space-x-1">
                  {[30, 20, 40, 25, 35, 20, 45, 30, 25, 40, 20, 35].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gray-300 rounded-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  )}
                </div>
              </div>

              <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Download Report
              </button>
            </div>

            {/* Popular Products */}
            <div className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Products
              </h3>

              <div className="space-y-4">
                {[
                  {
                    name: "Apple iPhone 13",
                    desc: "Apple",
                    price: "$999.29",
                    color: "bg-red-100",
                  },
                  {
                    name: "Nike Air Jordan",
                    desc: "Nike",
                    price: "$72.40",
                    color: "bg-orange-100",
                  },
                  {
                    name: "Beats Studio 3",
                    desc: "Beats",
                    price: "$99",
                    color: "bg-blue-100",
                  },
                  {
                    name: "Apple Watch Series 7",
                    desc: "Apple",
                    price: "$249.99",
                    color: "bg-gray-100",
                  },
                  {
                    name: "Amazon Echo Dot",
                    desc: "Amazon",
                    price: "$79.49",
                    color: "bg-gray-100",
                  },
                  {
                    name: "PlayStation 5",
                    desc: "Sony",
                    price: "$499.99",
                    color: "bg-blue-100",
                  },
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 ${product.color} rounded-lg mr-3`}
                      ></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {product.desc}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orders by Countries */}
            <div className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Orders by Countries
              </h3>

              <div className="space-y-4">
                {[
                  {
                    country: "China",
                    revenue: "$8,656k",
                    orders: "Mainland China, Hong Kong...",
                    color: "bg-blue-500",
                  },
                  {
                    country: "Vorra",
                    revenue: "$2,415k",
                    orders: "Blemugia, South Georgia...",
                    color: "bg-purple-500",
                  },
                  {
                    country: "Dremas",
                    revenue: "$1,267k",
                    orders: "Rebambia",
                    color: "bg-orange-500",
                  },
                  {
                    country: "Palmas",
                    revenue: "$5,250k",
                    orders: "Lachmo, Dantza...",
                    color: "bg-green-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 ${item.color} rounded-full mr-2`}
                        ></div>
                        <span className="font-medium text-gray-900 text-sm">
                          {item.country}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">
                        {item.revenue}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 ml-5">
                      {item.orders}
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
}
