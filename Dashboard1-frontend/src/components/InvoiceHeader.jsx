import { Search, Plus } from 'lucide-react';
import { Link } from "react-router-dom";

const InvoiceHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      {/* Left Controls */}
      <div className="flex flex-col sm:flex-row gap-4 flex-1">
        {/* Show per page */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Show</span>
          <select className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7367f0]">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        {/* Create Invoice */}
        <Link to="/invoice/add">
          <button className="bg-[#7367f0] hover:bg-[#5e50ee] text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200">
            <Plus className="w-4 h-4" />
            Create Invoice
          </button>
        </Link>
      </div>

      {/* Right Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Invoice"
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7367f0]"
          />
        </div>

        {/* Invoice Status Filter */}
        <select className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm text-gray-800 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-[#7367f0]">
          <option>Invoice Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Draft</option>
          <option>Overdue</option>
        </select>
      </div>
    </div>
  );
};

export default InvoiceHeader;
