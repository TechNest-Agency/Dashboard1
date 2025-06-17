
export const CheckoutSummary = () => {
  return (
    <div className="space-y-6">
      {/* Offer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-gray-900 font-semibold mb-4">Offer</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Gift Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-gray-900 font-semibold mb-2">Buying gift for a loved one?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Gift wrap and personalized message on card, Only for $2.
        </p>
        <button className="text-blue-600 hover:text-blue-700 transition-colors">
          Add a gift wrap
        </button>
      </div>

      {/* Price Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-gray-900 font-semibold mb-4">Price Details</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Bag Total</span>
            <span className="text-gray-900">$1198.00</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Coupon Discount</span>
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              Apply Coupon
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Order Total</span>
            <span className="text-gray-900 font-semibold">$1198.00</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Delivery Charges</span>
            <span className="text-green-600">FREE</span>
          </div>
          
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-semibold text-lg">Total</span>
              <span className="text-gray-900 font-bold text-xl">$1198.00</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium mt-6">
          Place Order
        </button>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};
