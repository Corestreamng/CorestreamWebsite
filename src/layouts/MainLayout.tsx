import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Toaster } from "sonner";

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Full height on left */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area - Header + Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Header - Fixed at top of content area */}
        <Header onToggleSidebar={toggleSidebar} />

        {/* Page Content - Add top padding to account for fixed header */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24 lg:pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

        <Toaster />

        {/* Footer */}
        {/* <footer className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-gray-600">
            <p>© 2026 Admin Dashboard. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Support
              </a>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default MainLayout;
