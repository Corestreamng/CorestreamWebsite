import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1">
            <button
              className="p-2 lg:hidden text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={onToggleSidebar}
              aria-label="Open sidebar"
            >
              <HiOutlineMenu className="text-xl sm:text-2xl" />
            </button>

            {/* Search - Hidden on small mobile, visible from sm */}
            <div className="hidden sm:block flex-1 max-w-md">
              <div className="relative">
                <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Button */}
            <button
              className="sm:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <AiOutlineSearch className="text-xl" />
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 text-gray-600 hover:bg-gray-100 bg-green-700 rounded-lg transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
            >
              <IoNotifications className="text-xl sm:text-2xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            {/* Profile */}
            <button
              className="flex items-center gap-2 px-2 sm:px-3 py-1.5 hover:bg-gray-100 rounded-lg bg-green-700 transition-colors"
              onClick={() => setShowProfile(!showProfile)}
              aria-label="Profile"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">
                Admin
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Visible only on xs */}
        <div className="sm:hidden mt-3">
          <div className="relative">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
