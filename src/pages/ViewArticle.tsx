import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack, MdEdit, MdDelete, MdVisibility } from "react-icons/md";

interface Article {
  id: number;
  title: string;
  seoTitle: string;
  content: string;
  status: "Draft" | "Published";
  date: string;
  views: number;
}

const ViewArticle: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load article data
    const loadArticle = () => {
      const articlesData = localStorage.getItem("articles");
      const articles: Article[] = articlesData ? JSON.parse(articlesData) : [];

      const foundArticle = articles.find((a) => a.id === Number(id));

      if (foundArticle) {
        setArticle(foundArticle);
      }
      setLoading(false);
    };

    loadArticle();
  }, [id]);

  const handleEdit = () => {
    navigate(`/articles/edit/${id}`);
  };

  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete "${article?.title}"? This action cannot be undone.`,
      )
    ) {
      const articlesData = localStorage.getItem("articles");
      const articles: Article[] = articlesData ? JSON.parse(articlesData) : [];

      const updatedArticles = articles.filter((a) => a.id !== Number(id));
      localStorage.setItem("articles", JSON.stringify(updatedArticles));

      navigate("/articles");
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 mb-4">Article not found</p>
          <button
            onClick={() => navigate("/articles")}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/articles")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MdArrowBack className="text-2xl text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  article.status === "Published"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {article.status}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <MdVisibility className="text-lg" />
                {article.views.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="inline-flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium border border-green-200"
          >
            <MdEdit className="text-lg" />
            <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium border border-red-200"
          >
            <MdDelete className="text-lg" />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>

      {/* SEO Title */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">SEO Title</h3>
        <p className="text-gray-900">{article.seoTitle}</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Content</h3>
        <div className="prose max-w-none">
          <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
            {article.content || "No content available."}
          </p>
        </div>
      </div>

      {/* Metadata */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Metadata</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Article ID</p>
            <p className="text-sm font-medium text-gray-900">{article.id}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Created Date</p>
            <p className="text-sm font-medium text-gray-900">
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <p className="text-sm font-medium text-gray-900">
              {article.status}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Total Views</p>
            <p className="text-sm font-medium text-gray-900">
              {article.views.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArticle;
