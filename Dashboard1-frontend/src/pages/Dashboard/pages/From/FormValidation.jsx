import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    number: '',
    digits: '',
    customRegex: '',
    url: '',
    alphaNumDash: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'name':
        if (value && !/^[a-zA-Z ]+$/.test(value)) error = 'Only alphabetic characters';
        break;
      case 'password':
        if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))
          error = 'Must contain uppercase, lowercase, number, special char, min 8 chars';
        break;
      case 'confirmPassword':
        if (value && value !== formData.password) error = 'Passwords must match';
        break;
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'confirmEmail':
        if (value && value !== formData.email) error = 'Emails must match';
        break;
      case 'number':
        if (value && (isNaN(value) || value < 10 || value > 20)) error = 'Must be between 10 and 20';
        break;
      case 'digits':
        if (value && !/^\d{3}$/.test(value)) error = 'Must be exactly 3 digits';
        break;
      case 'customRegex':
        if (value && !/x([0-9]):$/.test(value)) error = 'Must match pattern x[number]:';
        break;
      case 'url':
        if (value && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value))
          error = 'Must be a valid URL';
        break;
      case 'alphaNumDash':
        if (value && !/^[a-zA-Z0-9_-]+$/.test(value)) error = 'Only letters, numbers, dashes or underscores';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });
    
    if (isValid) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
            Advanced Form Validation
          </h1>
          <p className="text-lg text-gray-600">
            Beautiful form with visual feedback and helpful guidance
          </p>
        </div>

        <div className="bg-white rounded-2xl  overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                    alt="User Icon"
                    className="w-8 h-8 mr-3"
                  />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                        alt="Name Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                          alt="Name Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                        alt="Name Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your Name"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                          alt="Name Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Security Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" 
                    alt="Security Icon"
                    className="w-8 h-8 mr-3"
                  />
                  Account Security
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                        alt="Email Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@email.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                          alt="Email Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                        alt="Email Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Confirm Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.confirmEmail ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="admin@demo.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                          alt="Email Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.confirmEmail && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.confirmEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" 
                        alt="Password Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" 
                          alt="Password Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.password ? (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.password}
                      </p>
                    ) : (
                      <div className="mt-2 text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
                        <div className="flex items-center mb-1">
                          <img 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" 
                            alt="Info Icon"
                            className="w-3 h-3 mr-1"
                          />
                          Password requirements:
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Minimum 8 characters</li>
                          <li>At least one uppercase letter</li>
                          <li>At least one lowercase letter</li>
                          <li>At least one number</li>
                          <li>At least one special character</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" 
                        alt="Password Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Confirm Password"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" 
                          alt="Password Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Advanced Validation Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
                    alt="Advanced Icon"
                    className="w-8 h-8 mr-3"
                  />
                  Advanced Validation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3003/3003984.png" 
                        alt="Number Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Number (10-20)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.number ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter between 10-20"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3003/3003984.png" 
                          alt="Number Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.number && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.number}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="digits" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3003/3003984.png" 
                        alt="Digits Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      3 Digits Field
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="digits"
                        name="digits"
                        value={formData.digits}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.digits ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Exactly 3 digits"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/3003/3003984.png" 
                          alt="Digits Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.digits && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.digits}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="customRegex" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/2779/2779775.png" 
                        alt="Regex Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Custom Regex
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="customRegex"
                        name="customRegex"
                        value={formData.customRegex}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.customRegex ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Pattern: x[number]:"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/2779/2779775.png" 
                          alt="Regex Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.customRegex && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.customRegex}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" 
                        alt="URL Icon"
                        className="w-4 h-4 mr-2 opacity-70"
                      />
                      Website URL
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className={`mt-1 block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                          errors.url ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="https://example.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" 
                          alt="URL Icon"
                          className="h-4 w-4 text-gray-400"
                        />
                      </div>
                    </div>
                    {errors.url && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <img 
                          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
                          alt="Error Icon"
                          className="w-4 h-4 mr-1"
                        />
                        {errors.url}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
                    alt="Submit Icon"
                    className="w-6 h-6 mr-2"
                  />
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;