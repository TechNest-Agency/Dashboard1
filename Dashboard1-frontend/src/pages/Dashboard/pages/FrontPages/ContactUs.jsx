import React from 'react';

const ContactUs = () => {
    return (
        <div className="relative w-full bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                    Contact Us
                </span>

                {/* Heading and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Let's work together</h2>
                <p className="text-lg text-gray-600 mb-12">Any question or remark? Just write us a message</p>

                {/* Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="absolute -left-8 -top-8 w-16 h-16 bg-purple-100 rounded-full opacity-50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                        </div>
                        <img src="https://i.ibb.co/F4zQF2SW/contact-customer-service-4-NYAjuj-F.png" alt="Contact Support" className="rounded-lg " />
                        <div className="mt-4 flex space-x-4">
                            <div className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>example@gmail.com</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+123 568 963</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a message</h3>
                        <p className="text-gray-600 mb-6">If you would like to discuss anything related to payment, account, licensing, partnerships, or have pre-sales questions, you're at the right place.</p>
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Full Name" defaultValue="John Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email address" defaultValue="johndoe@gmail.com" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;