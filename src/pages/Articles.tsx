import { useState } from "react";
import { MdAdd, MdEdit, MdDelete, MdSearch } from "react-icons/md";

interface Article {
  id: number;
  title: string;
  status: "Draft" | "Published";
  date: string;
  views: number;
  seoTitle: string;
}

const Articles = () => {
  const [articles] = useState<Article[]>([
    {
      id: 1,
      title: "Technical Documentation",
      status: "Published",
      date: "2026-01-28",
      views: 523,
      seoTitle: "Technical Docs",
    },
    {
      id: 2,
      title: "Best Practices Guide",
      status: "Published",
      date: "2026-01-25",
      views: 412,
      seoTitle: "Best Practices",
    },
  ]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Articles
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Long-form content and documentation
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors text-sm">
              Import
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto">
              <MdAdd className="text-lg" />
              <span>Add Article</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                    Views
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {article.title}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {article.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {article.views.toLocaleString()}
                    </td>

                    <td className="px-6 py-4 text-sm text-right">
                      <div className="flex justify-end gap-2">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border-gray-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
                          <MdEdit /> Edit
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 text-white bg-red-600 hover:bg-white hover:text-red-600 rounded-lg transition-colors font-medium">
                          <MdDelete /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {article.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  {article.status}
                </span>
                <span className="text-xs text-gray-500">
                  {article.views} views
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-xs text-gray-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-xs font-medium">
                    <MdEdit /> Edit
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-xs font-medium">
                    <MdDelete /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
