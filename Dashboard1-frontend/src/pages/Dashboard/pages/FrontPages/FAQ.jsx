import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you charge for each upgrade?",
      answer:
        "No, upgrades are typically included with your license. However, major version updates may require a renewal fee depending on your plan.",
    },
    {
      question: "Do I need to purchase a license for each website?",
      answer:
        "Our standard license allows you to use the product on one website. If you need to use it on multiple websites, you'll need to purchase additional licenses or consider our extended license option.",
    },
    {
      question: "What is regular license?",
      answer:
        "The regular license is our standard offering that allows you to use the product on a single website or application. It's perfect for individual projects or small businesses.",
    },
    {
      question: "What is extended license?",
      answer:
        "The extended license allows for broader usage, including use in products that will be sold to multiple end users. This is ideal for SaaS applications, themes/templates for resale, or large enterprises.",
    },
    {
      question: "Which license is applicable for SaaS application?",
      answer:
        "For SaaS applications where the product will be used by multiple end users, you'll need our extended license. This ensures proper coverage for your business model.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
       

        {/* Heading and Subtitle */}
        <div className="text-center mb-12">
           {/* Section Title */}
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4 text-center">
          FAQ
        </span>
          <p className="text-lg text-gray-600">
            Browse through these FAQs to find answers to commonly asked
            questions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section (Right) */}
          <div className="relative">
            <img
              src="https://i.ibb.co/dwYySj0P/faq-boy-with-logos-BVjkzf-t.png"
              alt="FAQ Illustration"
              className="rounded-lg mx-auto w-[300px]"
            />
            <div className="absolute -top-8 -left-8 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-red-200 rounded-full flex items-center justify-center opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-green-200 rounded-full flex items-center justify-center opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="absolute bottom-8 left-1/3 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          {/* FAQ Section (Left) */}
          <div className="bg-white p-6 rounded-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <FiChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
