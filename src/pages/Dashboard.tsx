import React from "react";
import {
  MdTrendingUp,
  MdArticle,
  MdPeople,
  MdComment,
  MdVisibility,
  MdMoreVert,
} from "react-icons/md";

const metrics = [
  {
    id: 1,
    title: "Total Posts",
    value: "1,234",
    description: "All-time posts",
    icon: MdArticle,
    trend: "+12%",
    trendUp: true,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Published",
    value: "856",
    description: "Live posts",
    icon: MdVisibility,
    trend: "+8%",
    trendUp: true,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Total Users",
    value: "428",
    description: "Registered users",
    icon: MdPeople,
    trend: "+23%",
    trendUp: true,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Comments",
    value: "2,156",
    description: "Total comments",
    icon: MdComment,
    trend: "-3%",
    trendUp: false,
    color: "bg-orange-500",
  },
];

const recentActivity = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "published a new article",
    title: "Getting Started with React Hooks",
    time: "2 hours ago",
    avatar: "SJ",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "commented on",
    title: "Advanced TypeScript Patterns",
    time: "4 hours ago",
    avatar: "MC",
  },
  {
    id: 3,
    user: "Emma Wilson",
    action: "registered as a new user",
    time: "6 hours ago",
    avatar: "EW",
  },
  {
    id: 4,
    user: "David Brown",
    action: "updated",
    title: "Design System Guidelines",
    time: "8 hours ago",
    avatar: "DB",
  },
];

const topPosts = [
  { title: "Getting Started with React", views: 1234 },
  { title: "Tailwind CSS Guide", views: 856 },
  { title: "TypeScript Tips & Tricks", views: 743 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-gray-500">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Metrics Grid - Fully Responsive */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.id}
              className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1 truncate">
                    {metric.title}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full ${
                        metric.trendUp
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <MdTrendingUp
                        className={metric.trendUp ? "" : "rotate-180"}
                      />
                      {metric.trend}
                    </span>
                    <span className="text-xs text-gray-500 hidden sm:inline">
                      {metric.description}
                    </span>
                  </div>
                </div>
                <div
                  className={`${metric.color} p-2 sm:p-3 rounded-lg text-white flex-shrink-0`}
                >
                  <IconComponent className="text-xl sm:text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid - Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity - Stacks on mobile, 2 cols on desktop */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  Recent Activity
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                  Latest updates from your team
                </p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
                <MdMoreVert className="text-gray-600" />
              </button>
            </div>
            <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-purple-400 flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-900">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        <span className="text-gray-600">{activity.action}</span>
                        {activity.title && (
                          <span className="font-medium text-green-500  block sm:inline mt-1 sm:mt-0">
                            {" "}
                            {activity.title}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Posts - Stacks below activity on mobile */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Top Posts
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                Most viewed this week
              </p>
            </div>
            <div className="divide-y divide-gray-100">
              {topPosts.map((post, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions - Mobile friendly */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden mt-4 sm:mt-6">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Quick Actions
              </h2>
            </div>
            <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
              <button className="w-full px-4 py-2.5 sm:py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm sm:text-base">
                Create New Post
              </button>
              <button className="w-full px-4 py-2.5 sm:py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Add User
              </button>
              <button className="w-full px-4 py-2.5 sm:py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors text-sm sm:text-base">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
