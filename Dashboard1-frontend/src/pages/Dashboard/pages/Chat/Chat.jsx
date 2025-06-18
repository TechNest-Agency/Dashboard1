import React, { useState } from "react";
import {
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(2); // Default to Harriet McBride

  // All users data
  const users = {
    1: {
      id: 1,
      name: "Gavin Griffith",
      title: "Software Developer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      online: true,
    },
    2: {
      id: 2,
      name: "Harriet McBride",
      title: "UI/UX Designer",
      avatar:
        "https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/assets/avatar-2-D5OQ4OGs.png",
      online: true,
    },
    3: {
      id: 3,
      name: "Danny Conner",
      title: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      online: false,
    },
    4: {
      id: 4,
      name: "Janie West",
      title: "Marketing Specialist",
      initials: "JW",
      color: "bg-green-400",
      online: true,
    },
  };

  // Messages data for each chat
  const [chatMessages, setChatMessages] = useState({
    1: [
      {
        id: 1,
        senderId: 1,
        message: "Hey! How are you doing?",
        time: "2:30 PM",
        timestamp: Date.now() - 3600000,
      },
      {
        id: 2,
        senderId: "me",
        message: "I'm doing great! Thanks for asking 😊",
        time: "2:32 PM",
        timestamp: Date.now() - 3500000,
      },
      {
        id: 3,
        senderId: 1,
        message: "I will purchase it for sure. 👍",
        time: "2:35 PM",
        timestamp: Date.now() - 3000000,
      },
    ],
    2: [
      {
        id: 1,
        senderId: 2,
        message: "Hello, How can I help You?",
        time: "1:45 PM",
        timestamp: Date.now() - 7200000,
      },
      {
        id: 2,
        senderId: "me",
        message:
          "Can I get details of my last transaction I made last month? 🤔",
        time: "1:45 PM",
        timestamp: Date.now() - 7100000,
      },
      {
        id: 3,
        senderId: 2,
        message:
          "We need to check if we can provide you such information.\n\nI will inform you as I get update on this.",
        time: "1:46 PM",
        timestamp: Date.now() - 7000000,
      },
      {
        id: 4,
        senderId: "me",
        message: "If it takes long you can mail me at my mail address.",
        time: "9:30 AM",
        timestamp: Date.now() - 28800000,
      },
    ],
    3: [
      {
        id: 1,
        senderId: 3,
        message: "Hi there! Hope you're having a great day!",
        time: "11:20 AM",
        timestamp: Date.now() - 18000000,
      },
      {
        id: 2,
        senderId: "me",
        message: "Thank you! You too! 😊",
        time: "11:25 AM",
        timestamp: Date.now() - 17700000,
      },
    ],
    4: [
      {
        id: 1,
        senderId: 4,
        message: "Can we schedule a meeting for tomorrow?",
        time: "10:15 AM",
        timestamp: Date.now() - 21900000,
      },
    ],
  });

  // Get last message for each chat
  const getLastMessage = (userId) => {
    const messages = chatMessages[userId] || [];
    const lastMessage = messages[messages.length - 1];
    return lastMessage ? lastMessage.message : "No messages yet";
  };

  // Get last message time
  const getLastMessageTime = (userId) => {
    const messages = chatMessages[userId] || [];
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) return "";

    const now = new Date();
    const messageTime = new Date(lastMessage.timestamp);
    const diffHours = Math.floor((now - messageTime) / (1000 * 60 * 60));

    if (diffHours < 24) {
      return lastMessage.time;
    } else if (diffHours < 48) {
      return "Yesterday";
    } else {
      return `${Math.floor(diffHours / 24)} days ago`;
    }
  };

  // Get unread count (simulate)
  const getUnreadCount = (userId) => {
    if (userId === activeChat) return 0;
    const messages = chatMessages[userId] || [];
    const unreadMessages = messages.filter(
      (msg) => msg.senderId !== "me" && msg.timestamp > Date.now() - 86400000
    );
    return unreadMessages.length > 0 ? unreadMessages.length : 0;
  };

  const chatsList = Object.values(users).map((user) => ({
    ...user,
    message: getLastMessage(user.id),
    time: getLastMessageTime(user.id),
    unread: getUnreadCount(user.id),
    active: user.id === activeChat,
  }));

  const contactsList = [
    {
      name: "Gavin Griffith",
      status: "Cake pie jelly jelly beans. Marzipan lemon...",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Harriet McBride",
      status: "Toffee caramels jelly-o tart gummi bears c...",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Danny Conner",
      status: "Soufflé soufflé caramels sweet roll. Jelly t...",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      initials: "DC",
      color: "bg-orange-400",
    },
    {
      name: "Janie West",
      status: "Chups chups candy canes chocolate bar ...",
      initials: "JW",
      color: "bg-green-400",
    },
    {
      name: "Bryan Murray",
      status: "Cake pie jelly jelly beans. Marzipan lemon...",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Albert Underwood",
      status: "Toffee caramels jelly-o tart gummi bears c...",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Adele Ross",
      status: "Biscuit powder oat cake donut brownie ice...",
      initials: "AR",
      color: "bg-green-300",
    },
    {
      name: "Mark Berry",
      status: "Bear claw ice cream lollipop gingerbread...",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Joseph Evans",
      status: "Gummies gummi bears I love candy icing a...",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      name: "Blake Carter",
      status: "Cake pie jelly jelly beans. Marzipan lemon...",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  ];

  // Get current chat messages
  const currentMessages = chatMessages[activeChat] || [];
  const currentUser = users[activeChat];

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      senderId: "me",
      message: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      timestamp: Date.now(),
    };

    setChatMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage],
    }));

    setMessage("");

    // Simulate response after 2 seconds
    setTimeout(() => {
      const responses = [
        "Thanks for your message!",
        "I'll get back to you soon.",
        "That sounds great!",
        "Let me check on that for you.",
        "Absolutely! 👍",
        "I understand. Let me help you with that.",
        "Perfect! I'll take care of it.",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const responseMessage = {
        id: Date.now() + 1,
        senderId: activeChat,
        message: randomResponse,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        timestamp: Date.now(),
      };

      setChatMessages((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), responseMessage],
      }));
    }, 2000);
  };

  // Handle chat selection
  const handleChatSelect = (userId) => {
    setActiveChat(userId);
  };

  const Avatar = ({ src, initials, color, size = "w-10 h-10" }) => {
    if (src) {
      return (
        <img src={src} alt="" className={`${size} rounded-full object-cover`} />
      );
    }
    return (
      <div
        className={`${size} ${color} rounded-full flex items-center justify-center text-white text-sm font-medium`}
      >
        {initials}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* User Profile */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/assets/avatar-1-DMk2FF1-.png" />
            <div className="relative flex-1">
              <div className="flex items-center">
                <Search className="w-4 h-4 absolute left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chats Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Chats</h2>
            <div className="space-y-2">
              {chatsList.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleChatSelect(chat.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    chat.active ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  <div className="relative">
                    <Avatar
                      src={chat.avatar}
                      initials={chat.initials}
                      color={chat.color}
                    />
                    {chat.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-medium text-sm ${
                          chat.active ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {chat.name}
                      </h3>
                      <span
                        className={`text-xs ${
                          chat.active ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {chat.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm truncate ${
                          chat.active ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {chat.message}
                      </p>
                      {chat.unread > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts Section */}
          <div className="p-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Contacts
            </h2>
            <div className="space-y-2">
              {contactsList.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <Avatar
                    src={contact.avatar}
                    initials={contact.initials}
                    color={contact.color}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-gray-900">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-gray-600 truncate">
                      {contact.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar
                      src={currentUser.avatar}
                      initials={currentUser.initials}
                      color={currentUser.color}
                    />
                    {currentUser.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {currentUser.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {currentUser.online ? "Online" : "Offline"} •{" "}
                      {currentUser.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {currentMessages.map((msg) => {
                const isMe = msg.senderId === "me";
                const sender = isMe ? null : users[msg.senderId];

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex max-w-xs lg:max-w-md ${
                        isMe ? "flex-row-reverse" : "flex-row"
                      } items-end space-x-2`}
                    >
                      {!isMe && (
                        <Avatar
                          src={sender?.avatar}
                          initials={sender?.initials}
                          color={sender?.color}
                          size="w-8 h-8"
                        />
                      )}
                      <div className={`${isMe ? "mr-2" : "ml-2"}`}>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            isMe
                              ? "bg-blue-500 text-white rounded-br-sm"
                              : "bg-gray-200 text-gray-900 rounded-bl-sm"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">
                            {msg.message}
                          </p>
                        </div>
                        <div
                          className={`flex items-center mt-1 space-x-1 ${
                            isMe ? "justify-end" : "justify-start"
                          }`}
                        >
                          <span className="text-xs text-gray-500">
                            {msg.time}
                          </span>
                          {isMe && (
                            <div className="w-4 h-4 text-green-500">
                              <svg viewBox="0 0 16 16" fill="currentColor">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      {isMe && (
                        <Avatar
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                          size="w-8 h-8"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 px-6 py-4">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center space-x-4"
              >
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage(e);
                      }
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors disabled:opacity-50"
                  disabled={!message.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Select a chat to start messaging
              </h3>
              <p className="text-gray-500">
                Choose from your existing conversations or start a new one
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
