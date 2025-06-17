/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "A simple start for everyone",
      price: 0,
      icon: "🐷",
      features: [
        "100 responses a month",
        "Unlimited forms and surveys",
        "Unlimited fields",
        "Basic form creation tools",
        "Up to 2 subdomains",
      ],
      buttonText: "Your Current Plan",
      buttonStyle: "bg-green-100 text-green-700 cursor-default",
      popular: false,
    },
    {
      name: "Standard",
      description: "For small to medium businesses",
      price: isAnnual ? 44 : 49,
      icon: "🎯",
      features: [
        "Unlimited responses",
        "Unlimited forms and surveys",
        "Instagram profile page",
        "Google Docs integration",
        'Custom "Thank you" page',
      ],
      buttonText: "Upgrade",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Solution for big organizations",
      price: isAnnual ? 89 : 99,
      icon: "🚀",
      features: [
        "PayPal payments",
        "Logic Jumps",
        "File upload with 5GB storage",
        "Custom domain support",
        "Stripe integration",
      ],
      buttonText: "Upgrade",
      buttonStyle: "bg-purple-200 text-purple-700 hover:bg-purple-300",
      popular: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          All plans include 40+ advanced tools and features to boost your
          product.
          <br />
          Choose the best plan to fit your needs.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-purple-600 text-sm mr-4">
            💰 Save up to 10%
          </span>
          <div className="flex items-center space-x-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual ? "text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              Annually
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl border-2 p-8 ${
              plan.popular ? "border-blue-500 shadow-lg" : "border-gray-200"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-gray-500 text-lg">$</span>
                <span className="text-5xl font-bold text-purple-600 mx-1">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-lg">/month</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
