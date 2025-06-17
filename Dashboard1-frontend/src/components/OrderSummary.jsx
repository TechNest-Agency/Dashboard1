
export const OrderSummary = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
        
        <p className="text-gray-600 mb-8">
          It can help you manage and service orders before, during, and after fulfillment.
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 text-sm mb-2">A simple start for everyone</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">$59.99</span>
              <span className="text-gray-600">/month</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
            Change Plan
          </button>

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subscription</span>
              <span className="text-gray-900 font-medium">$85.99</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-900 font-medium">$4.99</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold">Total</span>
                <span className="text-gray-900 font-bold text-xl">$90.98</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
            <span>Proceed With Payment</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-xs text-gray-500 text-center">
            By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable.
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};
