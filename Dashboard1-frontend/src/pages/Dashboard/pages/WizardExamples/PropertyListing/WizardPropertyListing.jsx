import React, { useState } from 'react'
import WizardPropertyArea from './Steps/WizardPropertyArea'
import WizardPersonalDetails from './Steps/WizardPersonalDetails'
import WizardPropertyDetails from './Steps/WizardPropertyDetails'
import WizardPropertyFeatures from './Steps/WizardPropertyFeatures'
import WizardPriceDetails from './Steps/WizardPriceDetails'
  import { FiUser, FiHome, FiLayers, FiMapPin, FiDollarSign } from 'react-icons/fi';

export default function WizardPropertyListing() {
 const [currentStep, setCurrentStep] = useState(1);
const steps = [
  { 
    id: 1, 
    title: 'Personal Details', 
    description: 'Your Name/Email', 
    icon: <FiUser className=" text-xl" /> 
  },
  { 
    id: 2, 
    title: 'Property Details', 
    description: 'Property Type', 
    icon: <FiHome className=" text-xl" /> 
  },
  { 
    id: 3, 
    title: 'Property Features', 
    description: 'Bedrooms/Floor No', 
    icon: <FiLayers className=" text-xl" /> 
  },
  { 
    id: 4, 
    title: 'Property Area', 
    description: 'Covered Area', 
    icon: <FiMapPin className=" text-xl" /> 
  },
  { 
    id: 5, 
    title: 'Price Details', 
    description: 'Expected Price', 
    icon: <FiDollarSign className=" text-xl" /> 
  }
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

   const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>  <div className="">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Stepper................ */}
          <div className="lg:w-1/3 p-4 bg-gray-50">
            <div className="flex justify-start flex-col gap-3">
              {steps.map((step) => (
                <div key={step.id} className="flex  gap-3 justify-start flex-row items-center">
                  <div className={` w-10 h-10 rounded-full flex items-center justify-center 
                    ${currentStep >= step.id ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {step.icon}
                  </div>
                  <div className="ml-3 text-left">
                    <h3 className={`text-sm font-medium ${currentStep >= step.id ? 'text-pbg-purple-600' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500">{step.description}</p>
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
                 <WizardPersonalDetails/>
              
              )}
              {currentStep === 2 && (
                <WizardPropertyDetails/>
              
            
              )}
              {currentStep === 3 && (
               <WizardPropertyFeatures/>
   
              )}
              {currentStep === 4 && (
                   <WizardPropertyArea/>
            
              )}
               {currentStep === 5 && (
                 <WizardPriceDetails></WizardPriceDetails>
              
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
                    className={`ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 $`}
                  >
                    Next
                  </button>
                )}
                {currentStep === steps.length && (
                  <button
                    type="submit"
                    className={`ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 $`}
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
      
     
     
    
    </div>
  )
}
