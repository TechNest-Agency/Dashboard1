import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";

const InvoicePagination = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      {/* Pagination Info */}
      <div className="text-sm text-gray-400">
        Showing 1 to 10 of 50 entries
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Navigation Arrows */}
        <button className="p-2 rounded-md border border-slate-600 bg-slate-900 text-gray-300 hover:bg-slate-800 transition">
          <ChevronsLeft className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-md border border-slate-600 bg-slate-900 text-gray-300 hover:bg-slate-800 transition">
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        <button className="px-3 py-1 rounded-md bg-[#7367f0] text-white text-sm font-medium shadow hover:bg-[#5e50ee] transition">
          1
        </button>
        {[2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-3 py-1 rounded-md border border-slate-600 bg-slate-900 text-gray-300 text-sm hover:bg-slate-800 transition"
          >
            {page}
          </button>
        ))}

        {/* Navigation Arrows */}
        <button className="p-2 rounded-md border border-slate-600 bg-slate-900 text-gray-300 hover:bg-slate-800 transition">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-md border border-slate-600 bg-slate-900 text-gray-300 hover:bg-slate-800 transition">
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default InvoicePagination;
