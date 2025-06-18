import { ArrowLeft, Download, Printer, Edit, DollarSign } from 'lucide-react';

const InvoicePreview = () => {
  const invoiceData = {
    invoiceNumber: "#5036",
    dateIssued: "19/06/2025",
    dueDate: "25/06/2025",
    company: {
      name: "Vuexy",
      address: "Office 149, 450 South Brand Brooklyn",
      city: "San Diego County, CA 91905, USA",
      phone: "+1 (123) 456 7891, +44 (876) 543 2198"
    },
    billTo: {
      name: "Andrew Burns",
      company: "Richardson and Sons LLC",
      address: "78083 Laura Pines, Bhutan",
      phone: "(687) 660-2473",
      email: "pwillis@cross.org"
    },
    paymentDetails: {
      totalDue: "$12,110.55",
      bankName: "American Bank",
      country: "United States",
      iban: "ETD95476213874685",
      swiftCode: "BR91905"
    },
    items: [
      {
        item: "Premium Branding Package",
        description: "Branding & Promotion",
        hours: 15,
        qty: 1,
        total: "$1800"
      },
      {
        item: "SMM",
        description: "Social media templates",
        hours: 14,
        qty: 1,
        total: "$1400"
      },
      {
        item: "Web Design",
        description: "Web designing package",
        hours: 12,
        qty: 1,
        total: "$1200"
      },
      {
        item: "SEO",
        description: "Search engine optimization",
        hours: 5,
        qty: 1,
        total: "$500"
      }
    ],
    salesperson: "Jenny Parker",
    note: "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",
    subtotal: "$1800",
    discount: "$28",
    tax: "21%",
    total: "$1690"
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-b border-gray-200">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-900 font-semibold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to List
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-indigo-500 bg-indigo-50 text-indigo-700 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-indigo-100 transition"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-indigo-500 bg-indigo-50 text-indigo-700 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-indigo-100 transition"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-indigo-500 bg-indigo-50 text-indigo-700 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-indigo-100 transition"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-3 py-1.5 text-sm font-medium transition"
            >
              <DollarSign className="w-4 h-4" />
              Add Payment
            </button>
          </div>
        </div>

        {/* Invoice Container */}
        <div className="p-8">
          {/* Invoice Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{invoiceData.company.name}</h1>
              </div>
              <div className="text-gray-600 space-y-1">
                <p>{invoiceData.company.address}</p>
                <p>{invoiceData.company.city}</p>
                <p>{invoiceData.company.phone}</p>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="text-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Invoice {invoiceData.invoiceNumber}
              </h2>
              <div className="space-y-2 text-gray-700 text-sm">
                <div>
                  <span className="font-semibold">Date Issued:</span> {invoiceData.dateIssued}
                </div>
                <div>
                  <span className="font-semibold">Due Date:</span> {invoiceData.dueDate}
                </div>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 border-t border-b border-gray-200 py-6">
            {/* Invoice To */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Invoice To:</h3>
              <div className="text-gray-700 space-y-1">
                <p className="font-semibold">{invoiceData.billTo.name}</p>
                <p>{invoiceData.billTo.company}</p>
                <p>{invoiceData.billTo.address}</p>
                <p>{invoiceData.billTo.phone}</p>
                <p className="underline text-indigo-600">{invoiceData.billTo.email}</p>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Details:</h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Total Due:</span> {invoiceData.paymentDetails.totalDue}
                </div>
                <div>
                  <span className="font-semibold">Bank Name:</span> {invoiceData.paymentDetails.bankName}
                </div>
                <div>
                  <span className="font-semibold">Country:</span> {invoiceData.paymentDetails.country}
                </div>
                <div>
                  <span className="font-semibold">IBAN:</span> {invoiceData.paymentDetails.iban}
                </div>
                <div>
                  <span className="font-semibold">SWIFT Code:</span> {invoiceData.paymentDetails.swiftCode}
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-indigo-100 text-indigo-900 text-left text-sm font-semibold">
                  <th className="py-3 px-4 border border-gray-300">ITEM</th>
                  <th className="py-3 px-4 border border-gray-300">DESCRIPTION</th>
                  <th className="py-3 px-4 border border-gray-300 text-center">HOURS</th>
                  <th className="py-3 px-4 border border-gray-300 text-center">QTY</th>
                  <th className="py-3 px-4 border border-gray-300 text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-indigo-50"}
                  >
                    <td className="py-3 px-4 border border-gray-300 text-gray-900">{item.item}</td>
                    <td className="py-3 px-4 border border-gray-300 text-gray-700">{item.description}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center text-gray-900">{item.hours}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center text-gray-900">{item.qty}</td>
                    <td className="py-3 px-4 border border-gray-300 text-right font-semibold text-gray-900">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="mt-10 flex flex-col lg:flex-row justify-between gap-10">
            {/* Salesperson and Note */}
            <div className="flex-1">
              <p className="text-gray-900 font-semibold">
                Salesperson: <span className="font-normal text-gray-700">{invoiceData.salesperson}</span>
              </p>
              <p className="mt-2 text-gray-700 font-medium">Thanks for your business</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900 mb-1">Note:</p>
                <p className="text-gray-700 text-sm leading-relaxed">{invoiceData.note}</p>
              </div>
            </div>

            {/* Totals */}
            <div className="w-full max-w-xs">
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">{invoiceData.subtotal}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Discount:</span>
                  <span className="font-semibold text-gray-900">{invoiceData.discount}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Tax:</span>
                  <span className="font-semibold text-gray-900">{invoiceData.tax}</span>
                </div>
                <div className="flex justify-between pt-3 text-lg font-bold text-gray-900">
                  <span>Total:</span>
                  <span>{invoiceData.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-6 text-center text-sm text-gray-500 border-t border-gray-200">
          © 2025 Made With ❤️ By Pixinvent
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
