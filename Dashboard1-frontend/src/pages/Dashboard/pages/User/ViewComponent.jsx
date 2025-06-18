/* eslint-disable no-unused-vars */
export const renderDashboard = ({
  projects,
  activities,
  invoices,
  MoreHorizontal,
  Plus,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Projects List */}
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            User's Projects List
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search Project"
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Leader
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">📱</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.type}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {project.leader}
                </td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-1">
                    {project.team.map((member, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Activity Timeline */}
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          User Activity Timeline
        </h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.text}
                </p>
                <p className="text-xs text-gray-500">{activity.subtext}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invoice List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Invoice List
            </h3>
            <button className="text-blue-600 hover:text-blue-800">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {invoices.map((invoice, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xs">#</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {invoice.id}
                  </p>
                  <p className="text-xs text-gray-500">{invoice.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {invoice.total}
                </p>
                <span
                  className={`inline-flex px-2 py-1 text-xs rounded-full ${
                    invoice.status === "paid"
                      ? "bg-green-100 text-green-800"
                      : invoice.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const renderPasswordSettings = () => (
  <div className="max-w-2xl">
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Change Password
      </h3>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-orange-800">
          Ensure that these requirements are met:
          <br />
          Minimum 8 characters long, uppercase & symbol
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Change Password
        </button>
      </div>

      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-900 mb-4">
          Two-step verification
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Keep your account secure with authentication step.
        </p>

        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-700">SMS</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-700">Authenticator App</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-900 mb-4">
          Recent devices
        </h4>
        <div className="space-y-3">
          {[
            {
              device: "Chrome on Windows",
              location: "Switzerland",
              date: "10, July 2021 20:07",
            },
            {
              device: "Chrome on iPhone",
              location: "Los Angeles",
              date: "10, July 2021 20:07",
            },
            {
              device: "Chrome on macOS",
              location: "India",
              date: "10, July 2021 16:17",
            },
            {
              device: "Chrome on iPhone",
              location: "Australia",
              date: "10, July 2021 16:17",
            },
          ].map((device, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {device.device}
                  </p>
                  <p className="text-xs text-gray-500">{device.location}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{device.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const renderBillingSettings = ({ paymentMethods }) => (
  <div className="max-w-4xl space-y-6">
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Current Plan</h3>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-orange-800">
          We need your attention!
          <br />
          Your plan requires update
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-md font-semibold text-gray-900">
            Your Current Plan is Basic
          </h4>
          <p className="text-sm text-gray-600">A simple start for everyone</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-blue-600">$99</span>
          <span className="text-sm text-gray-500">/month</span>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Upgrade Plan
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Cancel Subscription
        </button>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Card
        </button>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-bold">
                  {method.type.toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {method.number}
                </p>
                <p className="text-xs text-gray-500">
                  Card expires at {method.expires}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 px-3 py-1 border border-blue-600 rounded text-sm">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800 px-3 py-1 border border-red-600 rounded text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Billing Address
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact
          </label>
          <span className="text-sm text-gray-900">Salina Kyle</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <span className="text-sm text-gray-900">United States</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Billing Email
          </label>
          <span className="text-sm text-gray-900">
            gertrude.walsh@email.com
          </span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tax ID
          </label>
          <span className="text-sm text-gray-900">Applied</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            VAT Number
          </label>
          <span className="text-sm text-gray-900">GMT-458477</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zip Code
          </label>
          <span className="text-sm text-gray-900">403114</span>
        </div>
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Edit Address
      </button>
    </div>
  </div>
);

export const renderNotifications = () => (
  <div className="max-w-2xl">
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Notifications
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        We need permission to send push notifications
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">New for you</span>
          <div className="flex space-x-8">
            <label className="text-xs text-gray-500">EMAIL</label>
            <label className="text-xs text-gray-500">BROWSER</label>
            <label className="text-xs text-gray-500">APP</label>
          </div>
        </div>

        {[
          { name: "New for you", email: true, browser: false, app: false },
          { name: "Account activity", email: true, browser: true, app: true },
          {
            name: "A new browser used to sign in",
            email: false,
            browser: true,
            app: false,
          },
          {
            name: "A new device is linked",
            email: false,
            browser: true,
            app: false,
          },
        ].map((notification, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-900">{notification.name}</span>
            <div className="flex space-x-8">
              <input
                type="checkbox"
                checked={notification.email}
                onChange={() => {}}
              />
              <input
                type="checkbox"
                checked={notification.browser}
                onChange={() => {}}
              />
              <input
                type="checkbox"
                checked={notification.app}
                onChange={() => {}}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
          Discard
        </button>
      </div>
    </div>
  </div>
);

export const renderConnections = ({
  connectedServices,
  socialAccounts,
  Settings,
  Trash2,
}) => (
  <div className="max-w-4xl space-y-6">
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Connected Accounts
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Display content from your connected accounts on your site
      </p>

      <div className="space-y-4">
        {connectedServices.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">🔗</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {service.name}
                </p>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
            </div>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={service.connected}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Social Accounts
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Display content from social accounts on your site
      </p>

      <div className="space-y-4">
        {socialAccounts.map((account, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {account.name}
                </p>
                <p className="text-xs text-gray-500">Not connected</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
