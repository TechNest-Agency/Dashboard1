import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sophie Gilbert",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      accentColor: "bg-purple-200",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Paul Miles",
      role: "UI Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      accentColor: "bg-blue-200",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Nannie Ford",
      role: "Development Lead",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      accentColor: "bg-pink-200",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Chris Watkins",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      accentColor: "bg-green-200",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Our Dream Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Creative Minds</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            The talented people behind the magic that makes everything possible
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image with colored frame */}
              <div className={`relative h-64 overflow-hidden ${member.accentColor}`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social links overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-purple-300 transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-blue-300 transition-colors">
                      <FaTwitter size={20} />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-gray-300 transition-colors">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <div className="w-16 h-1 bg-purple-200 mx-auto mb-4"></div>
                <p className="text-sm text-gray-600">
                  {member.role === "Project Manager" && "Leads our projects with precision and vision"}
                  {member.role === "UI Designer" && "Creates beautiful, intuitive interfaces"}
                  {member.role === "Development Lead" && "Turns designs into flawless code"}
                  {member.role === "Marketing Manager" && "Tells our story to the world"}
                </p>
              </div>

              {/* Accent corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${member.accentColor} clip-path-triangle`}></div>
            </div>
          ))}
        </div>

      
      </div>

      {/* Custom CSS for triangle corner */}
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(0 0, 100% 100%, 100% 0);
        }
      `}</style>
    </div>
  );
};

export default MeetOurTeam;

