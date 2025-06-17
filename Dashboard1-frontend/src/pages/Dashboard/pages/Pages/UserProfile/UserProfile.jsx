import React, { useState } from "react";
import {
  Users,
  Calendar,
  Star,
  MessageCircle,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Team", "Projects", "Connections"];

  const projects = [
    {
      name: "Web Development App",
      team: ["JD", "AB", "CD"],
      leader: "Esteban",
      progress: 76,
      status: "In Progress",
    },
    {
      name: "Mobile Logo Design",
      team: ["EF", "GH"],
      leader: "Oliver",
      progress: 25,
      status: "Planning",
    },
    {
      name: "Dashboard Design",
      team: ["IJ", "KL", "MN"],
      leader: "Keith",
      progress: 62,
      status: "In Progress",
    },
    {
      name: "Figma Website App",
      team: ["OP", "QR", "ST", "UV"],
      leader: "Melinda",
      progress: 8,
      status: "Planning",
    },
    {
      name: "Only Email App",
      team: ["WX", "YZ", "AB"],
      leader: "Harmonia",
      progress: 74,
      status: "In Progress",
    },
  ];

  const teamMembers = [
    {
      name: "React Developers",
      description:
        "We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
      members: ["JD", "AB", "CD", "EF"],
      status: "Developer",
      color: "bg-pink-100",
    },
    {
      name: "Vue.js Dev Team",
      description:
        "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
      members: ["GH", "IJ", "KL", "MN"],
      status: "Designer",
      color: "bg-green-100",
    },
    {
      name: "Creative Designers",
      description:
        "A design or product team is more than just the people on it. A team includes the tools, processes, and ways of being that allow the team to find its color.",
      members: ["OP", "QR", "ST"],
      status: "Creative",
      color: "bg-purple-100",
    },
    {
      name: "Digital Marketing",
      description:
        "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
      members: ["UV", "WX", "YZ"],
      status: "Marketing",
      color: "bg-blue-100",
    },
    {
      name: "Event",
      description:
        "Event is defined as a particular contest which is part of a larger contest which is often designed in that of the purpose of commerce and marketing of a company.",
      members: ["AB", "CD", "EF"],
      status: "Event",
      color: "bg-orange-100",
    },
    {
      name: "Figma Resources",
      description:
        "Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.",
      members: ["GH", "IJ", "KL"],
      status: "Figma",
      color: "bg-red-100",
    },
    {
      name: "Native Mobile App",
      description:
        "React Native lets you create user-friendly native apps with all the bells and whistles. Native applications look and feel quite good, giving the users more streamlined user experience.",
      members: ["MN", "OP", "QR"],
      status: "Mobile",
      color: "bg-cyan-100",
    },
    {
      name: "Only Beginners",
      description:
        "Learn new objects of tens standard web. From work is fast, all using a basic better gonna learn. If his web.",
      members: ["ST", "UV", "WX"],
      status: "Beginner",
      color: "bg-yellow-100",
    },
  ];

  const projectsDetailed = [
    {
      name: "Social Branding",
      type: "Brand Development Strategy",
      startDate: "12/05/22",
      totalBudget: "$24,500",
      deadline: "20/05/22",
      hours: 230,
      status: "In Progress",
      team: ["JD", "AB", "CD"],
      progress: 45,
    },
    {
      name: "Admin Template",
      type: "Admin Listing Portfolio",
      startDate: "18/04/22",
      totalBudget: "$2,500",
      deadline: "14/05/22",
      hours: 67,
      status: "Completed",
      team: ["EF", "GH"],
      progress: 100,
    },
    {
      name: "App Design",
      type: "UI/UX Designing Multimedia",
      startDate: "28/02/22",
      totalBudget: "$52,500",
      deadline: "15/03/22",
      hours: 142,
      status: "In Progress",
      team: ["IJ", "KL", "MN"],
      progress: 78,
    },
    {
      name: "Create Website",
      type: "Create Studio Website",
      startDate: "05/05/22",
      totalBudget: "$3,250",
      deadline: "20/05/22",
      hours: 87,
      status: "In Progress",
      team: ["OP", "QR"],
      progress: 65,
    },
    {
      name: "Figma Dashboard",
      type: "Create Figma Complex",
      startDate: "25/06/22",
      totalBudget: "$1,250",
      deadline: "28/06/22",
      hours: 108,
      status: "Completed",
      team: ["ST", "UV", "WX"],
      progress: 100,
    },
    {
      name: "Logo Design",
      type: "Create Stylish Newfound",
      startDate: "25/06/22",
      totalBudget: "$1,800",
      deadline: "30/06/22",
      hours: 88,
      status: "In Progress",
      team: ["YZ", "AB", "CD"],
      progress: 42,
    },
  ];

  const connections = [
    {
      name: "Mark Gilbert",
      role: "UI Designer",
      projects: 18,
      tasks: 834,
      connections: 129,
      avatar:
        "https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/assets/avatar-4-CtU30128.png",
    },
    {
      name: "Eugenia Moore",
      role: "Developer",
      projects: 112,
      tasks: "2.31k",
      connections: "1.28k",
      avatar: "EM",
    },
    {
      name: "Francis Byrd",
      role: "Developer",
      projects: 32,
      tasks: "1.25k",
      connections: 890,
      avatar: "FB",
    },
    {
      name: "Leon Lucas",
      role: "UI/UX Designer",
      projects: 86,
      tasks: "12.4k",
      connections: 890,
      avatar: "LL",
    },
    {
      name: "Jayden Rogers",
      role: "Full Stack Developer",
      projects: 244,
      tasks: "23.8k",
      connections: "2.14k",
      avatar: "JR",
    },
    {
      name: "Jocelyn Powell",
      role: "UI Designer",
      projects: 32,
      tasks: "1.28k",
      connections: "1.27k",
      avatar: "JP",
    },
  ];

  const activityTimeline = [
    {
      type: "schedule",
      title: "12 Invoices have been paid",
      time: "12 min ago",
    },
    {
      type: "download",
      title: "Client meeting",
      description: "Project meeting with john @10:15am",
      time: "45 min ago",
    },
    {
      type: "upload",
      title: "Create a new project for client",
      description: "Add files to new design folder",
      time: "2 days ago",
    },
  ];

  const renderProfile = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        {/* About */}
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <span className="font-medium">Full Name:</span> John Doe
            </div>
            <div>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-500">Active</span>
            </div>
            <div>
              <span className="font-medium">Role:</span> Developer
            </div>
            <div>
              <span className="font-medium">Country:</span> USA
            </div>
            <div>
              <span className="font-medium">Language:</span> English
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <span className="font-medium">Contact:</span> (123) 456-7890
            </div>
            <div>
              <span className="font-medium">Skype:</span> john.doe
            </div>
            <div>
              <span className="font-medium">Email:</span>{" "}
              john@studio-dashboard.com
            </div>
          </div>
        </div>

        {/* Recent Developers */}
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">Recent Developer</h3>
          <div className="space-y-3">
            <div className="text-sm">
              <span className="font-medium">React Component:</span> 13.2k
            </div>
            <div className="text-sm">
              <span className="font-medium">Vue Composition:</span> 4.8k
            </div>
            <div className="text-sm">
              <span className="font-medium">Progress Component:</span> 1.2k
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column */}
      <div className="space-y-6">
        {/* Activity Timeline */}
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
          <div className="space-y-4">
            {activityTimeline.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                    activity.type === "schedule"
                      ? "bg-blue-100 text-blue-600"
                      : activity.type === "download"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {activity.type === "schedule"
                    ? "📅"
                    : activity.type === "download"
                    ? "📥"
                    : "📤"}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  {activity.description && (
                    <p className="text-xs text-gray-500">
                      {activity.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Connections */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Connections</h3>
            <button className="text-blue-600 text-sm">
              View all connections
            </button>
          </div>
          <div className="space-y-3">
            {connections.slice(0, 5).map((person, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                    <img src={person.avatar} alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.role}</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm">Connect</button>
              </div>
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Teams</h3>
            <button className="text-blue-600 text-sm">View all Teams</button>
          </div>
          <div className="space-y-3">
            {teamMembers.slice(0, 4).map((team, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      index % 4 === 0
                        ? "bg-red-100"
                        : index % 4 === 1
                        ? "bg-green-100"
                        : index % 4 === 2
                        ? "bg-purple-100"
                        : "bg-blue-100"
                    }`}
                  >
                    {team.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{team.name}</p>
                    <p className="text-xs text-gray-500">{team.status}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {team.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">Project List</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="text-left py-2">PROJECT</th>
                  <th className="text-left py-2">LEADER</th>
                  <th className="text-left py-2">TEAM</th>
                  <th className="text-left py-2">PROGRESS</th>
                  <th className="text-left py-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-4 h-4 rounded ${
                            index % 5 === 0
                              ? "bg-red-500"
                              : index % 5 === 1
                              ? "bg-blue-500"
                              : index % 5 === 2
                              ? "bg-green-500"
                              : index % 5 === 3
                              ? "bg-purple-500"
                              : "bg-orange-500"
                          }`}
                        ></div>
                        <span>{project.name}</span>
                      </div>
                    </td>
                    <td className="py-3">{project.leader}</td>
                    <td className="py-3">
                      <div className="flex -space-x-1">
                        {project.team.map((member, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs border border-white"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-blue-600 h-1 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {project.progress}%
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-gray-400">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((team, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${team.color}`}
            >
              {team.name.charAt(0)}
            </div>
            <button className="text-gray-400">
              <Star size={16} />
            </button>
          </div>
          <h3 className="font-semibold text-lg mb-2">{team.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {team.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {team.members.map((member, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs border-2 border-white font-medium"
                >
                  {member}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  team.status === "Developer"
                    ? "bg-blue-100 text-blue-600"
                    : team.status === "Designer"
                    ? "bg-green-100 text-green-600"
                    : team.status === "Creative"
                    ? "bg-purple-100 text-purple-600"
                    : team.status === "Marketing"
                    ? "bg-orange-100 text-orange-600"
                    : team.status === "Event"
                    ? "bg-red-100 text-red-600"
                    : team.status === "Figma"
                    ? "bg-pink-100 text-pink-600"
                    : team.status === "Mobile"
                    ? "bg-cyan-100 text-cyan-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {team.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {projectsDetailed.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${
                index % 6 === 0
                  ? "bg-gray-400"
                  : index % 6 === 1
                  ? "bg-blue-500"
                  : index % 6 === 2
                  ? "bg-green-500"
                  : index % 6 === 3
                  ? "bg-red-500"
                  : index % 6 === 4
                  ? "bg-purple-500"
                  : "bg-orange-500"
              }`}
            >
              {project.name.charAt(0)}
            </div>
            <button className="text-gray-400">
              <MoreHorizontal size={16} />
            </button>
          </div>

          <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{project.type}</p>

          <div className="space-y-2 text-xs text-gray-600 mb-4">
            <div className="flex justify-between">
              <span>Start Date: {project.startDate}</span>
              <span>Deadline: {project.deadline}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Budget: {project.totalBudget}</span>
              <span>All Hours: {project.hours}:00</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>All Hours: {project.hours}:00</span>
              <span
                className={`px-2 py-1 rounded ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
              <div
                className={`h-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              {project.progress}% Completed
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.map((member, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs border-2 border-white font-medium"
                >
                  {member}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400">
                <MessageCircle size={16} />
              </button>
              <span className="text-xs text-gray-500">15</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderConnections = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {connections.map((person, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border text-center hover:shadow-lg transition-shadow"
        >
          <div
            className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold ${
              index % 6 === 0
                ? "bg-purple-500"
                : index % 6 === 1
                ? "bg-blue-500"
                : index % 6 === 2
                ? "bg-green-500"
                : index % 6 === 3
                ? "bg-red-500"
                : index % 6 === 4
                ? "bg-indigo-500"
                : "bg-pink-500"
            }`}
          >
            {person.avatar}
          </div>

          <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{person.role}</p>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <div className="font-bold text-lg">{person.projects}</div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
            <div>
              <div className="font-bold text-lg">{person.tasks}</div>
              <div className="text-xs text-gray-500">Tasks</div>
            </div>
            <div>
              <div className="font-bold text-lg">{person.connections}</div>
              <div className="text-xs text-gray-500">Connections</div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Connected
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <MessageCircle size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-32"></div>

      <div className="max-w-7xl mx-auto px-6 -mt-16">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/assets/avatar-1-DMk2FF1-.png"
                  alt="John Doe"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>👨‍💻 UI Designer</span>
                  <span>📍 Vatican City</span>
                  <span>📅 Joined April 2021</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Connected
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {activeTab === "Profile" && renderProfile()}
          {activeTab === "Team" && renderTeam()}
          {activeTab === "Projects" && renderProjects()}
          {activeTab === "Connections" && renderConnections()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
