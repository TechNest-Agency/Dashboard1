import React, { useState } from "react";
import {
  User,
  Shield,
  CreditCard,
  Bell,
  Link,
  Trash2,
  Eye,
  EyeOff,
  Plus,
  Edit,
  Trash,
  Chrome,
  Apple,
  Smartphone,
  Monitor,
} from "lucide-react";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const tabs = [
    { id: "Account", label: "Account", icon: User },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Billing", label: "Billing & Plans", icon: CreditCard },
    { id: "Notifications", label: "Notifications", icon: Bell },
    { id: "Connections", label: "Connections", icon: Link },
  ];

  const renderAccountTab = () => (
    <div className="space-y-8">
      {/* Profile Photo */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-600" />
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Upload New Photo
          </button>
          <button className="ml-2 text-gray-600 px-4 py-2 text-sm hover:text-gray-800">
            Reset
          </button>
          <p className="text-sm text-gray-500 mt-1">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="johnDoe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-mail
          </label>
          <input
            type="email"
            defaultValue="johnDoe@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            defaultValue="Pixinvent"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+1 (917) 543-9876"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            defaultValue="123 Main St, New York, NY 10001"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <input
            type="text"
            defaultValue="New York"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zip Code
          </label>
          <input
            type="text"
            defaultValue="10001"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>UK</option>
            <option>US</option>
            <option>Canada</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>(GMT-11:00) International Date Line West</option>
            <option>(GMT-10:00) Hawaii</option>
            <option>(GMT-05:00) Eastern Time</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
        <button className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-800">
          Cancel
        </button>
      </div>

      {/* Delete Account */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Delete Account
        </h3>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="confirm-delete" className="mr-2" />
          <label htmlFor="confirm-delete" className="text-sm text-gray-600">
            I confirm my account deactivation
          </label>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Please confirm account deactivation
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 flex items-center">
          <Trash2 className="w-4 h-4 mr-2" />
          Deactivate Account
        </button>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-8">
      {/* Change Password */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Change Password
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Password Requirements:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Minimum 8 characters long - the more, the better</li>
            <li>• At least one lowercase character</li>
            <li>• At least one number, symbol, or whitespace character</li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Save changes
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-800">
            Reset
          </button>
        </div>
      </div>

      {/* Two-factor Authentication */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Two-factor Verification
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Two factor authentication is not enabled yet.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to log in.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
          .
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Enable Two-Factor Authentication
        </button>
      </div>

      {/* Create an API key */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Create an API key
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose the API key type you want to create
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose an API key type</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name the API key
            </label>
            <input
              type="text"
              placeholder="Server Key 1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full">
            Create Key
          </button>
        </div>
        <div className="mt-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              An API key is a simple encrypted string that identifies an
              application without any principal. They are useful for accessing
              public data anonymously, and are used to associate API requests
              with your project for quota and billing.
            </p>
          </div>
        </div>
      </div>

      {/* API Key List & Access */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          API Key List & Access
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          An API key is a simple encrypted string that identifies an application
          without any principal. They are useful for accessing public data
          anonymously, and are used to associate API requests with your project
          for quota and billing.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Server Key 1</h4>
              <p className="text-sm text-gray-500">Full Control</p>
              <p className="text-sm text-gray-400">
                23eaf7f0-f4f7-495e-8b86-fad3261282ac
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Server Key 2</h4>
              <p className="text-sm text-gray-500">Read Only</p>
              <p className="text-sm text-gray-400">
                bb98e571-a2e2-4de8-90a9-2e231b5e99
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Server Key 3</h4>
              <p className="text-sm text-gray-500">Full Control</p>
              <p className="text-sm text-gray-400">
                2e915e59-3105-47f2-8838-6e46bf83b711
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Devices */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Devices
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Chrome className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Chrome on Windows</h4>
                <p className="text-sm text-gray-500">HP Spectre 360</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">DEVICE</p>
              <p className="text-sm">New York, NY</p>
              <p className="text-sm text-gray-400">20 Apr 2022, 18:20</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Apple className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Chrome on iPhone</h4>
                <p className="text-sm text-gray-500">iPhone 12x</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">DEVICE</p>
              <p className="text-sm">Los Angeles, CA</p>
              <p className="text-sm text-gray-400">20 Apr 2022, 10:20</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Monitor className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Chrome on macOS</h4>
                <p className="text-sm text-gray-500">Apple iMac</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">DEVICE</p>
              <p className="text-sm">New York, NY</p>
              <p className="text-sm text-gray-400">20 Apr 2022, 18:20</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Chrome className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Chrome on Windows</h4>
                <p className="text-sm text-gray-500">HP Spectre 360</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">DEVICE</p>
              <p className="text-sm">Los Angeles, CA</p>
              <p className="text-sm text-gray-400">20 Apr 2022, 10:20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-8">
      {/* Current Plan */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium">
                Your Current Plan is Basic
              </h4>
              <p className="text-sm text-gray-600">
                A simple start for everyone
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Active until Dec 09, 2021
              </p>
              <p className="text-sm text-gray-600">
                We will send you a notification upon Subscription expiration
              </p>
              <p className="text-sm font-medium mt-2">
                $199 Per Month <span className="text-blue-600">Popular</span>
              </p>
            </div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              Pro hybrid your plan
            </div>
          </div>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm">Days</span>
              <span className="text-sm">02 of 30 Days</span>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "7%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              2 days remaining until your plan requires update
            </p>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Upgrade Plan
            </button>
            <button className="text-red-600 px-6 py-2 rounded-md hover:text-red-800">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Payment Methods
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input type="radio" name="payment" defaultChecked />
            <span className="text-sm">Credit/Debit/ATM Card</span>
            <input type="radio" name="payment" />
            <span className="text-sm">Paypal account</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">My Cards</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-500 text-white p-4 rounded-lg">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
                  <div className="text-right">
                    <button className="text-white hover:text-gray-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-white hover:text-gray-200 ml-2">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm opacity-90">Tom McBride</p>
                  <p className="text-sm opacity-90">**** **** **** 9876</p>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-2xl font-bold">VISA</div>
                  <div className="text-right">
                    <button className="text-white hover:text-gray-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-white hover:text-gray-200 ml-2">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm opacity-90">Mildred Wagner</p>
                  <p className="text-sm opacity-90">Card expires at 02/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Billing Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Billing Email
            </label>
            <input
              type="email"
              defaultValue="gertrude@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax ID
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              VAT Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+1 (609) 972-22-22"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Billing Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zip Code
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-800">
            Discard
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Devices
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          We need permission from your browser to show notifications.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Request Permission
          </a>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-sm font-medium text-gray-700">
                  TYPE
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">
                  EMAIL
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">
                  BROWSER
                </th>
                <th className="text-left py-3 text-sm font-medium text-gray-700">
                  APP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 text-sm">New for you</td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-sm">Account activity</td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-sm">A new browser used to sign in</td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-sm">A new device is linked</td>
                <td className="py-4">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                </td>
                <td className="py-4">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            When should we send you notifications?
          </h4>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Only when I'm online</option>
            <option>Always</option>
            <option>Never</option>
          </select>
        </div>

        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Save changes
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-800">
            Discard
          </button>
        </div>
      </div>
    </div>
  );

  const renderConnectionsTab = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Connected Accounts */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Connected Accounts
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Display content from connected accounts on your site
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-bold">
                  G
                </div>
                <div>
                  <h4 className="font-medium">Google</h4>
                  <p className="text-sm text-gray-500">Calendar and contacts</p>
                </div>
              </div>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-11 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-medium">Slack</h4>
                  <p className="text-sm text-gray-500">Communication</p>
                </div>
              </div>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-sm font-bold">
                  G
                </div>
                <div>
                  <h4 className="font-medium">Github</h4>
                  <p className="text-sm text-gray-500">
                    Manage your Git repositories
                  </p>
                </div>
              </div>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-11 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-medium">Mailchimp</h4>
                  <p className="text-sm text-gray-500">
                    Email marketing service
                  </p>
                </div>
              </div>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-11 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-medium">Asana</h4>
                  <p className="text-sm text-gray-500">Task communication</p>
                </div>
              </div>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 left-1 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Accounts */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Social Accounts
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Display content from social accounts on your site
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">
                  f
                </div>
                <div>
                  <h4 className="font-medium">Facebook</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-sm font-bold">
                  T
                </div>
                <div>
                  <h4 className="font-medium">Twitter</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-sm font-bold">
                  in
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div>
                  <h4 className="font-medium">Dribbble</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">
                  B
                </div>
                <div>
                  <h4 className="font-medium">Behance</h4>
                  <p className="text-sm text-gray-500">Not Connected</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b mb-8">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Account" && renderAccountTab()}
        {activeTab === "Security" && renderSecurityTab()}
        {activeTab === "Billing" && renderBillingTab()}
        {activeTab === "Notifications" && renderNotificationsTab()}
        {activeTab === "Connections" && renderConnectionsTab()}
      </div>
    </div>
  );
};

export default AccountSettings;
