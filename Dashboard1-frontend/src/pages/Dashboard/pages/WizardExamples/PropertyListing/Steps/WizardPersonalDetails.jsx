import { FiHome, FiUser, FiBriefcase, FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

const roleData = [
  {
    id: 'builder',
    icon: <FiHome className="text-purple-500 text-2xl" />,
    title: 'I am the builder',
    description: 'List property as Builder, list your project and get highest reach fast.',
  },
  {
    id: 'owner',
    icon: <FiUser className="text-purple-500 text-2xl" />,
    title: 'I am the owner',
    description: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
  },
  {
    id: 'broker',
    icon: <FiBriefcase className="text-purple-500 text-2xl" />,
    title: 'I am the broker',
    description: 'Earn highest commission by listing your clients properties at best price.',
  },
];

export default function WizardPersonalDetails() {
 const [selectedRole, setSelectedRole] = useState('builder');


  return (
    <div className="">
      {/* Role Selection Cards.............. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {roleData.map((role) => (
          <div
            key={role.id}
            className={`flex flex-col items-center justify-center border-2 rounded-lg p-6 cursor-pointer transition-all ${
              selectedRole === role.id 
                ? 'border-purple-500 bg-purple-50 shadow-md' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <div className="mb-3">
              {role.icon}
            </div>
            <h3 className="font-semibold text-lg text-center mb-2">{role.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-3">{role.description}</p>
            <input
              type="radio"
              name="propertyRole"
              value={role.id}
              checked={selectedRole === role.id}
              readOnly
              className=""
            />
          </div>
        ))}
      </div>

      {/* Form Section ..........................*/}
      <div className="space-y-6">
        {/*  Name Fields ..........*/}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Username and Password............. */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              defaultValue="Johndoe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
           <div className="relative">
  <input
  type='password'
    placeholder="Enter Password"
    className="w-full text-base px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
  />
  <button
    type="button"
    className="absolute inset-y-0 right-0 pr-3 flex items-center"
   
  >
   
  </button>
</div>
          </div>
        </div>

        {/* Email and Contact................. */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="john.doe@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              placeholder="+12390542345"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



