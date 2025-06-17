
const PaymentMethodSelector = ({ selectedMethod, onMethodChange }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onMethodChange("credit-card")}
          className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 ${
            selectedMethod === "credit-card"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === "credit-card" ? "border-blue-500" : "border-gray-400"
          }`}>
            {selectedMethod === "credit-card" && (
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white border border-gray-200 rounded px-2 py-1 shadow-sm">
              <span className="text-blue-600 font-bold text-sm">VISA</span>
            </div>
            <span className="text-gray-900 font-medium">Credit Card</span>
          </div>
        </button>

        <button
          onClick={() => onMethodChange("paypal")}
          className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 ${
            selectedMethod === "paypal"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedMethod === "paypal" ? "border-blue-500" : "border-gray-400"
          }`}>
            {selectedMethod === "paypal" && (
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 rounded px-2 py-1">
              <span className="text-white font-bold text-sm">PayPal</span>
            </div>
            <span className="text-gray-900 font-medium">PayPal</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export { PaymentMethodSelector };
