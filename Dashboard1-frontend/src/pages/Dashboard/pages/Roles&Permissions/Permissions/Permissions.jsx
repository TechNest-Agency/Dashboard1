import React, { useState } from 'react';
import { FiSearch, FiEdit, FiPlus } from 'react-icons/fi';
import PermissionModal from './PermissionModal';
import EditPermissionModal from './EditPermissionModal';


const Permissions = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [showEditPermissionModal, setShowEditPermissionModal] = useState(false);
  const tableData = [
    {
      id: 1,
      name: "Management",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "15 May 2025, 8:05 AM"
    },
    {
      id: 2,
      name: "Financial Management",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "14 May 2025, 10:15 AM"
    },
    {
      id: 3,
      name: "Manage Billing & Roles",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" }
      ],
      createdDate: "13 May 2025, 9:30 AM"
    },
    {
      id: 4,
      name: "Add and remove users",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "12 May 2025, 11:45 AM"
    },
    {
      id: 5,
      name: "Manage email sequences",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Support", color: "bg-yellow-100 text-yellow-800" }
      ],
      createdDate: "11 May 2025, 2:15 PM"
    },
    {
      id: 6,
      name: "Client communication",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Users", color: "bg-indigo-100 text-indigo-800" },
        { name: "Support", color: "bg-yellow-100 text-yellow-800" }
      ],
      createdDate: "10 May 2025, 4:20 PM"
    },
    {
      id: 7,
      name: "Only view",
      assignedTo: [
        { name: "Users", color: "bg-indigo-100 text-indigo-800" },
        { name: "Restricted User", color: "bg-red-100 text-red-800" }
      ],
      createdDate: "9 May 2025, 10:00 AM"
    },
    {
      id: 8,
      name: "Project Planning",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Users", color: "bg-indigo-100 text-indigo-800" }
      ],
      createdDate: "8 May 2025, 3:45 PM"
    },
    {
      id: 9,
      name: "Manage Others' Tasks",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "7 May 2025, 1:10 PM"
    },
    {
      id: 10,
      name: "System Configuration",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" }
      ],
      createdDate: "6 May 2025, 9:15 AM"
    },
    {
      id: 11,
      name: "Report Generation",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "5 May 2025, 11:30 AM"
    },
    {
      id: 12,
      name: "Audit Logs",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Restricted User", color: "bg-red-100 text-red-800" }
      ],
      createdDate: "4 May 2025, 2:00 PM"
    },
    {
      id: 13,
      name: "Content Management",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Users", color: "bg-indigo-100 text-indigo-800" }
      ],
      createdDate: "3 May 2025, 10:45 AM"
    },
    {
      id: 14,
      name: "Data Export",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "2 May 2025, 4:30 PM"
    },
    {
      id: 15,
      name: "Template Management",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Support", color: "bg-yellow-100 text-yellow-800" }
      ],
      createdDate: "1 May 2025, 8:20 AM"
    },
    {
      id: 16,
      name: "API Access",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" }
      ],
      createdDate: "30 Apr 2025, 3:15 PM"
    },
    {
      id: 17,
      name: "Dashboard Customization",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Users", color: "bg-indigo-100 text-indigo-800" }
      ],
      createdDate: "29 Apr 2025, 11:10 AM"
    },
    {
      id: 18,
      name: "Notification Settings",
      assignedTo: [
        { name: "Manager", color: "bg-green-100 text-green-800" },
        { name: "Users", color: "bg-indigo-100 text-indigo-800" }
      ],
      createdDate: "28 Apr 2025, 9:40 AM"
    },
    {
      id: 19,
      name: "User Activity Monitoring",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" },
        { name: "Manager", color: "bg-green-100 text-green-800" }
      ],
      createdDate: "27 Apr 2025, 2:50 PM"
    },
    {
      id: 20,
      name: "Backup Management",
      assignedTo: [
        { name: "Administrator", color: "bg-blue-100 text-blue-800" }
      ],
      createdDate: "26 Apr 2025, 4:05 PM"
    }

  ]


  const handleEditPermission = (permission) => {
    console.log(permission);
    setShowEditPermissionModal(true);
  };


  // Filter data based on search
  const filteredData = tableData.filter(item => {
    if (!item) return false;

    const searchLower = searchTerm.toLowerCase();
    const nameMatch = item.name?.toLowerCase().includes(searchLower); // Check if name matches search term

    const roleMatch = item.assignedTo?.some(role =>
      role.name?.toLowerCase().includes(searchLower)   // Check if any assigned role matches search term
    );

    return nameMatch || roleMatch;
  });


  // Pagination logic...........
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );


  return (
    <div className="mt-2">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Permissions</h1>
      </div>


      {/* Table Data Controls................ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white px-2 py-4 rounded-t-lg">
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Show</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 w-24 text-sm"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {[10, 20, 25, 50, 100, 'All'].map(option => (
              <option key={option} value={option === 'All' ? filteredData.length : option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* search and add permission Btn....... */}
        <div className="flex flex-row gap-3 w-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search permission"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => setShowPermissionModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm transition-colors"
          >
            <FiPlus className="text-sm" />
            Add Permission
          </button>
        </div>
      </div>

      {/* Table content................... */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    {item.assignedTo.map((role, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${role.color}`}
                      >
                        {role.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.createdDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    className="p-2 rounded-full hover:bg-gray-300 transition-colors relative"
                    onClick={() => handleEditPermission(item)}
                  >
                    <div className=" hover:bg-gray-300 rounded-full "></div>
                    <FiEdit className="h-5 w-5 mx-auto relative z-10 text-indigo-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Pagination...................................... */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <span className="text-sm text-gray-600 mb-2 md:mb-0">
          Showing {((currentPage - 1) * rowsPerPage) + 1} to {Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length} entries
        </span>
        <div className="flex space-x-1">
          <button
            className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            «
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          >
            ‹
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = currentPage <= 3
              ? i + 1
              : currentPage >= totalPages - 2
                ? totalPages - 4 + i
                : currentPage - 2 + i;
            return (
              <button
                key={page}
                className={`px-3 py-1 rounded text-sm ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          >
            ›
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            »
          </button>
        </div>
      </div>

      <PermissionModal
        isOpen={showPermissionModal}
        onClose={() => setShowPermissionModal(false)}
      />

      <EditPermissionModal
        isOpen={showEditPermissionModal}
        onClose={() => setShowEditPermissionModal(false)}
      />
    </div>
  );
};


export default Permissions;