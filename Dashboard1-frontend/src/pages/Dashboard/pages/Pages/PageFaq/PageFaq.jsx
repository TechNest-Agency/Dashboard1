import React from "react";
import { Search, Phone, Mail } from "lucide-react";

const PageFaq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-60 -translate-x-8 -translate-y-8"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-purple-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-30 translate-x-16"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello, how can we help?
          </h1>
          <p className="text-gray-600 text-lg">
            or choose a category to quickly find the help you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Articles..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Question Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Question
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            You still have a question?
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            If you can't find question in our FAQ, you can contact us. We'll
            answer you shortly!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* Phone Contact */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-white/50">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              + (810) 2548 2568
            </h3>
            <p className="text-gray-600">We are always happy to help!</p>
          </div>

          {/* Email Contact */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-white/50">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              hello@help.com
            </h3>
            <p className="text-gray-600">Best way to get answer faster!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFaq;
