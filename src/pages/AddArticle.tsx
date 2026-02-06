import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdSave } from "react-icons/md";

interface ArticleFormData {
  title: string;
  seoTitle: string;
  content: string;
  status: "Draft" | "Published";
}

const AddArticle: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    seoTitle: "",
    content: "",
    status: "Draft",
  });
  const [errors, setErrors] = useState<Partial<ArticleFormData>>({});

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

    // Create new article object
    const newArticle = {
      id: Date.now(), // Simple ID generation
      title: formData.title,
      seoTitle: formData.seoTitle,
      content: formData.content,
      status: formData.status,
      date: new Date().toISOString().split("T")[0],
      views: 0,
    };

    // In a real app, you would send this to an API
    console.log("New article:", newArticle);

    // For now, we'll store it in localStorage
    const existingArticles = JSON.parse(
      localStorage.getItem("articles") || "[]",
    );
    existingArticles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(existingArticles));

    // Navigate back to articles list
    navigate("/articles");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/articles")}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <MdArrowBack className="text-2xl text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Add New Article
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Create a new article or documentation
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
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <MdSave className="text-lg" />
            <span>Save Article</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
