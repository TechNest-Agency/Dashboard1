import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const WhatPeopleSay = () => {
  const testimonials = [
    {
      id: 1,
      logo: 'https://logo.clearbit.com/airbnb.com',
      name: 'Airbnb',
      text: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
      person: {
        name: 'Eugenia Moore',
        title: 'CTO of Airbnb',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      rating: 5
    },
    {
      id: 2,
      logo: 'https://logo.clearbit.com/hubspot.com',
      name: 'HubSpot',
      text: "This template is really clean & well documented. The docs are really easy to understand and it's always easy to find a screenshot from their website.",
      person: {
        name: 'Eugenia Moore',
        title: 'Founder of HubSpot',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      rating: 4
    },
    {
      id: 3,
      logo: 'https://logo.clearbit.com/dribbble.com',
      name: 'Dribbble',
      text: "This template is superior in so many ways. The code, the design, the regular updates, the support...It's the whole package. Excellent Work.",
      person: {
        name: 'Curtis Fletcher',
        title: 'Design Lead at Dribbble',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState(testimonials[0]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <FaStar className="mr-2 text-yellow-400" />
            Trusted by Thousands
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Small cards */}
          <div className="lg:w-2/5 space-y-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                onClick={() => setActiveTestimonial(testimonial)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeTestimonial.id === testimonial.id ? 'bg-white shadow-lg border-l-4 border-purple-500' : 'bg-gray-50 hover:bg-white hover:shadow-md'}`}
              >
                <div className="flex items-center">
                  <img 
                    src={testimonial.person.avatar} 
                    alt={testimonial.person.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.person.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.person.title}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} ml-1`} 
                        size={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Active testimonial */}
          <div className="lg:w-3/5 bg-white p-10 rounded-2xl  relative overflow-hidden">
            <div className="absolute top-0 right-0 text-gray-100 text-9xl -mt-6 -mr-6 opacity-10">
              <FaQuoteLeft />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img 
                  src={activeTestimonial.logo} 
                  alt={activeTestimonial.name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeTestimonial.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < activeTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "{activeTestimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={activeTestimonial.person.avatar} 
                  alt={activeTestimonial.person.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-purple-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{activeTestimonial.person.name}</p>
                  <p className="text-purple-600">{activeTestimonial.person.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl ">
            <p className="text-4xl font-bold text-purple-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl ">
            <p className="text-4xl font-bold text-purple-600 mb-2">10K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white p-6 rounded-xl ">
            <p className="text-4xl font-bold text-purple-600 mb-2">98%</p>
            <p className="text-gray-600">Would Recommend</p>
          </div>
          <div className="bg-white p-6 rounded-xl ">
            <p className="text-4xl font-bold text-purple-600 mb-2">24/7</p>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;