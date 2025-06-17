import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">One dashboard to manage all your business</h1>
                    <p className="text-lg md:text-xl mb-6">Production ready. Easy to use. Affordable & Reliable.</p>
                    <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                        Get Customizable
                    </button>
                    <span className="ml-4 text-sm">Join Community</span>
                </div>
                <div className="mt-6 md:mt-0">
                    <img src="https://via.placeholder.com/400x300" alt="Banner" className="w-full md:w-96 h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;