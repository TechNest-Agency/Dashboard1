import React from 'react';
import {
  CubeIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  BoltIcon,
  LifebuoyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const UsefulFeatures = ({ id }) => {
  const features = [
    {
      title: "Everything you need",
      description: "Not just a set of tools, the package includes ready-to-deploy conceptual application.",
      icon: <CubeIcon className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Quality Code",
      description: "Code structure that all developers will easily understand and fall in love with.",
      icon: <CodeBracketIcon className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Continuous Updates",
      description: "Free updates for the next 12 months, including new demos and features.",
      icon: <ArrowPathIcon className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "API Ready",
      description: "Just change the endpoint and see your own data loaded within seconds.",
      icon: <BoltIcon className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Excellent Support",
      description: "An easy-to-follow doc with lots of references and code examples.",
      icon: <LifebuoyIcon className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: "Starter Kit",
      description: "Start your project quickly without having to remove unnecessary features.",
      icon: <RocketLaunchIcon className="w-8 h-8 text-pink-600" />,
    }
  ];

  return (
    <div id={id} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Useful Features
          </span>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to start your next project
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="pt-10 pb-8 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-white flex items-center justify-center border border-gray-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulFeatures;