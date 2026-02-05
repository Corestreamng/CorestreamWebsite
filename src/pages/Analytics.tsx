import React from "react";
import { MdTrendingUp } from "react-icons/md";

const metricItems = [
  {
    id: 1,
    title: "Page Views",
    value: "45,231",
    note: "12% from last month",
    up: true,
  },
  {
    id: 2,
    title: "Unique Users",
    value: "8,234",
    note: "8% from last month",
    up: true,
  },
  {
    id: 3,
    title: "Engagement Rate",
    value: "24.5%",
    note: "2% from last month",
    up: false,
  },
  {
    id: 4,
    title: "Avg. Session",
    value: "3:42",
    note: "15 sec from last month",
    up: true,
  },
];

const topPosts = [
  { title: "Getting Started with React", views: 1234 },
  { title: "Tailwind CSS Guide", views: 856 },
  { title: "TypeScript Tips & Tricks", views: 743 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Analytics
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Track your performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metricItems.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
              {m.title}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {m.value}
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full ${
                  m.up
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                <MdTrendingUp className={m.up ? "" : "rotate-180"} />
                {m.note.split(" ")[0]}
              </span>
              <span className="text-xs text-gray-500 hidden sm:inline">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Top Posts by Views
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {topPosts.map((post, index) => (
            <div
              key={index}
              className="flex justify-between items-center pb-3 sm:pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm sm:text-base text-gray-700 truncate">
                  {post.title}
                </span>
              </div>
              <span className="font-bold text-sm sm:text-base text-gray-900 ml-2">
                {post.views.toLocaleString()} views
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
