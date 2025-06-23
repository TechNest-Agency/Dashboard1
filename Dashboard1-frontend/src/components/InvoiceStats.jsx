import { Users, FileText, CheckCircle, XCircle } from 'lucide-react';

const InvoiceStats = () => {
  const stats = [
    {
      title: "Clients",
      value: "24",
      icon: Users,
      color: "text-[#7367f0]/90 bg-[#7367f0]/10"
    },
    {
      title: "Invoices",
      value: "165",
      icon: FileText,
      color: "text-[#7367f0]/90 bg-[#7367f0]/10"
    },
    {
      title: "Paid",
      value: "$2.46k",
      icon: CheckCircle,
      color: "text-green-500 bg-green-500/10"
    },
    {
      title: "Unpaid",
      value: "$876",
      icon: XCircle,
      color: "text-red-500 bg-red-500/10"
    }
  ];

  return (
    <div className="flex gap-6 mb-8 overflow-x-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow min-w-[180px] flex-shrink-0"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
              </div>
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${stat.color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvoiceStats;
