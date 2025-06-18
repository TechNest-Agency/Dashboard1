
import React, { useState } from 'react';
import { FiPercent, FiDollarSign, FiStar, FiCheck, FiCalendar, FiMail, FiPhone, FiBell } from 'react-icons/fi';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';

const WizardCreateDeal= () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    dealType: '',
    discount: '',
    region: '',
    dealTitle: '',
    dealCode: '',
    dealDescription: '',
    offeredItems: [],
    cartCondition: '',
    dealDuration: '',
    notifyUsers: [],
    userTypes: '',
    maxUsers: '',
    minCartAmount: '',
    promotionFee: '',
    paymentMethod: '',
    dealStatus: '',
    limitDiscount: false,
    confirmed: false
  });

  const steps = [
    { id: 1, title: 'Deal Type', description: 'Choose type of deal', icon: <FiPercent /> },
    { id: 2, title: 'Deal Details', description: 'Provide deal details', icon: <FiCheck /> },
    { id: 3, title: 'Deal Usage', description: 'Limitations & Offers', icon: <FiCalendar /> },
    { id: 4, title: 'Review & Complete', description: 'Launch a deal', icon: <FiStar /> }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
   console.log(e);
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Stepper................ */}
          <div className="lg:w-1/3 p-4 bg-gray-50">
            <div className="flex gap-3 flex-col">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-3 flex-row items-center">
                  <div className={` w-10 h-10 rounded-full flex items-center justify-center 
                    ${currentStep >= step.id ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {step.icon}
                  </div>
                  <div className="ml-3 ">
                    <h3 className={`text-base font-medium ${currentStep >= step.id ? 'text-pbg-purple-600' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
               
                </div>
              ))}
            </div>
          </div>

          {/* Form Content ..................*/}
          <div className="lg:w-2/3 p-4">
            <form onSubmit={handleSubmit}>
              {/* Render current step component */}
              {currentStep === 1 && (
                <Step1
                  formData={formData} 
                  setFormData={setFormData} 
                  handleChange={handleChange} 
                />
              )}
              {currentStep === 2 && (
                <Step2 
                  formData={formData} 
                  handleChange={handleChange} 
                />
              )}
              {currentStep === 3 && (
                <Step3 
                  formData={formData} 
                  setFormData={setFormData} 
                  handleChange={handleChange} 
                />
              )}
              {currentStep === 4 && (
                <Step4 
                  formData={formData} 
                  setFormData={setFormData} 
                />
              )}

              {/* Navigation Buttons................ */}
              <div className="flex justify-between mt-8 border-t pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Previous
                  </button>
                )}
                {currentStep < steps.length && (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentStep === 1 && !formData.dealType}
                    className={`ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentStep === 1 && !formData.dealType ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Next
                  </button>
                )}
                {currentStep === steps.length && (
                  <button
                    type="submit"
                    disabled={!formData.confirmed}
                    className={`ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${!formData.confirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardCreateDeal;

