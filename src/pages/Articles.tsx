import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdSearch,
  MdFilterList,
  MdVisibility,
} from "react-icons/md";

interface Article {
  id: number;
  title: string;
  status: "Draft" | "Published";
  date: string;
  views: number;
  seoTitle: string;
  content?: string;
}

const Articles: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All Status");

  // Load articles from localStorage on mount
  useEffect(() => {
    const loadArticles = () => {
      const articlesData = localStorage.getItem("articles");
      if (articlesData) {
        setArticles(JSON.parse(articlesData));
      } else {
        // Initialize with default articles if none exist
        const defaultArticles = [
          {
            id: 1,
            title: "Technical Documentation",
            status: "Published" as const,
            date: "2026-01-28",
            views: 523,
            seoTitle: "Technical Docs",
            content: "Comprehensive technical documentation for developers.",
          },
          {
            id: 2,
            title: "Best Practices Guide",
            status: "Published" as const,
            date: "2026-01-25",
            views: 412,
            seoTitle: "Best Practices",
            content: "Learn the best practices for modern web development.",
          },
          {
            id: 3,
            title: "API Reference Guide",
            status: "Draft" as const,
            date: "2026-01-20",
            views: 0,
            seoTitle: "API Reference",
            content: "Complete API reference documentation.",
          },
        ];
        localStorage.setItem("articles", JSON.stringify(defaultArticles));
        setArticles(defaultArticles);
      }
    };

    loadArticles();
  }, []);

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All Status" || article.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddArticle = () => {
    navigate("/articles/add");
  };

  const handleEdit = (article: Article) => {
    navigate(`/articles/edit/${article.id}`);
  };

  const handleView = (article: Article) => {
    navigate(`/articles/view/${article.id}`);
  };

  const handleDelete = (article: Article) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${article.title}"? This action cannot be undone.`,
      )
    ) {
      const updatedArticles = articles.filter((a) => a.id !== article.id);
      setArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      console.log("Deleted article:", article);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Articles
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Long-form content and documentation ({filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"})
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleAddArticle}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto"
          >
            <MdAdd className="text-lg" />
            <span>Add Article</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1 relative">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="relative">
          <MdFilterList className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl sm:hidden" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-auto pl-10 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm"
          >
            <option>All Status</option>
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>
      </div>

      {/* No Results Message */}
      {filteredArticles.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 mb-4">No articles found</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilterStatus("All Status");
            }}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Desktop Table */}
      {filteredArticles.length > 0 && (
        <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {article.title}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          article.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
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
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleView(article)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white hover:bg-green-800 rounded-lg transition-colors font-medium"
                          title="View"
                        >
                          <MdVisibility className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleEdit(article)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white hover:bg-green-800 rounded-lg transition-colors font-medium"
                          title="Edit"
                        >
                          <MdEdit className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleDelete(article)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium"
                          title="Delete"
                        >
                          <MdDelete className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Mobile Cards */}
      {filteredArticles.length > 0 && (
        <div className="md:hidden space-y-3">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        article.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {article.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.views} views
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleView(article)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-green-700 text-white hover:bg-green-800 rounded-lg transition-colors text-xs font-medium"
                  >
                    <MdVisibility className="text-lg" />
                  </button>
                  <button
                    onClick={() => handleEdit(article)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-green-700 text-white hover:bg-green-800 rounded-lg transition-colors text-xs font-medium"
                  >
                    <MdEdit className="text-lg" />
                  </button>
                  <button
                    onClick={() => handleDelete(article)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors text-xs font-medium"
                  >
                    <MdDelete className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
