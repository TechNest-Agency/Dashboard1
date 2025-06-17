
export const OfferBanner = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 relative">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="flex items-start space-x-3">
        <div className="bg-green-500 rounded p-2 mt-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-green-700 font-semibold mb-1">Available Offer</h3>
          <p className="text-green-600 text-sm leading-relaxed">
            - 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards<br/>
            - 50% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
          </p>
        </div>
      </div>
    </div>
  );
};
