/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("Month");
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Dart Game?",
      date: "2025-06-17",
      label: "Personal",
      color: "bg-cyan-200 text-cyan-800",
    },
    {
      id: 2,
      title: "10.01a Design Review",
      date: "2025-06-18",
      label: "Business",
      color: "bg-purple-200 text-purple-800",
    },
    {
      id: 3,
      title: "Dinner",
      date: "2025-06-17",
      label: "Personal",
      color: "bg-orange-200 text-orange-800",
    },
    {
      id: 4,
      title: "Doctor's Appointment",
      date: "2025-06-19",
      label: "Personal",
      color: "bg-red-200 text-red-800",
    },
    {
      id: 5,
      title: "Family Trip",
      date: "2025-06-21",
      label: "Family",
      color: "bg-green-200 text-green-800",
    },
    {
      id: 6,
      title: "Family Trip",
      date: "2025-06-22",
      label: "Family",
      color: "bg-green-200 text-green-800",
    },
    {
      id: 7,
      title: "Monthly Meeting",
      date: "2025-07-01",
      label: "Business",
      color: "bg-purple-200 text-purple-800",
    },
  ]);

  const [filters, setFilters] = useState({
    "View all": true,
    Personal: true,
    Business: true,
    Family: true,
    Holiday: true,
    ETC: true,
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    label: "",
    startDate: "",
    endDate: "",
    allDay: false,
    eventUrl: "",
    guests: "",
    location: "",
    description: "",
  });

  const labelColors = {
    Personal: "bg-red-200 text-red-800",
    Business: "bg-purple-200 text-purple-800",
    Family: "bg-green-200 text-green-800",
    Holiday: "bg-yellow-200 text-yellow-800",
    ETC: "bg-cyan-200 text-cyan-800",
  };

  const getMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const getEventsForDate = (date) => {
    const dateStr = formatDate(date);
    return events.filter((event) => {
      if (!filters["View all"] && !filters[event.label]) return false;
      return event.date === dateStr;
    });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const handleFilterChange = (filterName) => {
    if (filterName === "View all") {
      const newValue = !filters["View all"];
      setFilters((prev) => ({
        ...prev,
        "View all": newValue,
        Personal: newValue,
        Business: newValue,
        Family: newValue,
        Holiday: newValue,
        ETC: newValue,
      }));
    } else {
      setFilters((prev) => {
        const newFilters = { ...prev, [filterName]: !prev[filterName] };
        const allChecked = [
          "Personal",
          "Business",
          "Family",
          "Holiday",
          "ETC",
        ].every((key) => newFilters[key]);
        newFilters["View all"] = allChecked;
        return newFilters;
      });
    }
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.startDate && newEvent.label) {
      const event = {
        id: Date.now(),
        title: newEvent.title,
        date: newEvent.startDate,
        label: newEvent.label,
        color: labelColors[newEvent.label] || "bg-gray-200 text-gray-800",
        ...newEvent,
      };
      setEvents((prev) => [...prev, event]);
      setNewEvent({
        title: "",
        label: "",
        startDate: "",
        endDate: "",
        allDay: false,
        eventUrl: "",
        guests: "",
        location: "",
        description: "",
      });
      setShowModal(false);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendarView = () => {
    const days = getMonthData();
    const today = new Date();
    const currentMonth = currentDate.getMonth();

    return (
      <div className="flex-1 bg-white rounded-lg">
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map((day) => (
            <div
              key={day}
              className="p-4 text-center font-medium text-gray-500 text-sm"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-[600px]">
          {days.map((day, index) => {
            const isToday = formatDate(day) === formatDate(today);
            const isCurrentMonth = day.getMonth() === currentMonth;
            const dayEvents = getEventsForDate(day);
            const hasMoreEvents = dayEvents.length > 2;
            const visibleEvents = dayEvents.slice(0, 2);

            return (
              <div
                key={index}
                className={`border-r border-b border-gray-200 p-2 min-h-[86px] ${
                  !isCurrentMonth ? "bg-gray-50 text-gray-400" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-sm font-medium ${
                      isToday
                        ? "bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        : ""
                    }`}
                  >
                    {day.getDate()}
                  </span>
                </div>
                <div className="space-y-1">
                  {visibleEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`text-xs px-2 py-1 rounded text-center truncate ${event.color}`}
                    >
                      {event.title}
                    </div>
                  ))}
                  {hasMoreEvents && (
                    <div className="text-xs text-gray-500 px-1">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderListView = () => {
    const filteredEvents = events.filter((event) => {
      if (!filters["View all"] && !filters[event.label]) return false;
      return true;
    });

    return (
      <div className="flex-1 bg-white rounded-lg p-6">
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded text-sm ${event.color}`}>
                    {event.label}
                  </div>
                  <h3 className="font-medium">{event.title}</h3>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r border-gray-200">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 mb-6 hover:bg-blue-600"
        >
          <Plus size={16} />
          <span>Add Event</span>
        </button>

        {/* Mini Calendar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex space-x-1">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => navigateMonth(1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-xs">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-gray-500 py-1">
                {day.slice(0, 1)}
              </div>
            ))}
            {getMonthData()
              .slice(0, 35)
              .map((day, index) => {
                const isToday = formatDate(day) === formatDate(new Date());
                const isCurrentMonth =
                  day.getMonth() === currentDate.getMonth();
                return (
                  <div
                    key={index}
                    className={`text-center py-1 text-xs cursor-pointer hover:bg-gray-100 rounded ${
                      isToday ? "bg-blue-500 text-white rounded" : ""
                    } ${!isCurrentMonth ? "text-gray-400" : ""}`}
                  >
                    {day.getDate()}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Event Filters */}
        <div>
          <h3 className="font-medium mb-3">Event Filters</h3>
          <div className="space-y-2">
            {Object.entries(filters).map(([filter, checked]) => (
              <label
                key={filter}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleFilterChange(filter)}
                  className="rounded text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm">{filter}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <ChevronRight size={20} />
              </button>
              <h1 className="text-xl font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              {["Month", "Week", "Day", "List"].map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType)}
                  className={`px-3 py-1 rounded text-sm ${
                    view === viewType
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {viewType}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex-1 p-4">
          {view === "List" ? renderListView() : renderCalendarView()}
        </div>
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-semibold">Add Event</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Meeting with Jane"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Label
                </label>
                <select
                  value={newEvent.label}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, label: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Event Label</option>
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Family">Family</option>
                  <option value="Holiday">Holiday</option>
                  <option value="ETC">ETC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start date
                </label>
                <input
                  type="date"
                  value={newEvent.startDate}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End date
                </label>
                <input
                  type="date"
                  value={newEvent.endDate}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="allDay"
                  checked={newEvent.allDay}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      allDay: e.target.checked,
                    }))
                  }
                  className="rounded text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="allDay" className="text-sm text-gray-700">
                  All day
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event URL
                </label>
                <input
                  type="url"
                  value={newEvent.eventUrl}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      eventUrl: e.target.value,
                    }))
                  }
                  placeholder="https://event.com/meeting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <input
                  type="text"
                  value={newEvent.guests}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, guests: e.target.value }))
                  }
                  placeholder="Select guests"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="Meeting room"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
