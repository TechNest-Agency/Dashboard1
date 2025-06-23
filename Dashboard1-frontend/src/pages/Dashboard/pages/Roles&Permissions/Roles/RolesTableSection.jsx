import React, { useState } from 'react';
import { FaCrown, FaFileAlt, FaPenAlt, FaTools, FaUser } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiEye, FiTrash2, FiEdit } from 'react-icons/fi';


const RolesTableSection = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
const [tableData, setTableData] = useState([
  {
    id: 1,
    user: { img: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', email: 'john@gmail.com' },
    role: { name: 'Admin', icon: <FaCrown className="text-purple-500" /> },
    plan: 'Enterprise',
    billing: 'Auto Debit',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 2,
    user: { img: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Smith', email: 'jane@gmail.com' },
    role: { name: 'Author', icon: <FaPenAlt className="text-blue-500" /> },
    plan: 'Team',
    billing: 'Manual-PayPal',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 3,
    user: { img: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Robert Johnson', email: 'robert@gmail.com' },
    role: { name: 'Editor', icon: <FaFileAlt className="text-orange-500" /> },
    plan: 'Company',
    billing: 'Manual-Credit Card',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 4,
    user: { img: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Emily Davis', email: 'emily@gmail.com' },
    role: { name: 'Maintainer', icon: <FaTools className="text-green-500" /> },
    plan: 'Basic',
    billing: 'Manual-Cash',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 5,
    user: { img: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Michael Wilson', email: 'michael@gmail.com' },
    role: { name: 'Subscriber', icon: <FaUser className="text-gray-500" /> },
    plan: 'Basic',
    billing: 'Auto Debit',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 6,
    user: { img: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Sarah Brown', email: 'sarah@gmail.com' },
    role: { name: 'Admin', icon: <FaCrown className="text-purple-500" /> },
    plan: 'Enterprise',
    billing: 'Manual-PayPal',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 7,
    user: { img: 'https://randomuser.me/api/portraits/men/7.jpg', name: 'David Miller', email: 'david@gmail.com' },
    role: { name: 'Editor', icon: <FaFileAlt className="text-orange-500" /> },
    plan: 'Team',
    billing: 'Manual-Credit Card',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 8,
    user: { img: 'https://randomuser.me/api/portraits/women/8.jpg', name: 'Jessica Garcia', email: 'jessica@gmail.com' },
    role: { name: 'Author', icon: <FaPenAlt className="text-blue-500" /> },
    plan: 'Company',
    billing: 'Auto Debit',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 9,
    user: { img: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Daniel Martinez', email: 'daniel@gmail.com' },
    role: { name: 'Maintainer', icon: <FaTools className="text-green-500" /> },
    plan: 'Basic',
    billing: 'Manual-Cash',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 10,
    user: { img: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Olivia Anderson', email: 'olivia@gmail.com' },
    role: { name: 'Subscriber', icon: <FaUser className="text-gray-500" /> },
    plan: 'Basic',
    billing: 'Auto Debit',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 11,
    user: { img: 'https://randomuser.me/api/portraits/men/11.jpg', name: 'William Taylor', email: 'william@gmail.com' },
    role: { name: 'Admin', icon: <FaCrown className="text-purple-500" /> },
    plan: 'Enterprise',
    billing: 'Manual-PayPal',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 12,
    user: { img: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Sophia Thomas', email: 'sophia@gmail.com' },
    role: { name: 'Author', icon: <FaPenAlt className="text-blue-500" /> },
    plan: 'Team',
    billing: 'Manual-Credit Card',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 13,
    user: { img: 'https://randomuser.me/api/portraits/men/13.jpg', name: 'James Hernandez', email: 'james@gmail.com' },
    role: { name: 'Editor', icon: <FaFileAlt className="text-orange-500" /> },
    plan: 'Company',
    billing: 'Auto Debit',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 14,
    user: { img: 'https://randomuser.me/api/portraits/women/14.jpg', name: 'Emma Moore', email: 'emma@gmail.com' },
    role: { name: 'Maintainer', icon: <FaTools className="text-green-500" /> },
    plan: 'Basic',
    billing: 'Manual-Cash',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 15,
    user: { img: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Benjamin Jackson', email: 'benjamin@gmail.com' },
    role: { name: 'Subscriber', icon: <FaUser className="text-gray-500" /> },
    plan: 'Basic',
    billing: 'Auto Debit',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 16,
    user: { img: 'https://randomuser.me/api/portraits/women/16.jpg', name: 'Ava White', email: 'ava@gmail.com' },
    role: { name: 'Admin', icon: <FaCrown className="text-purple-500" /> },
    plan: 'Enterprise',
    billing: 'Manual-PayPal',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 17,
    user: { img: 'https://randomuser.me/api/portraits/men/17.jpg', name: 'Mason Harris', email: 'mason@gmail.com' },
    role: { name: 'Author', icon: <FaPenAlt className="text-blue-500" /> },
    plan: 'Team',
    billing: 'Manual-Credit Card',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 18,
    user: { img: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Charlotte Clark', email: 'charlotte@gmail.com' },
    role: { name: 'Editor', icon: <FaFileAlt className="text-orange-500" /> },
    plan: 'Company',
    billing: 'Auto Debit',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 19,
    user: { img: 'https://randomuser.me/api/portraits/men/19.jpg', name: 'Elijah Lewis', email: 'elijah@gmail.com' },
    role: { name: 'Maintainer', icon: <FaTools className="text-green-500" /> },
    plan: 'Basic',
    billing: 'Manual-Cash',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 20,
    user: { img: 'https://randomuser.me/api/portraits/women/20.jpg', name: 'Amelia Walker', email: 'amelia@gmail.com' },
    role: { name: 'Subscriber', icon: <FaUser className="text-gray-500" /> },
    plan: 'Basic',
    billing: 'Auto Debit',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 21,
    user: { img: 'https://randomuser.me/api/portraits/men/21.jpg', name: 'Logan Hall', email: 'logan@gmail.com' },
    role: { name: 'Admin', icon: <FaCrown className="text-purple-500" /> },
    plan: 'Enterprise',
    billing: 'Manual-PayPal',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 22,
    user: { img: 'https://randomuser.me/api/portraits/women/22.jpg', name: 'Harper Young', email: 'harper@gmail.com' },
    role: { name: 'Author', icon: <FaPenAlt className="text-blue-500" /> },
    plan: 'Team',
    billing: 'Manual-Credit Card',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  },
  {
    id: 23,
    user: { img: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Lucas Allen', email: 'lucas@gmail.com' },
    role: { name: 'Editor', icon: <FaFileAlt className="text-orange-500" /> },
    plan: 'Company',
    billing: 'Auto Debit',
    status: { text: 'Inactive', color: 'text-red-500 bg-red-100' },
    selected: false
  },
  {
    id: 24,
    user: { img: 'https://randomuser.me/api/portraits/women/24.jpg', name: 'Evelyn King', email: 'evelyn@gmail.com' },
    role: { name: 'Maintainer', icon: <FaTools className="text-green-500" /> },
    plan: 'Basic',
    billing: 'Manual-Cash',
    status: { text: 'Active', color: 'text-green-500 bg-green-100' },
    selected: false
  },
  {
    id: 25,
    user: { img: 'https://randomuser.me/api/portraits/men/25.jpg', name: 'Alexander Wright', email: 'alexander@gmail.com' },
    role: { name: 'Subscriber', icon: <FaUser className="text-gray-500" /> },
    plan: 'Basic',
    billing: 'Auto Debit',
    status: { text: 'Pending', color: 'text-yellow-500 bg-yellow-100' },
    selected: false
  }
]);

  // Toggle select all rows
  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTableData(tableData.map(item => ({
      ...item,
      selected: newSelectAll
    })));
  };

  // Toggle single row selection
  const toggleSelectRow = (id) => {
    const newData = tableData.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setTableData(newData);
    setSelectAll(newData.every(item => item.selected));
  };

  // Filter data based on search and role selection
  const filteredData = tableData.filter(item => {
    const matchesSearch = item.user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || item.role.name === selectedRole;
    return matchesSearch && matchesRole;
  });


  // Delete user function
  const handleDeleteUser = (id) => {
    const updatedData = tableData.filter(user => user.id !== id);
    setTableData(updatedData);
    
    // Adjust pagination if needed...
    if (paginatedData.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // Pagination logic...........
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

 

  return (
    <div className="mt-12">
       <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Total users with their roles</h1>
        <p className="text-gray-600">
          View administrator accounts with assigned roles.
        </p>
      </div>
 


      {/* Table Data Controls................ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white px-2 py-4 rounded-t-lg">
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Show</span>
          <select 
            className="border border-gray-300 rounded px-2 w-24 py-1 text-sm"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {[5, 10, 20, 25, 50, 100, 'All'].map(option => (
              <option key={option} value={option === 'All' ? filteredData.length : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        {/* search & role filter....... */}
        <div className="flex flex-row gap-3 w-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search user..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm appearance-none pr-8"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="All">Select Role</option>
            {['Admin', 'Author', 'Maintainer', 'Subscriber', 'Editor'].map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table content................... */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
                 <th className="px-6 py-3 text-left text-lg font-medium text-gray-800 uppercase ">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">User</th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">Role</th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">Plan</th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">Billing</th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">Status</th>
              <th className="px-6 py-3 text-left lg font-medium text-gray-800 uppercase ">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
               <td className="px-6 py-4 whitespace-nowrap">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={item.selected}
                  onChange={() => toggleSelectRow(item.id)}
                />
              </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={item.user.img} 
                      alt={item.user.name} 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.user.name}</div>
                      <div className="text-sm text-gray-500">{item.user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                          <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span>{item.role.icon}</span>
                  <span className="text-black">{item.role.name}</span>
                </div>
              </td>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.billing}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status.color}`}>
                    {item.status.text}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FiEye className="h-4 w-4" />
                    </button>
                  <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteUser(item.id)}
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
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
    </div>
  );
};

export default RolesTableSection;