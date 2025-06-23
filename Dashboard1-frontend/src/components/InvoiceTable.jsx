import { Eye, Trash2, MoreHorizontal } from 'lucide-react';

const InvoiceTable = () => {
  const invoices = [
    {
      id: "#5036",
      status: "paid",
      client: "Andrew Burns",
      email: "pwillis@cross.org",
      avatar: "AB",
      avatarColor: "bg-purple-600",  // Changed to purple-blue vibe
      total: "$3171",
      issuedDate: "2025-06-19",
      balance: "-$205"
    },
    {
      id: "#5035", 
      status: "draft",
      client: "Dana Carey",
      email: "jamesjoel@chapman.net",
      avatar: "DC",
      avatarColor: "bg-purple-600",
      total: "$4263",
      issuedDate: "2025-06-20", 
      balance: "$762"
    },
    {
      id: "#5034",
      status: "paid",
      client: "Tammy Sanchez",
      email: "eric47@george-castillo.com",
      avatar: "TS",
      avatarColor: "bg-green-600",
      total: "$4836",
      issuedDate: "2025-06-10",
      balance: "Paid"
    },
    {
      id: "#5033",
      status: "pending",
      client: "Lori Wells",
      email: "calvin07@joseph-edwards.org",
      avatar: "LW",
      avatarColor: "bg-purple-600", // Adjusted to violet for theme cohesion
      total: "$2869",
      issuedDate: "2025-06-12",
      balance: "Paid"
    },
    {
      id: "#5032",
      status: "overdue",
      client: "Richard Payne",
      email: "ywagner@jones.com",
      avatar: "RP",
      avatarColor: "bg-red-600",
      total: "$5181",
      issuedDate: "2025-06-30",
      balance: "Paid"
    },
    {
      id: "#5031",
      status: "pending",
      client: "Jennifer Summers",
      email: "john77@anderson.net",
      avatar: "JS",
      avatarColor: "bg-purple-600", // Use purple variants for consistency
      total: "$3313",
      issuedDate: "2025-06-21",
      balance: "Paid"
    },
    {
      id: "#5030",
      status: "draft",
      client: "Justin Richardson",
      email: "jeffrey25@martinez-hodge.com", 
      avatar: "JR",
      avatarColor: "bg-indigo-600",
      total: "$5565",
      issuedDate: "2025-06-07",
      balance: "Paid"
    },
    {
      id: "#5029",
      status: "paid",
      client: "Nicholas Tanner",
      email: "desiree61@kelly.com",
      avatar: "NT",
      avatarColor: "bg-teal-600",
      total: "$3851",
      issuedDate: "2025-06-29",
      balance: "Paid"
    },
    {
      id: "#5028",
      status: "paid",
      client: "Crystal Mays",
      email: "robertscott@garcia.com",
      avatar: "CM",
      avatarColor: "bg-cyan-600",
      total: "$3325",
      issuedDate: "2025-06-18",
      balance: "$361"
    },
    {
      id: "#5027",
      status: "sent",
      client: "Mary Garcia",
      email: "gjordan@fernandez-coleman.com",
      avatar: "MG",
      avatarColor: "bg-yellow-600",
      total: "$2719",
      issuedDate: "2025-06-13",
      balance: "Paid"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      paid: { color: 'bg-green-500 text-white', icon: '✔' },
      pending: { color: 'bg-orange-500 text-white', icon: '⏳' },
      draft: { color: 'bg-violet-500 text-white', icon: '📝' }, // Violet tone for draft
      overdue: { color: 'bg-red-500 text-white', icon: '⚠' },
      sent: { color: 'bg-indigo-500 text-white', icon: '📤' }
    };

    const config = statusConfig[status] || statusConfig.draft;

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.color}`}>
        <span className="mr-1">{config.icon}</span>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-purple-200 shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-violet-600 font-semibold hover:underline cursor-pointer">
                    {invoice.id}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(invoice.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${invoice.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {invoice.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{invoice.client}</div>
                      <div className="text-sm text-gray-500">{invoice.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{invoice.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.issuedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {invoice.balance === "Paid" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500 text-white">
                      Paid
                    </span>
                  ) : (
                    <span className="text-sm text-gray-900">{invoice.balance}</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 rounded hover:bg-purple-100 text-gray-500 hover:text-purple-700 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded hover:bg-purple-100 text-gray-500 hover:text-purple-700 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded hover:bg-purple-100 text-gray-500 hover:text-purple-700 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
