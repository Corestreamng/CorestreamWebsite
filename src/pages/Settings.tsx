import React from "react";
import {
  MdSave,
  MdBrush,
  MdNotifications,
  MdSecurity,
  MdLanguage,
  MdPalette,
} from "react-icons/md";

const Settings: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Settings
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Manage your application preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Settings Menu - Mobile: full width, Desktop: sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Settings Menu
            </h2>
            <nav className="space-y-1">
              <button className="w-full text-left px-4 py-2.5 bg-blue-50 text-green-600 rounded-lg font-medium transition-colors text-sm flex items-center gap-3">
                <MdBrush className="text-lg" />
                <span>General</span>
              </button>
              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-green-600 rounded-lg font-medium transition-colors text-sm flex items-center gap-3">
                <MdPalette className="text-lg" />
                <span>Theme</span>
              </button>
              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-green-600 rounded-lg font-medium transition-colors text-sm flex items-center gap-3">
                <MdNotifications className="text-lg" />
                <span>Notifications</span>
              </button>
              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-green-600 rounded-lg font-medium transition-colors text-sm flex items-center gap-3">
                <MdSecurity className="text-lg" />
                <span>Security</span>
              </button>
              <button className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-green-600 rounded-lg font-medium transition-colors text-sm flex items-center gap-3">
                <MdLanguage className="text-lg" />
                <span>Language</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              General Settings
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin Dashboard"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Site Description
                </label>
                <textarea
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  rows={4}
                  placeholder="Enter your site description..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto">
                <MdSave className="text-lg" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Theme Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="light"
                  className="text-sm text-gray-700 font-medium"
                >
                  Light Theme
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="dark"
                  className="text-sm text-gray-700 font-medium"
                >
                  Dark Theme
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="auto"
                  name="theme"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="auto"
                  className="text-sm text-gray-700 font-medium"
                >
                  Auto (System)
                </label>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto mt-4">
                <MdBrush className="text-lg" />
                <span>Apply Theme</span>
              </button>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Receive email updates about your account
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-700"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Push Notifications
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Get push notifications on your device
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-700"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Comment Moderation Alerts
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Notify when comments need approval
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
