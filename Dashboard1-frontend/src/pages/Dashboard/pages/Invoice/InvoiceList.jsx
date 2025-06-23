import InvoiceStats from '../../../../components/InvoiceStats';
import InvoiceHeader from '../../../../components/InvoiceHeader';
import InvoiceTable from '../../../../components/InvoiceTable';
import InvoicePagination from '../../../../components/InvoicePagination';

const InvoiceList = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#7367f0]">Invoice Management</h1>
          <p className="text-gray-600 mt-2">
            Manage and track all your invoices in one place
          </p>
        </div>

        {/* Statistics Cards (use blue/purple inside) */}
        <InvoiceStats />

        {/* Filter, Add, and Search Controls */}
        <InvoiceHeader />

        {/* Invoices Table */}
        <InvoiceTable />

        {/* Pagination Controls */}
        <InvoicePagination />
      </div>
    </div>
  );
};

export default InvoiceList;
