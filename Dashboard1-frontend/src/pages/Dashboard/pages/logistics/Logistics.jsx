import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { 
  FiPackage, FiTruck, FiCheckCircle, FiClock, FiSmile, 
  FiMapPin, FiAlertTriangle, FiCalendar, FiTrendingUp, 
  FiTrendingDown, FiNavigation, FiAlertCircle, FiFilter
} from 'react-icons/fi';
import { FaTruckLoading, FaTruckMoving } from 'react-icons/fa';

const LogisticsDashboard = () => {
  const deliveryPerformanceData = [
    { name: 'Packages in transit', value: 10000, change: 25.8, icon: <FiPackage className="text-blue-500" /> },
    { name: 'Packages out for delivery', value: 5000, change: 4.3, icon: <FiTruck className="text-purple-500" /> },
    { name: 'Packages delivered', value: 15000, change: -12.5, icon: <FiCheckCircle className="text-green-500" /> },
    { name: 'Delivery success rate', value: 95, change: 35.6, icon: <span className="text-yellow-500">%</span> },
    { name: 'Average delivery time', value: 2.5, change: -2.15, icon: <FiClock className="text-orange-500" /> },
    { name: 'Customer satisfaction', value: 4.5, change: 5.7, icon: <FiSmile className="text-pink-500" /> },
  ];

  const deliveryExceptionsData = [
    { name: 'Incorrect address', value: 30, color: '#FF6B6B' },
    { name: 'Weather conditions', value: 25, color: '#4ECDC4' },
    { name: 'Federal Holidays', value: 20, color: '#45B7D1' },
    { name: 'Damage during transit', value: 25, color: '#FFA07A' },
  ];

  const ordersByCountriesData = [
    { name: 'Myrtle Ullrich', status: 'New', city: 'Boulder, CA', zip: 95959, icon: <FiMapPin className="text-blue-500" /> },
    { name: 'Barry Schowalter', status: 'Preparing', city: 'Orange, CA', zip: 92118, icon: <FiMapPin className="text-purple-500" /> },
    { name: 'Veronica Herman', status: 'Shipping', city: 'Windsor', zip: 95492, icon: <FiMapPin className="text-green-500" /> },
  ];

  const vehiclesOverviewData = [
    { name: 'On the way', value: 39.7, time: '2hr 10min', icon: <FaTruckMoving className="text-blue-500" /> },
    { name: 'Unloading', value: 28.3, time: '3hr 15min', icon: <FaTruckLoading className="text-purple-500" /> },
    { name: 'Loading', value: 17.4, time: '1hr 24min', icon: <FaTruckLoading className="text-green-500" /> },
    { name: 'Waiting', value: 14.6, time: '', icon: <FiClock className="text-gray-500" /> },
  ];

  const shipmentStatisticsData = [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 37.5 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 12.5 },
  ];

  const vehicleStatusData = [
    { name: 'On route vehicles', value: 42, change: 18.2, icon: <FiNavigation className="text-green-500" /> },
    { name: 'Vehicles with errors', value: 8, change: -8.7, icon: <FiAlertCircle className="text-red-500" /> },
    { name: 'Deviated from route', value: 27, change: 4.3, icon: <FiAlertTriangle className="text-yellow-500" /> },
    { name: 'Late vehicles', value: 13, change: -2.5, icon: <FiClock className="text-orange-500" /> },
  ];

  const onRouteVehiclesData = [
    { id: 'VOL-468031', start: 'Cagnes-sur-Mer, France', end: 'Catania, Italy', warning: 'No Warnings', progress: 90 },
    { id: 'VOL-302781', start: 'Köln, Germany', end: 'La Spezia, Italy', warning: 'ECU Not Responding', progress: 30 },
    { id: 'VOL-715822', start: 'Chambray-lès-Tours, France', end: 'Hamm, Germany', warning: 'Oil Leakage', progress: 20 },
    { id: 'VOL-451430', start: 'Berlin, Germany', end: 'Gelsenkirchen, Germany', warning: 'No Warnings', progress: 80 },
    { id: 'VOL-921577', start: 'Cergy-Pontoise, France', end: 'Berlin, Germany', warning: 'No Warnings', progress: 70 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Logistics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow text-sm font-medium">
            <FiCalendar className="mr-2" /> Last 30 Days
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow text-sm font-medium">
            <FiFilter className="mr-2" /> Filters
          </button>
        </div>
      </div>

      {/* Vehicle Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {vehicleStatusData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.name}</p>
                <p className="text-3xl font-bold mt-1">{item.value}</p>
              </div>
              <div className="text-2xl p-3 bg-gray-100 rounded-full">
                {item.icon}
              </div>
            </div>
            <div className={`mt-4 flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.change >= 0 ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
              <span className="text-sm font-medium">
                {Math.abs(item.change)}% {item.change >= 0 ? 'increase' : 'decrease'} from last week
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Delivery Performance */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Delivery Performance</h2>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">12% increase</span>
          </div>
          <div className="space-y-2">
            {deliveryPerformanceData.map((item, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-2xl mr-4">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{item.name}</p>
                  <p className="text-lg font-bold">{item.value.toLocaleString()}</p>
                </div>
                <div className={`flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change >= 0 ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
                  <span className="text-sm font-medium">{Math.abs(item.change)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Exceptions */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Delivery Exceptions</h2>
          <div className="">
            <div className="w-2/2">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={deliveryExceptionsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {deliveryExceptionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-2/2 pl-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-center">30%</p>
                <p className="text-sm text-gray-600 text-center">Average Exceptions</p>
              </div>
              <div className="space-y-3">
                {deliveryExceptionsData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm flex-1">{item.name}</span>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orders by Countries */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Orders by Countries</h2>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">62 in progress</span>
          </div>
          <div className="space-y-4">
            {ordersByCountriesData.map((item, index) => (
              <div key={index} className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === 'New' ? 'bg-blue-100 text-blue-800' : 
                    item.status === 'Preparing' ? 'bg-purple-100 text-purple-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.status}
                  </span>
                  <div className="text-xl">{item.icon}</div>
                </div>
                <p className="font-medium">Sender: {item.name}</p>
                <p className="text-sm text-gray-600">{item.city}, {item.zip}</p>
                {index === ordersByCountriesData.length - 1 && (
                  <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg font-medium flex items-center justify-center">
                    View All Orders
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Vehicles Overview */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Vehicles Overview</h2>
          <div className="mb-6">
            <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
              {vehiclesOverviewData.map((item, index) => (
                <div 
                  key={index}
                  className={`h-full ${
                    index === 0 ? 'bg-blue-500' : 
                    index === 1 ? 'bg-purple-500' : 
                    index === 2 ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                  style={{ width: `${item.value}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              {vehiclesOverviewData.map((item, index) => (
                <span key={index}>{item.value}%</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {vehiclesOverviewData.map((item, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-2xl mr-4">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  {item.time && <p className="text-sm text-gray-600">{item.time}</p>}
                </div>
                <span className="text-lg font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipment Statistics */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Shipment Statistics</h2>
            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Total: 23.8k deliveries</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={shipmentStatisticsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Shipments" radius={[4, 4, 0, 0]}>
                  {shipmentStatisticsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#7E3AF2' : '#A78BFA'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* On Route Vehicles Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">On Route Vehicles</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 rounded text-sm">Export</button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Add Vehicle</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b">
                <th className="pb-3 pl-2"><input type="checkbox" /></th>
                <th className="pb-3">Vehicle ID</th>
                <th className="pb-3">Starting Route</th>
                <th className="pb-3">Ending Route</th>
                <th className="pb-3">Warnings</th>
                <th className="pb-3">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {onRouteVehiclesData.map((vehicle, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 pl-2"><input type="checkbox" /></td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <FiTruck className="text-gray-500 mr-2" />
                      <span className="font-medium">{vehicle.id}</span>
                    </div>
                  </td>
                  <td className="py-4">{vehicle.start}</td>
                  <td className="py-4">{vehicle.end}</td>
                  <td className="py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      vehicle.warning === 'No Warnings' ? 'bg-green-100 text-green-800' : 
                      vehicle.warning === 'ECU Not Responding' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {vehicle.warning === 'No Warnings' ? (
                        <FiCheckCircle className="mr-1" />
                      ) : (
                        <FiAlertTriangle className="mr-1" />
                      )}
                      {vehicle.warning}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-full mr-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              vehicle.progress > 70 ? 'bg-green-500' : 
                              vehicle.progress > 30 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${vehicle.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{vehicle.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Showing 1 to 5 of 25 entries</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">«</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">‹</button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">2</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">3</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">4</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">5</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">›</button>
            <button className="px-3 py-1 bg-gray-200 rounded text-sm">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;