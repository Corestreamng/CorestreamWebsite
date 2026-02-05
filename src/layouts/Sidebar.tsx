import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdArticle,
  MdPeople,
  MdSettings,
  MdAnalytics,
} from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: MdDashboard },
    { name: "Posts", path: "/posts", icon: HiDocumentText },
    { name: "Articles", path: "/articles", icon: MdArticle },
    { name: "Blog", path: "/blog", icon: MdArticle },
    { name: "Users", path: "/users", icon: MdPeople },
    { name: "Community", path: "/community", icon: BiCommentDetail },
    { name: "Analytics", path: "/analytics", icon: MdAnalytics },
    { name: "Settings", path: "/settings", icon: MdSettings },
  ];

  return (
    <>
      {/* Overlay - Mobile only */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:fixed top-0 left-0 z-50 lg:z-auto
          h-screen w-64 sm:w-72 lg:w-64
          bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Admin</h1>
          </div>
          <button
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const selected = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  font-medium text-sm transition-all duration-200
                  ${
                    selected
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-blue-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <IconComponent className="text-xl flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Need Help?
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Check our documentation
            </p>
            <button className="w-full px-3 py-2 bg-white hover:bg-gray-50 text-blue-600 rounded-lg text-xs font-medium transition-colors border border-blue-200">
              View Docs
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
