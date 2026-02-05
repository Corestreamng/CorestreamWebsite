import React from "react";
import {
  MdComment,
  MdFlag,
  MdForum,
  MdBlock,
  MdWarning,
  MdCampaign,
} from "react-icons/md";

const Community: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Community Management
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Moderate and engage with your community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <MdComment className="text-2xl text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">
                Comments
              </h3>
              <p className="text-sm text-gray-500">Moderation</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdComment /> Pending Comments (5)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <MdFlag className="text-2xl text-red-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">Reports</h3>
              <p className="text-sm text-gray-500">Flagged Content</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdFlag /> Flagged Posts (3)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
              <MdForum className="text-2xl text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">Forums</h3>
              <p className="text-sm text-gray-500">Discussions</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdForum /> Active Discussions (12)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <MdBlock className="text-2xl text-orange-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">
                Banned Users
              </h3>
              <p className="text-sm text-gray-500">User Management</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdBlock /> Banned Users (2)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <MdWarning className="text-2xl text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">
                Warnings
              </h3>
              <p className="text-sm text-gray-500">Warned Users</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdWarning /> Warned Users (4)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <MdCampaign className="text-2xl text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-base">
                Announcements
              </h3>
              <p className="text-sm text-gray-500">Create New</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
            <MdCampaign /> Create Announcement
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <MdComment className="text-blue-600 text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                New comment flagged for review
              </p>
              <p className="text-xs text-gray-500 mt-0.5">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <MdFlag className="text-red-600 text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                Post reported by multiple users
              </p>
              <p className="text-xs text-gray-500 mt-0.5">15 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
