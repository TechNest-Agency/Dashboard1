import React, { useState } from "react";
import { Search, Download, MoreHorizontal, X } from "lucide-react";

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    role: "",
    plan: "",
    status: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Beverlie Krabbe",
      email: "beverlie@krabbe.uk",
      avatar: "/api/placeholder/32/32",
      role: "Editor",
      plan: "Company",
      billing: "Manual-Cash",
      status: "Active",
    },
    {
      id: 2,
      name: "Paulie Durber",
      email: "paulie@durber.uk",
      avatar: "/api/placeholder/32/32",
      role: "Subscriber",
      plan: "Team",
      billing: "Manual-PayPal",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Gena Wind",
      email: "gena@wind.uk",
      avatar: "/api/placeholder/32/32",
      role: "Admin",
      plan: "Basic",
      billing: "Manual-PayPal",
      status: "Pending",
    },
    {
      id: 4,
      name: "Kornelius Karlssen",
      email: "kornelius@karlssen.uk",
      avatar: "/api/placeholder/32/32",
      role: "Admin",
      plan: "Basic",
      billing: "Manual-Credit Card",
      status: "Active",
    },
    {
      id: 5,
      name: "Salvador Ullrich",
      email: "salvador@ullrich.com",
      avatar: "/api/placeholder/32/32",
      role: "Maintainer",
      plan: "Enterprise",
      billing: "Manual-Credit Card",
      status: "Pending",
    },
    {
      id: 6,
      name: "Carrie Nergney",
      email: "carrie@nergney.uk",
      avatar: "/api/placeholder/32/32",
      role: "Subscriber",
      plan: "Team",
      billing: "Manual-Credit Card",
      status: "Active",
    },
    {
      id: 7,
      name: "Vladimir Koschek",
      email: "vladimir@koschek.uk",
      avatar: "/api/placeholder/32/32",
      role: "Author",
      plan: "Team",
      billing: "Manual-Credit Card",
      status: "Active",
    },
    {
      id: 8,
      name: "Micaela McNeice",
      email: "micaela@mcneice.uk",
      avatar: "/api/placeholder/32/32",
      role: "Admin",
      plan: "Basic",
      billing: "Auto Debit",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Benedetto Rossiter",
      email: "benedetto@rossiter.uk",
      avatar: "/api/placeholder/32/32",
      role: "Editor",
      plan: "Team",
      billing: "Auto Debit",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Edwina Baldwin",
      email: "edwina@baldwin.com",
      avatar: "/api/placeholder/32/32",
      role: "Maintainer",
      plan: "Team",
      billing: "Auto Debit",
      status: "Pending",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    company: "",
    country: "",
    contact: "",
    role: "",
    plan: "",
    status: "",
  });

  const stats = {
    session: { value: "21,459", change: "+29%", color: "text-purple-600" },
    paidUsers: { value: "4,567", change: "+18%", color: "text-pink-600" },
    activeUsers: { value: "19,860", change: "-14%", color: "text-green-600" },
    pendingUsers: { value: "237", change: "+42%", color: "text-orange-600" },
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleIcon = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "👤";
      case "editor":
        return "✏️";
      case "subscriber":
        return "👥";
      case "maintainer":
        return "🔧";
      case "author":
        return "📝";
      default:
        return "👤";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: formData.fullName,
      email: formData.email,
      avatar: "/api/placeholder/32/32",
      role: formData.role,
      plan: formData.plan,
      billing: "Manual-Credit Card",
      status: formData.status,
    };
    setUsers((prev) => [...prev, newUser]);
    setFormData({
      fullName: "",
      username: "",
      email: "",
      company: "",
      country: "",
      contact: "",
      role: "",
      plan: "",
      status: "",
    });
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !filters.role || user.role === filters.role;
    const matchesPlan = !filters.plan || user.plan === filters.plan;
    const matchesStatus = !filters.status || user.status === filters.status;

    return matchesSearch && matchesRole && matchesPlan && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Session</p>
              <p className="text-2xl font-bold">{stats.session.value}</p>
              <p className="text-xs text-gray-500">Total Users</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
          </div>
          <p className={`text-sm mt-2 ${stats.session.color}`}>
            {stats.session.change}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Paid Users</p>
              <p className="text-2xl font-bold">{stats.paidUsers.value}</p>
              <p className="text-xs text-gray-500">Last Week Analytics</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <div className="w-6 h-6 bg-pink-600 rounded"></div>
            </div>
          </div>
          <p className={`text-sm mt-2 ${stats.paidUsers.color}`}>
            {stats.paidUsers.change}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Users</p>
              <p className="text-2xl font-bold">{stats.activeUsers.value}</p>
              <p className="text-xs text-gray-500">Last Week Analytics</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
          </div>
          <p className={`text-sm mt-2 ${stats.activeUsers.color}`}>
            {stats.activeUsers.change}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Users</p>
              <p className="text-2xl font-bold">{stats.pendingUsers.value}</p>
              <p className="text-xs text-gray-500">Last Week Analytics</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <div className="w-6 h-6 bg-orange-600 rounded"></div>
            </div>
          </div>
          <p className={`text-sm mt-2 ${stats.pendingUsers.color}`}>
            {stats.pendingUsers.change}
          </p>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-lg shadow-sm border mb-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              value={filters.role}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, role: e.target.value }))
              }
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Subscriber">Subscriber</option>
              <option value="Maintainer">Maintainer</option>
              <option value="Author">Author</option>
            </select>

            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              value={filters.plan}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, plan: e.target.value }))
              }
            >
              <option value="">Select Plan</option>
              <option value="Basic">Basic</option>
              <option value="Team">Team</option>
              <option value="Company">Company</option>
              <option value="Enterprise">Enterprise</option>
            </select>

            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              value={filters.status}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>

            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search User"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add New User
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-t border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Billing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="mr-2">{getRoleIcon(user.role)}</span>
                      <span className="text-sm text-gray-900">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.billing}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        👁️
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        ✏️
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing 1 to 10 of {filteredUsers.length} entries
            </p>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 text-sm rounded ${
                    page === 1
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
              <h3 className="text-lg font-semibold">Add New User</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="johndoe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Pixinvent"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Country
                  </label>
                  <select
                    name="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    placeholder="+1 234 567 8900"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Role
                  </label>
                  <select
                    name="role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Subscriber">Subscriber</option>
                    <option value="Maintainer">Maintainer</option>
                    <option value="Author">Author</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Plan
                  </label>
                  <select
                    name="plan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.plan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Plan</option>
                    <option value="Basic">Basic</option>
                    <option value="Team">Team</option>
                    <option value="Company">Company</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Status
                </label>
                <select
                  name="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3 p-6 border-t flex-shrink-0">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
