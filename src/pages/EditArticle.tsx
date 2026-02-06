import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack, MdSave } from "react-icons/md";

interface ArticleFormData {
  title: string;
  seoTitle: string;
  content: string;
  status: "Draft" | "Published";
}

interface Article extends ArticleFormData {
  id: number;
  date: string;
  views: number;
}

const EditArticle: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    seoTitle: "",
    content: "",
    status: "Draft",
  });
  const [errors, setErrors] = useState<Partial<ArticleFormData>>({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Load article data
    const loadArticle = () => {
      // Get articles from localStorage
      const articlesData = localStorage.getItem("articles");
      const articles: Article[] = articlesData ? JSON.parse(articlesData) : [];

      // Find the article by ID
      const article = articles.find((a) => a.id === Number(id));

      if (article) {
        setFormData({
          title: article.title,
          seoTitle: article.seoTitle,
          content: article.content || "",
          status: article.status,
        });
      } else {
        setNotFound(true);
      }
      setLoading(false);
    };

    loadArticle();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ArticleFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ArticleFormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.seoTitle.trim()) {
      newErrors.seoTitle = "SEO Title is required";
    }
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Get existing articles
    const articlesData = localStorage.getItem("articles");
    const articles: Article[] = articlesData ? JSON.parse(articlesData) : [];

    // Update the article
    const updatedArticles = articles.map((article) => {
      if (article.id === Number(id)) {
        return {
          ...article,
          title: formData.title,
          seoTitle: formData.seoTitle,
          content: formData.content,
          status: formData.status,
        };
      }
      return article;
    });

    // Save back to localStorage
    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    console.log("Article updated:", formData);

    // Navigate back to articles list
    navigate("/articles");
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

  if (notFound) {
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
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/articles")}
          className="p-2 hover:bg-white  bg-green-600 rounded-lg transition-colors border-none"
        >
          <MdArrowBack className="text-2xl text-white hover:text-green-600 " />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Edit Article
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Make changes to your article
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Article Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              placeholder="Enter article title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* SEO Title */}
          <div>
            <label
              htmlFor="seoTitle"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              SEO Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="seoTitle"
              name="seoTitle"
              value={formData.seoTitle}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.seoTitle ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              placeholder="Enter SEO-friendly title"
            />
            {errors.seoTitle && (
              <p className="mt-1 text-sm text-red-500">{errors.seoTitle}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Optimized title for search engines (recommended: 50-60 characters)
            </p>
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className={`w-full px-4 py-3 border ${
                errors.content ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none`}
              placeholder="Write your article content here..."
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-500">{errors.content}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
            <p className="mt-1 text-xs text-gray-500">
              Draft articles won't be visible to the public
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => navigate("/articles")}
            className="px-6 py-3 border bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <MdSave className="text-lg" />
            <span>Update Article</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditArticle;
