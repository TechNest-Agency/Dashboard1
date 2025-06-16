

import { useState } from "react"
import { Doughnut } from "react-chartjs-2"
import {
  FiBook,
  FiClock,
  FiAward,
  FiCalendar,
  FiFilm,
  FiCode,
  FiLayers,
  FiSearch,
  FiCheckCircle,
  FiTrendingUp,
  FiStar,
  FiMoreHorizontal,
  FiMic,
  FiCamera,
  FiChevronRight,
  FiTarget,
  FiActivity,
  FiZap,
 
  FiPlay,
} from "react-icons/fi"
import { IoTrophyOutline } from "react-icons/io5";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const Academy = () => {
  const [searchTerm, setSearchTerm] = useState("")

  
  const timeSpentData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: ["#8B5CF6", "#F3F4F6"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  }

 
  const courses = [
    {
      name: "Basics of Angular",
      instructor: "Lauretta Cole",
      time: "17h 34m",
      progress: 76,
      status: "19/25",
      icon: <FiLayers className="text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      name: "UI/UX Design",
      instructor: "Maybelle Zmitrovich",
      time: "19h 17m",
      progress: 92,
      status: "48/52",
      icon: <FiCode className="text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      name: "React Native",
      instructor: "Gertie Langwade",
      time: "16h 16m",
      progress: 87,
      status: "87/100",
      icon: <FiCode className="text-green-600" />,
      color: "bg-green-100",
    },
    {
      name: "Art & Drawing",
      instructor: "Estella Chace",
      time: "15h 49m",
      progress: 66,
      status: "33/50",
      icon: <FiFilm className="text-orange-600" />,
      color: "bg-orange-100",
    },
    {
      name: "Basic Fundamentals",
      instructor: "Benedetto Rossiter",
      time: "12h 42m",
      progress: 100,
      status: "Completed",
      icon: <FiBook className="text-emerald-600" />,
      color: "bg-emerald-100",
      completed: true,
    },
  ]

  const topCourses = [
    {
      name: "Videography Basic Design",
      views: "1.2k",
      icon: <FiCamera className="text-white" />,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      trend: "+12%",
    },
    {
      name: "Basic Front-end Development",
      views: "834",
      icon: <FiCode className="text-white" />,
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      trend: "+8%",
    },
    {
      name: "Basic Fundamentals of Programming",
      views: "3.7k",
      icon: <FiBook className="text-white" />,
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      trend: "+24%",
    },
    {
      name: "Advance Dribble Base VI",
      views: "2.5k",
      icon: <FiLayers className="text-white" />,
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      trend: "+15%",
    },
    {
      name: "Your First Singing Lesson",
      views: "948",
      icon: <FiMic className="text-white" />,
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-500",
      trend: "+6%",
    },
  ]

  

  const assignments = [
    {
      name: "User Experience Design",
      progress: 72,
      tasks: 120,
      color: "stroke-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      name: "Basic fundamentals",
      progress: 48,
      tasks: 32,
      color: "stroke-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      name: "React Native components",
      progress: 15,
      tasks: 182,
      color: "stroke-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      name: "Basic of music theory",
      progress: 24,
      tasks: 56,
      color: "stroke-cyan-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
    },
  ]

  
  // Circular Progress Component
  const CircularProgress = ({ progress, color, size = 60 }) => {
    const radius = (size - 8) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={color}
            style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-800">{progress}%</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 p-4 md:p-6 font-inter">
      {/* Welcome Section */}
      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl    border border-white/20 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-24 -translate-x-24 opacity-50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome back, Felecia
              </h1>
              <span className="text-3xl animate-bounce">👋</span>
            </div>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl">
              Your progress this week is{" "}
              <span className="font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Awesome</span>. Let's
              keep it up and get a lot of points reward!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiClock className="text-purple-600" />,
                  label: "Hours Spent",
                  value: "34h",
                  change: "+2.5h",
                  color: "purple",
                },
                {
                  icon: <FiAward className="text-blue-600" />,
                  label: "Test Results",
                  value: "82%",
                  change: "+5%",
                  color: "blue",
                },
                {
                  icon: <FiBook className="text-green-600" />,
                  label: "Course Completed",
                  value: "14",
                  change: "+3",
                  color: "green",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl bg-${stat.color}-100 group-hover:scale-110 transition-transform duration-300 `}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-2xl text-gray-800">{stat.value}</p>
                        <span className="text-green-500 text-sm font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                          <FiTrendingUp className="w-3 h-3" />
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/40 text-center min-w-[280px] ">
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">Time Spending</p>
              <p className="text-sm text-gray-500">Weekly Report</p>
            </div>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Doughnut
                data={timeSpentData}
                options={{
                  cutout: "75%",
                  plugins: { legend: { display: false }, tooltip: { enabled: false } },
                  maintainAspectRatio: false,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-bold text-2xl text-gray-800">23h</p>
                <p className="text-sm text-gray-500">14m</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-green-500 font-medium flex items-center justify-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                <FiTrendingUp className="w-4 h-4" />
                +18.4%
              </p>
              <p className="text-sm text-gray-500">23h Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid - Reduced Height */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Learning Stats Section */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl  border border-white/20 h-[390px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Top Courses</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <FiMoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="space-y-3 flex-1 overflow-y-auto">
              {topCourses.map((course, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl hover:bg-white hover:  transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-lg ${course.bgColor} group-hover:scale-110 transition-transform duration-300  `}
                  >
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors text-sm truncate">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 font-medium">{course.views} Views</span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Webinar Section */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl  border border-white/20 overflow-hidden h-[390px] flex flex-col">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 text-center flex-shrink-0">
              <img
                src="https://i.ibb.co/vvx8wHmS/laptop-girl-gi-Hg-UAn-M.png"
                alt="Webinar Illustration"
                className="w-20 h-20 mx-auto mb-2 object-contain"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">Upcoming Webinar</h2>
              <div className="mb-4 text-center flex-1">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">Next Generation Frontend Architecture</h3>
                <p className="text-gray-600 text-xs">Using Layout Engine And Vue.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="p-1 bg-purple-100 rounded-md">
                      <FiCalendar className="text-purple-600 w-3 h-3" />
                    </div>
                  </div>
                  <p className="font-bold text-gray-800 text-sm">17 Nov 23</p>
                  <p className="text-xs text-gray-500">Date</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="p-1 bg-purple-100 rounded-md">
                      <FiClock className="text-purple-600 w-3 h-3" />
                    </div>
                  </div>
                  <p className="font-bold text-gray-800 text-sm">32 Minutes</p>
                  <p className="text-xs text-gray-500">Duration</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300  text-sm">
                <FiPlay className="w-4 h-4" />
                Join The Event
              </button>
            </div>
          </div>
        </div>

        {/* Assignment Progress Section */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl  border border-white/20 h-[390px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Assignment Progress</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <FiMoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4 flex-1 overflow-y-auto">
              {assignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CircularProgress progress={assignment.progress} color={assignment.color} size={45} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm truncate">{assignment.name}</h3>
                      <p className="text-xs text-gray-500">{assignment.tasks} Tasks</p>
                    </div>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
            <button className="w-full mt-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white py-3 rounded-xl font-bold hover:from-cyan-500 hover:to-cyan-600 hover:scale-105 transition-all duration-300  text-sm">
              Buy Now
            </button>
          </div>
        </div>

       
      </div>

      {/* Enhanced Bottom Section */}
      <div className=" xl:grid-cols-12 gap-6">
        {/* Courses Table */}
        <div className="xl:col-span-8 mb-10">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl  border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Courses you are taking</h2>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Course"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm font-medium border-b border-gray-100">
                    <th className="pb-4 font-semibold">COURSE NAME</th>
                    <th className="pb-4 font-semibold">TIME</th>
                    <th className="pb-4 font-semibold">PROGRESS</th>
                    <th className="pb-4 font-semibold">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {courses
                    .filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((course, index) => (
                      <tr key={index} className="group hover:bg-purple-50/50 transition-all duration-200">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${course.color} group-hover:scale-110 transition-transform `}
                            >
                              {course.icon}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{course.name}</p>
                              <p className="text-sm text-gray-500">{course.instructor}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiClock className="w-4 h-4" />
                            <span className="font-medium">{course.time}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="font-semibold text-gray-700 min-w-[40px]">{course.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4">
                          {course.completed ? (
                            <span className="flex items-center text-green-600 font-medium">
                              <FiCheckCircle className="mr-2 w-4 h-4" />
                              Completed
                            </span>
                          ) : (
                            <span className="font-medium text-gray-700">{course.status}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

       
      </div>
      
        {/* Right Column - Enhanced Sections */}
<div className="xl:col-span-4 flex flex-col lg:flex-row gap-6">
  {/* Topics you're interested in */}
  <div className="bg-white/80 w-full lg:w-1/2 h-auto backdrop-blur-sm p-6 rounded-2xl  border border-white/20">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-800">Topic you are interested in</h2>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <FiMoreHorizontal className="w-5 h-5 text-gray-500" />
      </button>
    </div>

    {/* Horizontal Bar Chart */}
    <div className="space-y-4">
      {[
        { name: "UI Design", percentage: 35, color: "bg-purple-500", bgColor: "bg-purple-100" },
        { name: "UX Design", percentage: 28, color: "bg-cyan-500", bgColor: "bg-cyan-100" },
        { name: "Music", percentage: 21, color: "bg-green-500", bgColor: "bg-green-100" },
        { name: "Animation", percentage: 14, color: "bg-gray-500", bgColor: "bg-gray-100" },
        { name: "Vue", percentage: 7, color: "bg-red-500", bgColor: "bg-red-100" },
        { name: "SEO", percentage: 14, color: "bg-orange-500", bgColor: "bg-orange-100" },
      ].map((topic, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-16 text-sm font-medium text-gray-700">{topic.name}</div>
          <div className="flex-1 flex items-center gap-3">
            <div className={`w-full ${topic.bgColor} rounded-full h-2 overflow-hidden`}>
              <div
                className={`${topic.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${topic.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-600 min-w-[35px]">{topic.percentage}%</span>
          </div>
        </div>
      ))}
    </div>

    {/* Legend */}
    <div className="mt-8 grid grid-cols-2 gap-4">
      {[
        { name: "UI Design", percentage: "35%", color: "bg-purple-500" },
        { name: "UX Design", percentage: "28%", color: "bg-cyan-500" },
        { name: "Music", percentage: "21%", color: "bg-green-500" },
        { name: "Animation", percentage: "14%", color: "bg-gray-500" },
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">{item.percentage}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Popular Instructors Section */}
  <div className="bg-white/80 w-full lg:w-1/2 h-auto backdrop-blur-sm p-6 rounded-2xl border border-white/20">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-800">Popular Instructors</h2>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <FiMoreHorizontal className="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <div className="flex justify-between text-sm text-gray-500 font-medium mb-4">
      <span>INSTRUCTORS</span>
      <span>COURSES</span>
    </div>

    <div className="space-y-4">
      {[
        {
          name: "Jordan Stevenson",
          subject: "Business Intelligence",
          courses: 33,
          rating: "4.9",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          bgColor: "bg-purple-500"
        },
        {
          name: "Alexandra Chen",
          subject: "Digital Marketing",
          courses: 52,
          rating: "4.8",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          bgColor: "bg-blue-500"
        },
        {
          name: "Marcus Johnson",
          subject: "UI/UX Design",
          courses: 12,
          rating: "4.7",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
          bgColor: "bg-green-500"
        },
        {
          name: "Sophia Williams",
          subject: "Vue",
          courses: 8,
          rating: "4.9",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
          bgColor: "bg-yellow-500"
        },
      ].map((instructor, index) => (
        <div
          key={index}
          className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white  "
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${instructor.bgColor} rounded-full border-2 border-white`}
              ></div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                {instructor.name}
              </p>
              <p className="text-sm text-gray-500">{instructor.subject}</p>
              <div className="flex items-center gap-1 mt-1">
                <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600 font-medium">{instructor.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">
              {instructor.courses}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}

export default Academy
