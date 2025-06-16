import React, { useEffect, useState } from 'react';
import { FiSearch, FiMail, FiInbox, FiAlertCircle, FiTrash2, FiSend, FiFileText, FiStar, FiCheck } from 'react-icons/fi';
import { FaCamera, FaPaperclip, FaCommentAlt } from "react-icons/fa";
import FolderListItem from '../../../../components/FolderListItem';

export default function Email() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState('primary');
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [composeOpen, setComposeOpen] = useState(false); //create new mail...

  // for create a new mail......
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [newEmail, setNewEmail] = useState({
    to: '',
    from: 'user7@gmail.com',
    subject: '',
    body: '',
    cc: '',
    bcc: ''
  });
  const [searchQuery, setSearchQuery] = useState('');




  //all mails based on folder.......
  useEffect(() => {
    const sampleEmails = [
      {
        id: 1,
        folder: 'primary',
        category: 'personal',
        from: 'john@example.com',
        name: 'John Doe',
        subject: 'Meeting Tomorrow',
        body: 'Hi there, just reminding you about our meeting tomorrow at 10 AM.',
        read: false,
        date: '10:30 AM',
        starred: false,
        img: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        id: 2,
        folder: 'primary',
        category: 'business',
        from: 'amazon@shopping.com',
        name: 'Amazon',
        subject: 'Your order has shipped',
        body: 'Your recent order #12345 has been shipped and will arrive soon.',
        read: true,
        date: 'Jun 15',
        starred: true,
        img: 'https://logo.clearbit.com/amazon.com'
      },
      {
        id: 3,
        folder: 'primary',
        category: 'social',
        from: 'linkedin@mail.linkedin.com',
        name: 'LinkedIn',
        subject: 'New connection request',
        body: 'You have a new connection request from Sarah Williams.',
        read: true,
        date: 'Jun 14',
        starred: false,
        img: 'https://logo.clearbit.com/linkedin.com'
      },
      {
        id: 4,
        folder: 'draft',
        category: 'personal',
        from: 'user@example.com',
        name: 'Me',
        subject: 'Draft: Project ideas',
        body: 'Here are some ideas for the upcoming project...',
        read: true,
        date: 'Jun 13',
        starred: false,
        img: 'https://randomuser.me/api/portraits/lego/5.jpg'
      },
      {
        id: 5,
        folder: 'sent',
        category: 'business',
        from: 'user@example.com',
        name: 'Me',
        subject: 'Proposal for client',
        body: 'Attached is the proposal document for your review.',
        read: true,
        date: 'Jun 12',
        starred: true,
        img: 'https://randomuser.me/api/portraits/lego/5.jpg'
      },
      {
        id: 6,
        folder: 'spam',
        category: 'private',
        from: 'unknown@suspicious.com',
        name: 'Unknown',
        subject: 'You won a prize!',
        body: 'Click here to claim your $1,000,000 prize!',
        read: false,
        date: 'Jun 10',
        starred: false,
        img: 'https://logo.clearbit.com/suspicious.com'
      },
      {
        id: 7,
        folder: 'primary',
        category: 'personal',
        from: 'mom@family.com',
        name: 'Mom',
        subject: 'Family dinner',
        body: 'Don\'t forget about family dinner this Sunday!',
        read: false,
        date: 'Jun 9',
        starred: true,
        img: 'https://randomuser.me/api/portraits/women/65.jpg'
      },
      {
        id: 8,
        folder: 'primary',
        category: 'business',
        from: 'support@company.com',
        name: 'Support Team',
        subject: 'Your ticket #4567',
        body: 'We have resolved your support ticket. Please let us know if you need anything else.',
        read: true,
        date: 'Jun 8',
        starred: false,
        img: 'https://logo.clearbit.com/company.com'
      },
      {
        id: 9,
        folder: 'sent',
        category: 'personal',
        from: 'user@example.com',
        name: 'Me',
        subject: 'Re: Meeting Tomorrow',
        body: 'Looking forward to our meeting!',
        read: true,
        date: 'Jun 7',
        starred: false,
        img: 'https://randomuser.me/api/portraits/lego/5.jpg'
      },
    ];
    setEmails(sampleEmails);
  }, []);


  //total msg from individual folder
  const getFolderCount = (folder) => {
    return emails.filter(email => email.folder === folder).length;
  };

  //folder icons....
  const folderIcons = {
    primary: <FiInbox className="mr-3" />,
    allmail: <FiMail className="mr-3" />,
    spam: <FiAlertCircle className="mr-3" />,
    trash: <FiTrash2 className="mr-3" />,
    sent: <FiSend className="mr-3" />,
    draft: <FiFileText className="mr-3" />
  };

  //category color......
  const categoryColors = {
    personal: 'bg-blue-500',
    business: 'bg-green-500',
    social: 'bg-purple-500',
    private: 'bg-yellow-500'
  };


  //filtered email by search value....
  const filteredEmails = emails.filter(email =>
    email.folder === activeFolder &&
    (searchQuery === '' ||
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase()))
  ).sort((a, b) => a.starred === b.starred ? 0 : a.starred ? -1 : 1);


  //selected all checked toggle btn functionality..........
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(filteredEmails.map(email => email.id));
    }
    setSelectAll(!selectAll);
  };


  //deleted mails move to trash.........
  const deleteEmails = () => {
    if (activeFolder === 'trash') {
      // Permanent deletion
      setEmails(emails.filter(email => !selectedEmails.includes(email.id)));
    } else {
      // Move to trash
      const updatedEmails = emails.map(email =>
        selectedEmails.includes(email.id) ? { ...email, folder: 'trash' } : email
      );
      setEmails(updatedEmails);
    }
    setSelectedEmails([]);
    setSelectAll(false);
  };

  //mark as read...
  const markAsRead = () => {
    const updatedEmails = emails.map(email =>
      selectedEmails.includes(email.id) ? { ...email, read: true } : email
    );
    setEmails(updatedEmails);
    setSelectedEmails([]);
    setSelectAll(false);
  };

  //mark as unread..........
  const markAsUnread = () => {
    const updatedEmails = emails.map(email =>
      selectedEmails.includes(email.id) ? { ...email, read: false } : email
    );
    setEmails(updatedEmails);
    setSelectedEmails([]);
    setSelectAll(false);
  };

  //toggle start..........
  const toggleStar = (emailId) => {
    const updatedEmails = emails.map(email =>
      email.id === emailId ? { ...email, starred: !email.starred } : email
    );
    setEmails(updatedEmails);
  };

  //select/unchecked..........
  const toggleEmailSelection = (emailId) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter(id => id !== emailId));
      setSelectAll(false);

    } else {
      const newSelected = [...selectedEmails, emailId];
      setSelectedEmails(newSelected);

      // Check if all visible emails are now selected
      if (newSelected.length === filteredEmails.length) {
        setSelectAll(true);
      }
    }
  };
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Email Header............... */}
      <header className="bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {activeFolder === 'allmail' ? 'All Mail' : activeFolder === 'sent' ? 'Sent Items' : activeFolder}
          </h1>
        </div>

        {/* search ........................ */}
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search emails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </header>

      {/* Main Content Area...................... */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay backdrop........... */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar.............. .........................*/}
        <div
          className={`absolute lg:relative inset-y-0 left-0 z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out bg-white w-64 border-r flex-shrink-0 h-full`}
        >
          <div className="p-4">
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-medium transition duration-150 flex items-center justify-center"
              onClick={() => setComposeOpen(true)}
            >
              <FiMail className="mr-2" />
              Compose
            </button>
          </div>


          {/* folder items.......... */}
          <nav className="mt-2">
            <ul>
              {['primary', 'allmail', 'sent', 'draft', 'spam', 'trash'].map((folder) => (
                <FolderListItem
                  key={folder}
                  folder={folder}
                  count={getFolderCount(folder)}
                  activeFolder={activeFolder}
                  setSelectedEmails={setSelectedEmails}
                  setActiveFolder={setActiveFolder}
                  folderIcons={folderIcons}
                />
              ))}
            </ul>
          </nav>

          <h2 className='text-xl mt-6 font-medium text-gray-700 text-left pl-2'>Labels</h2>

          <div className="mt-4">

            {['personal', 'business', 'social', 'private'].map((category) => (
              <div key={category} className="flex items-center ml-6 mb-1">

                <div className={`h-3 w-3 rounded-full ${categoryColors[category]} ml-2 mr-2`}></div>
                <span className="text-lg capitalize">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Right side Content......................... */}
        <div className={`flex-1 overflow-auto ${sidebarOpen ? 'opacity-50 lg:opacity-100' : 'opacity-100'} transition-opacity duration-200`}>

          {/* Email List Actions ...................... */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center">
            <div className="flex items-center mr-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Select all</span>
            </div>

         {/* show delete, marks as read & unread btn with selected count */}
            {selectedEmails.length > 0 && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={deleteEmails}
                  className="text-gray-600 hover:text-gray-900"
                  title="Delete"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
                <button
                  onClick={markAsRead}
                  className="text-gray-600 hover:text-gray-900"
                  title="Mark as read"
                >
                  <FiCheck className="w-5 h-5 text-green-600" />
                </button>
                <button
                  onClick={markAsUnread}
                  className="text-gray-600 hover:text-gray-900"
                  title="Mark as unread"
                >
                  <FiMail className="w-5 h-5" />
                </button>
                <span className="text-sm text-blue-500">{selectedEmails.length} selected</span>
              </div>
            )}
          </div>


          {/* Email List based on selected folder............. */}
          <div className="flex-1 overflow-y-auto">
            {filteredEmails.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-96 text-gray-500">
                <FiMail className="w-16 h-16 mb-4" />
                <p>No emails found in this folder</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredEmails.map((email) => (
                  <div
                    key={email.id}
                    className={`flex items-start p-4 hover:bg-gray-50 ${!email.read ? 'font-semibold bg-blue-50' : ''}`}
                  >
                    <div className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        checked={selectedEmails.includes(email.id)}
                        onChange={() => toggleEmailSelection(email.id)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <button
                        onClick={() => toggleStar(email.id)}
                        className={`ml-3 ${email.starred ? 'text-yellow-400' : 'text-gray-300 hover:text-gray-400'}`}
                      >
                        <FiStar className="w-5 h-5" />
                      </button>
                    </div>

                {/* img............ */}
                    <div className="flex-shrink-0 mr-3">
                      <img
                        src={email.img}
                        alt={email.name}
                        className="h-8 w-8 rounded-full border border-gray-200 object-cover"
                      />
                    </div>
                     {/* name & date........ */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {email.name}
                        </div>
                        <div className="text-sm text-gray-500 ml-2 whitespace-nowrap">
                          {email.date}
                        </div>
                      </div>

                      {/* subject and body.......... */}
                      <div className="text-sm text-gray-500 truncate">
                        {email.subject}
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        {email.body}
                      </div>
                    </div>

                    <div className={`h-3 w-3 rounded-full ${categoryColors[email.category]} ml-4`}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Compose Email Modal....................... */}
      {composeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">New Message</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowCc(!showCc)}
                  className={`text-sm ${showCc ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800`}
                >
                  Cc
                </button>
                <button
                  onClick={() => setShowBcc(!showBcc)}
                  className={`text-sm ${showBcc ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800`}
                >
                  Bcc
                </button>
                <button
                  onClick={() => setComposeOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>


            {/* form demo.........further needs to change */}
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input
                  type="email"
                  value={newEmail.from}
                  onChange={(e) => setNewEmail({ ...newEmail, from: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input
                  type="email"
                  value={newEmail.to}
                  onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {showCc && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cc</label>
                  <input
                    type="email"
                    value={newEmail.cc}
                    onChange={(e) => setNewEmail({ ...newEmail, cc: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              {showBcc && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bcc</label>
                  <input
                    type="email"
                    value={newEmail.bcc}
                    onChange={(e) => setNewEmail({ ...newEmail, bcc: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  value={newEmail.subject}
                  onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={8}
                  value={newEmail.body}
                  onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                    <FaCamera className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                    <FaPaperclip className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                    <FaCommentAlt className="w-5 h-5" />
                  </button>
                </div>

                <button
                  // onClick={sendEmail}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-medium transition duration-150"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}