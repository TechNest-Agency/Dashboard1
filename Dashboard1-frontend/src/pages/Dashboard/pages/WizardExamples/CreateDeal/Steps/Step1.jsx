import { useState } from 'react';
import { FiPercent, FiDollarSign, FiStar, FiCheck, FiCalendar, FiMail, FiPhone, FiBell } from 'react-icons/fi';
const Step1 = ({ formData, setFormData, handleChange }) => {
    const dealData = [
  {
    id: 'percentage',
    icon: <FiPercent className="text-purple-500" />,
    title: 'Percentage',
    description: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
  },
  {
    id: 'flat',
    icon: <FiDollarSign className="text-purple-500" />,
    title: 'Flat Amount',
    description: 'Create a deal which offer uses some flat amount (i.e $5 OFF) on total.',
  },
  {
    id: 'prime',
    icon: <FiStar className="text-purple-500" />,
    title: 'Prime member',
    description: 'Create prime member only deal to encourage the prime members.',
  },
];
const [activeField, setActiveField] = useState(null);
    return (
        <div>
            <div className="mb-6">
                <img
                    src="https://images.unsplash.com/photo-1491897554428-130a60dd4757?w=800&h=200&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
                    alt="Limited-time offers"
                    className="w-full rounded-lg object-cover h-[200px]"
                />
            </div>

            <h2 className="text-xl font-semibold mb-4">Select Deal Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
  {dealData.map((deal) => (
    <div
      key={deal.id}
      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer ${
        formData.dealType === deal.id ? 'border-purple-500 bg-blue-50' : 'border-gray-200'
      }`}
      onClick={() => setFormData({ ...formData, dealType: deal.id })}
    >
      <div className="flex items-center mb-2 text-xl">
  
        {deal.icon}
      </div>
      <h3 className="font-medium">{deal.title}</h3>
      <p className="text-sm text-gray-500 text-center mb-2">{deal.description}</p>
            <input
          type="radio"
          name="dealType"
          value={deal.id}
          checked={formData.dealType === deal.id}
          onChange={handleChange}
          className="mr-2"
        />
    </div>
  ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  {/* Discount Field */}
  <div 
    onClick={() => setActiveField('discount')}
    onBlur={() => setActiveField(null)}
  >
    <label className={`block text-sm font-medium mb-1 ${
      activeField === 'discount' ? 'text-purple-600' : 'text-gray-700'
    }`}>
      Discount
    </label>
    <input
      type="number"
      name="discount"
      value={formData.discount}
      onChange={handleChange}
      onFocus={() => setActiveField('discount')}
      placeholder="25"
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
        activeField === 'discount' 
          ? 'border-purple-500 focus:ring-purple-500 focus:border-purple-500' 
          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      }`}
    />
    <p className={`mt-1 text-xs ${
      activeField === 'discount' ? 'text-purple-600' : 'text-gray-500'
    }`}>
      Enter the discount percentage. 10 = 10%
    </p>
  </div>

  {/* Region Field */}
  <div 
    onClick={() => setActiveField('region')}
    onBlur={() => setActiveField(null)}
  >
    <label className={`block text-sm font-medium mb-1 ${
      activeField === 'region' ? 'text-purple-600' : 'text-gray-700'
    }`}>
      Region
    </label>
    <select
      name="region"
      value={formData.region}
      onChange={handleChange}
      onFocus={() => setActiveField('region')}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
        activeField === 'region'
          ? 'border-purple-500 focus:ring-purple-500 focus:border-purple-500'
          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      }`}
    >
      <option value="">Select a region</option>
      {['Asia', 'Africa', 'Australia', 'Europe', 'North America', 'South America'].map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
    <p className={`mt-1 text-xs ${
      activeField === 'region' ? 'text-purple-600' : 'text-gray-500'
    }`}>
      Select applicable regions for the deal.
    </p>
  </div>
</div>
        </div>
    );
};

export default Step1;
