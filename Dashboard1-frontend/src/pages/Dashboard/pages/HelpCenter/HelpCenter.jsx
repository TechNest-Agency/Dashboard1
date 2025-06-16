import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Shield, 
  Film,
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  ArrowRight,
  HelpCircle,
  MailCheck,
  PhoneCall,
  MessageCircleMore,
  ShieldCheck,
  Video,
  ChevronRight
} from 'lucide-react';
import { MdCampaign } from "react-icons/md";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const helpTopics = [
    {
      icon: <MdCampaign className="h-6 w-6 text-indigo-600" />,
      title: "Proactive Campaigns",
      description: "Useful guidelines for using Proactive Campaigns features. Practical recommendations to the most common issues.",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <MailCheck className="h-6 w-6 text-blue-600" />,
      title: "Email Tracking",
      description: "Read this section for the peculiarities of tracking email opens in Zendesk (and more).",
      bgColor: "bg-blue-50"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: "GDPR Compliance",
      description: "Find out how to be GDPR & CCPA Compliant and solve customer requests faster using the app.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Video className="h-6 w-6 text-purple-600" />,
      title: "Video Reply",
      description: "Visit this category if you have any questions about Video Reply functions, or have an issue to resolve.",
      bgColor: "bg-purple-50"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Help Center Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
            <HelpCircle className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Help Center</h1>
          <p className="text-lg text-gray-600">What we may help you with?</p>
        </div>
        
        {/* Search Bar with Floating Label */}
        <div className="mb-12 mx-auto max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="How to track an email?"
              className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <kbd className="px-2 py-1 bg-gray-100 text-gray-500 text-sm rounded-md">⌘K</kbd>
            </div>
          </div>
        </div>
        
        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpTopics.map((topic, index) => (
            <div 
              key={index} 
              className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className={`${topic.bgColor} p-3 rounded-lg`}>
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-indigo-100 p-4 rounded-full mb-4">
            <MessageCircleMore className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Get in touch with us</h2>
          <p className="text-lg text-gray-600">Our friendly team would love to connect with you</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
          <form className="space-y-6 w-full md:w-1/2">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <User className="mr-2 h-5 w-5 text-gray-500" />
                Your name *
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
                required
              />
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Mail className="mr-2 h-5 w-5 text-gray-500" />
                Your email *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
                required
              />
            </div>
            
            {/* Phone Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <PhoneCall className="mr-2 h-5 w-5 text-gray-500" />
                Phone number *
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1-234-567-890"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
                required
              />
            </div>
            
            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <MessageSquare className="mr-2 h-5 w-5 text-gray-500" />
                Message *
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
                required
              ></textarea>
            </div>
            
            {/* Submit Button here*/}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-medium">Send Message</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.ibb.co/FkKpPv4j/getin.jpg"
              alt="Our friendly team"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;