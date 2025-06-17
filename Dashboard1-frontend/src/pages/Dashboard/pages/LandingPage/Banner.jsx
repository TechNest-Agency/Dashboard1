import React, { useState, useEffect } from 'react';

const Banner = () => {
    const images = [
        "https://i.ibb.co/Sw8bm84w/Screenshot-2025-06-17-185027.png",
        "https://i.ibb.co/mCvgYJjT/Screenshot-2025-06-17-192838.png",
        "https://i.ibb.co/MkzG0DXb/Screenshot-2025-06-17-192816.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full bg-purple-100 rounded-b-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full filter blur-[100px] opacity-40 animate-float-slow"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-[100px] opacity-40 animate-float-slow-reverse"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Text content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    One dashboard to manage all your business
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-gray-700">
                                Production ready. Easy to use. Affordable & Reliable.
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-medium">
                                    Trusted by 10,000+ businesses worldwide
                                </span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-200">
                                    <span className="relative z-10">Get Customizable</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                                </button>
                                <a href="#" className="flex items-center group">
                                    <span className="mr-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-medium group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-300">
                                        Join Community
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Foreground image with sliding animation */}
                        <div className="flex-1 max-w-md lg:max-w-3xl w-full mt-10 lg:mt-0">
                            <div className="relative group animate-float">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl filter blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white border-opacity-20 transition-all duration-500 group-hover:scale-105">
                                    <img 
                                        src={images[currentImageIndex]} 
                                        alt="Dashboard preview" 
                                        className="w-full h-auto transform transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add these styles to your global CSS or style tag */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-10px) translateX(10px);
                    }
                }
                @keyframes float-slow-reverse {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(10px) translateX(-10px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-float-slow-reverse {
                    animation: float-slow-reverse 9s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Banner;