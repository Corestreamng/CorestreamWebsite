import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdSave,
  MdClose,
  MdImage,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdLink,
  MdVisibility,
  MdArrowBack,
} from "react-icons/md";

interface PostFormData {
  title: string;
  content: string;
  status: "Draft" | "Published";
  category: string;
  tags: string;
  featuredImage: string | null;
  excerpt: string;
  author: string;
}

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    content: "",
    status: "Draft",
    category: "",
    tags: "",
    featuredImage: null,
    excerpt: "",
    author: "Admin",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, image: "Image size must be less than 5MB" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, featuredImage: reader.result as string });
        setErrors({ ...errors, image: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent, status: "Draft" | "Published") => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields");
      return;
    }

    const postData = {
      ...formData,
      status,
      id: Date.now(),
      date: new Date().toISOString(),
      views: 0,
    };

    console.log("Saving post:", postData);

    try {
      const raw = localStorage.getItem("posts");
      const list = raw ? (JSON.parse(raw) as any[]) : [];
      list.unshift(postData);
      localStorage.setItem("posts", JSON.stringify(list));
    } catch (err) {
      // ignore
    }

    alert(
      `Post ${status === "Draft" ? "saved as draft" : "published"} successfully!`,
    );
    navigate("/posts");
  };

  const handleCancel = () => {
    if (formData.title || formData.content) {
      if (
        window.confirm(
          "Are you sure you want to discard this post? All changes will be lost.",
        )
      ) {
        navigate("/posts");
      }
    } else {
      navigate("/posts");
    }
  };

  const handlePreview = () => {
    if (!formData.title || !formData.content) {
      alert("Please add title and content to preview");
      return;
    }
    // Open preview in new window or modal
    console.log("Preview:", formData);
    alert("Preview feature coming soon!");
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div>
          <button
            onClick={() => navigate("/posts")}
            className="inline-flex items-center gap-2  text-white bg-green-600 hover:bg-white hover:text-green-500 mb-2 text-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 rounded-lg px-3 py-2"
          >
            <MdArrowBack /> Back to Posts
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Create New Post
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Fill in the details below to create a new post
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Post Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter your post title..."
                className={`w-full px-4 py-3 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base`}
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Content Editor */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-3 bg-gray-50">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className="p-2 bg-green-600 hover:bg-white text-white rounded-lg "
                    title="Bold"
                  >
                    <MdFormatBold className="text-xl text-white hover:text-green-600  focus:border-transparent" />
                  </button>
                  <button
                    type="button"
                    className="p-2  bg-green-600 hover:bg-white text-white rounded-lg"
                    title="Italic"
                  >
                    <MdFormatItalic className="text-xl text-gray-700" />
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-green-600 hover:bg-white text-white rounded-lg"
                    title="Bullet List"
                  >
                    <MdFormatListBulleted className="text-xl text-white hover:text-green-600  focus:border-transparent" />
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-green-600 hover:bg-white text-white rounded-lg"
                    title="Insert Link"
                  >
                    <MdLink className="text-xl text-white hover:text-green-600" />
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-green-600 hover:bg-white text-white rounded-lg transition-colors"
                    title="Insert Image"
                  >
                    <MdImage className="text-xl text-white hover:text-green-600  focus:border-transparent" />
                  </button>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Write your post content here..."
                  rows={12}
                  className={`w-full px-4 py-3 border ${
                    errors.content ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base resize-none`}
                />
                {errors.content && (
                  <p className="mt-1 text-xs text-red-500">{errors.content}</p>
                )}
              </div>
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                placeholder="Brief description of your post..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
              />
              <p className="mt-2 text-xs text-gray-500">
                Optional. A short summary that appears in post previews.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Publish Options */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Publish
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "Draft" | "Published",
                      })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "Draft")}
                    className="w-full px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium transition-colors text-sm"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "Published")}
                    className="w-full px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <MdSave className="text-lg" />
                    Publish Post
                  </button>
                  <button
                    type="button"
                    onClick={handlePreview}
                    className="w-full px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <MdVisibility className="text-lg" />
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <MdClose className="text-lg" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Featured Image
              </h3>
              <div className="space-y-4">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData({ ...formData, featuredImage: null });
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      <MdClose />
                    </button>
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
                      <MdImage className="mx-auto text-4xl text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        Click to upload image
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
                {errors.image && (
                  <p className="text-xs text-red-500">{errors.image}</p>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Category <span className="text-red-500">*</span>
              </h3>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className={`w-full px-4 py-2.5 border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm`}
              >
                <option value="">Select category...</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-500">{errors.category}</p>
              )}
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Tags
              </h3>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                placeholder="React, TypeScript, Tutorial"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <p className="mt-2 text-xs text-gray-500">
                Separate tags with commas
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
