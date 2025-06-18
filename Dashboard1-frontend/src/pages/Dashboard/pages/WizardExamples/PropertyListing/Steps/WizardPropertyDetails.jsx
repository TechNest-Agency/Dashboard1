import { FiHome, FiUser, FiBriefcase, FiDollarSign, FiMapPin, FiGlobe, FiNavigation } from 'react-icons/fi';
import { useState } from 'react';

const PropertyPostingForm = () => {
  const [selectedPurpose, setSelectedPurpose] = useState("sell");

  const purposeData = [
    {
      id: 'sell',
      icon: <FiDollarSign className="text-purple-500 text-2xl" />,
      title: 'Sell the property',
      description: 'Post your property for sale. Unlimited free listing.',
    },
    {
      id: 'rent',
      icon: <FiHome className="text-purple-500 text-2xl" />,
      title: 'Rent the property',
      description: 'Post your property for rent. Unlimited free listing.',
    },
  ];

  return (
    <div className="">
      {/* Purpose Selection Cards..................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {purposeData.map((purpose) => (
          <div
            key={purpose.id}
            className={`flex flex-col items-center justify-center border-2 rounded-lg p-6 cursor-pointer transition-all ${
              selectedPurpose === purpose.id 
                ? 'border-purple-500 bg-purple-50 shadow-md' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setSelectedPurpose(purpose.id)}
          >
            <div className="mb-3">
              {purpose.icon}
            </div>
            <h3 className="font-semibold text-lg text-center mb-2">{purpose.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-3">{purpose.description}</p>
            <input
              type="radio"
              name="propertyPurpose"
              value={purpose.id}
              checked={selectedPurpose === purpose.id}
              readOnly
              className=""
            />
          </div>
        ))}
      </div>

      {/* Property Details Form............... */}
      <div className="space-y-6">
        {/* Property Type and Zip Code.............. */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
              <option value="">Select Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input
              type="number"
              defaultValue="123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Country and ......... */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              defaultValue="California"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* City and Landmark ...........*/}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              defaultValue="Los Angeles"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
            <input
              type="text"
              defaultValue="Nr. Hard Rock Cafe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Full Width Address Field ...........*/}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PropertyPostingForm;