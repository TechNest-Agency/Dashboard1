import React, { useState } from 'react';

const DataTables = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleRow = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter(rowId => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const employeeData = [
    {
      id: 1,
      name: "Kortie O'Crevy",
      position: "Nuclear Power Engineer",
      email: "kocrevy0@thetimes.co.uk",
      date: "09/23/2016",
      salary: 23896.35,
      age: 61,
      status: "Professional",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      details: "10+ years experience in nuclear energy sector. Specialized in reactor maintenance."
    },
    {
      id: 2,
      name: "Bailie Coulman",
      position: "VP Quality Control",
      email: "bcoulman1@yolasite.com",
      date: "05/20/2018",
      salary: 13633.69,
      age: 63,
      status: "Professional",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      details: "Quality assurance expert with background in manufacturing and pharmaceuticals."
    },
    {
      id: 3,
      name: "Dorolice Crossman",
      position: "Cost Accountant",
      email: "dcrossman3@google.co.jp",
      date: "12/03/2017",
      salary: 12336.17,
      age: 22,
      status: "Professional",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      details: "Recent graduate with honors in accounting. QuickBooks certified."
    },
    {
      id: 4,
      name: "Edwina Ebsworth",
      position: "Human Resources Assistant",
      email: "eebsworth2m@sbwire.com",
      date: "09/27/2018",
      salary: 19586.23,
      age: 27,
      status: "Current",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      details: "HR generalist with focus on employee relations and benefits administration."
    },
    {
      id: 5,
      name: "Elleen Diehn",
      position: "Environmental Specialist",
      email: "ediehn6@163.com",
      date: "10/15/2017",
      salary: 18991.67,
      age: 59,
      status: "Rejected",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      details: "Environmental compliance expert with EPA certification."
    },
    {
      id: 6,
      name: "De Falloon",
      position: "Sales Representative",
      email: "dfalloona@ifeng.com",
      date: "06/12/2018",
      salary: 19252.12,
      age: 30,
      status: "Resigned",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      details: "Top performing sales rep with 5 years in medical device sales."
    },
    {
      id: 7,
      name: "Stella Ganderton",
      position: "Operator",
      email: "sganderton2@tuttocitta.it",
      date: "03/24/2018",
      salary: 13076.28,
      age: 66,
      status: "Applied",
      avatar: "https://randomuser.me/api/portraits/women/76.jpg",
      details: "Equipment operator with forklift and heavy machinery certifications."
    },
  ];

  // Group data by status
  const groupedData = employeeData.reduce((acc, employee) => {
    if (!acc[employee.status]) {
      acc[employee.status] = [];
    }
    acc[employee.status].push(employee);
    return acc;
  }, {});

  // Pagination logic
  const totalPages = Math.ceil(employeeData.length / itemsPerPage);
  const paginatedData = employeeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const statusIcons = {
    Professional: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    Current: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    Rejected: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
    Resigned: "https://cdn-icons-png.flaticon.com/512/1828/1828899.png",
    Applied: "https://cdn-icons-png.flaticon.com/512/1828/1828764.png"
  };

  return (
    <div className="min-h-screen py-8  sm:px-6 ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your team members efficiently</p>
        </div>

        {/* Table 1: Grouped Rows */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png" 
                alt="Grouped" 
                className="w-6 h-6"
              />
              Grouped by Status
            </h2>
          </div>
          
          {Object.entries(groupedData).map(([status, employees]) => (
            <div key={status} className="border-b border-gray-200 last:border-b-0">
              <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={statusIcons[status]} 
                    alt={status} 
                    className="w-5 h-5"
                  />
                  <h3 className="font-medium">
                    {status} <span className="text-gray-500">({employees.length})</span>
                  </h3>
                </div>
              </div>
              
              {employees.map((employee) => (
                <div key={employee.id} className="px-4 py-3 border-t border-gray-100 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <img 
                      src={employee.avatar} 
                      alt={employee.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{employee.name}</p>
                      <p className="text-sm text-gray-500 truncate">{employee.position}</p>
                    </div>
                    <div className="hidden md:block text-sm text-gray-500">{employee.email}</div>
                    <div className="hidden lg:block text-sm text-gray-500">{employee.date}</div>
                    <div className="hidden xl:block text-sm font-medium">${employee.salary.toLocaleString()}</div>
                    <div className="hidden xl:block text-sm text-gray-500">{employee.age} years</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        employee.status === 'Professional' ? 'bg-blue-100 text-blue-800' :
                        employee.status === 'Current' ? 'bg-green-100 text-green-800' :
                        employee.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        employee.status === 'Resigned' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Table 2: Standard Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1570/1570932.png" 
                alt="Standard" 
                className="w-6 h-6"
              />
              Employee Directory
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hire Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={employee.avatar} alt={employee.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.age} years</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      ${employee.salary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        employee.status === 'Professional' ? 'bg-blue-100 text-blue-800' :
                        employee.status === 'Current' ? 'bg-green-100 text-green-800' :
                        employee.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        employee.status === 'Resigned' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(currentPage * itemsPerPage, employeeData.length)}</span> of{' '}
                  <span className="font-medium">{employeeData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">First</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/709/709586.png" className="h-4 w-4" alt="First" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" className="h-4 w-4" alt="Previous" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        currentPage === page
                          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" className="h-4 w-4" alt="Next" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Last</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/709/709618.png" className="h-4 w-4" alt="Last" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Table 3: Expandable Rows */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1570/1570927.png" 
                alt="Expandable" 
                className="w-6 h-6"
              />
              Employee Details with Expandable Rows
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employeeData.slice(0, 4).map((employee) => (
                  <React.Fragment key={employee.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={employee.avatar} alt={employee.name} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                            <div className="text-sm text-gray-500">{employee.age} years</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          employee.status === 'Professional' ? 'bg-blue-100 text-blue-800' :
                          employee.status === 'Current' ? 'bg-green-100 text-green-800' :
                          employee.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                          employee.status === 'Resigned' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => toggleRow(employee.id)}
                          className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                        >
                          {expandedRows.includes(employee.id) ? (
                            <>
                              <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" className="h-4 w-4" alt="Collapse" />
                              Hide
                            </>
                          ) : (
                            <>
                              <img src="https://cdn-icons-png.flaticon.com/512/3524/3524385.png" className="h-4 w-4" alt="Expand" />
                              View
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedRows.includes(employee.id) && (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Details</h4>
                              <p className="text-sm text-gray-600">{employee.details}</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Hire Date:</span>
                                <span className="text-sm font-medium">{employee.date}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Salary:</span>
                                <span className="text-sm font-medium">${employee.salary.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Age:</span>
                                <span className="text-sm font-medium">{employee.age} years</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTables;