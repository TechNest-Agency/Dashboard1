 import { FiDollarSign } from 'react-icons/fi';

export default function WizardPriceDetails() {

  return (
    <div className=" space-y-6">
      {/*  Expected Price and Price Per SQFT */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Price</label>
          <div className="relative">
            <input
              type="number"
              defaultValue="25000"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Per SQFT</label>
          <div className="relative">
            <input
              type="number"
              defaultValue="500"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Maintenance Charge and Period */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Charge</label>
          <div className="relative">
            <input
              type="number"
              defaultValue="50"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Period</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
            <option value="">Select Maintenance Period</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Third Row - Booking Amount and Other Amount */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Booking/Token Amount</label>
          <div className="relative">
            <input
              type="number"
              defaultValue="250"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Amount</label>
          <div className="relative">
            <input
              type="number"
              defaultValue="500"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Show Price As Radio Buttons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Show Price As</label>
       <div className="flex flex-col md:flex-row gap-2 md: pt-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="priceDisplay"
            value="negotiable"
            className="h-4 w-4 text-purple-500 border-gray-300 focus:ring-purple-500"
          />
          <span className="ml-2 text-sm">Negotiable</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="priceDisplay"
            value="callForPrice"
            className="h-4 w-4 text-purple-500 border-gray-300 focus:ring-purple-500"
          />
          <span className="ml-2 text-sm">Call for price</span>
        </label>
      </div>
      </div>
    

      {/* Stamp Duty Checkbox */}
      <div className="pt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
          />
          <span className="ml-2 text-xs md:text-sm text-gray-700">Stamp duty and registration charges excluded</span>
        </label>
      </div>
    </div>
  );

}
