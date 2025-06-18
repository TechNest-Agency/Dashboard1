import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Newsletter Section */}
        <div className="col-span-1">
          <div className="flex flex-col space-y-4 mb-6">
            <img
              src="https://i.ibb.co/q3D7Z0Yp/novaDash.png"
              alt="NovaDash Logo"
              className="w-[180px] hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm text-gray-300">
              Most Powerful & Comprehensive Admin Template with Elegant Design & Unique Layouts.
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-1 rounded-md hover:bg-purple-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Demos Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Demos</h4>
          <ul className="space-y-3">
            {['Vertical Layout', 'Horizontal Layout', 'Bordered Layout', 'Semi Dark Layout', 'Dark Layout'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center transition-colors duration-300 group">
                  <svg className="w-4 h-4 mr-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pages</h4>
          <ul className="space-y-3">
            {[
              { name: 'Pricing', badge: false },
              { name: 'Payment', badge: true },
              { name: 'Checkout', badge: false },
              { name: 'Help Center', badge: false },
              { name: 'Login/Register', badge: false }
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="text-gray-300 hover:text-purple-400 flex items-center transition-colors duration-300 group">
                  <svg className="w-4 h-4 mr-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  {item.name}
                  {item.badge && (
                    <span className="ml-2 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full">New</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Download our app</h4>
          <div className="space-y-4">
            <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="h-10 w-full object-contain"
              />
            </a>
            <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="h-10 w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © 2025 PixInvent. Made With <span className="text-pink-500">♥</span> for a better web.
        </p>
        <div className="flex space-x-6">
          {[
            { icon: 'fab fa-facebook-f', color: 'text-blue-400' },
            { icon: 'fab fa-twitter', color: 'text-sky-400' },
            { icon: 'fab fa-instagram', color: 'text-pink-400' },
            { icon: 'fab fa-linkedin-in', color: 'text-blue-500' },
            { icon: 'fab fa-youtube', color: 'text-red-500' }
          ].map((social) => (
            <a 
              key={social.icon} 
              href="#" 
              className={`${social.color} text-xl hover:scale-125 transition-transform duration-300`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;