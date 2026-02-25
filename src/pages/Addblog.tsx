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
import { supabase } from "../lib/supabase";

interface BlogFormData {
  title: string;
  content: string;
  status: "Draft" | "Published";
  category: string;
  tags: string;
  cover_image: string | null;
  excerpt: string;
}

const AddBlog: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    content: "",
    status: "Draft",
    category: "",
    tags: "",
    cover_image: null,
    excerpt: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);

    if (error) {
      console.error("Image upload error:", error);
    } else {
      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(data.path);
      setFormData((prev) => ({ ...prev, cover_image: urlData.publicUrl }));
    }
  };

  const handleSubmit = async (
    _e: React.MouseEvent,
    status: "Draft" | "Published",
  ) => {
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill in required fields");
      return;
    }
    setLoading(true);

    const { error } = await supabase.from("posts").insert([
      {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        status,
        category: formData.category,
        tags: formData.tags,
        cover_image: formData.cover_image,
        author: "Admin",
        views: 0,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to save post. Please try again.");
    } else {
      alert(
        `Blog post ${status === "Draft" ? "saved as draft" : "published"} successfully!`,
      );
      navigate("/blog");
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/blog")}
            className="p-2 bg-green-600 rounded-lg"
          >
            <MdArrowBack className="text-xl text-white" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Create New Blog Post
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Marketing and company updates
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 px-4 py-2.5 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium text-sm"
        >
          <MdClose /> Cancel
        </button>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter blog post title..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              />
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b p-3 bg-gray-50 flex gap-2">
                {[
                  MdFormatBold,
                  MdFormatItalic,
                  MdFormatListBulleted,
                  MdLink,
                  MdImage,
                ].map((Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-2 hover:bg-green-700 bg-green-600 rounded-lg text-white"
                  >
                    <Icon className="text-xl" />
                  </button>
                ))}
              </div>
              <div className="p-5 sm:p-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Write your blog post..."
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                placeholder="Brief summary..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Publish</h3>
              <div className="space-y-4">
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "Draft" | "Published",
                    })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
                <div className="pt-4 border-t space-y-3">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "Draft")}
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium disabled:opacity-50"
                  >
                    {loading ? "Saving..." : "Save Draft"}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "Published")}
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <MdSave /> {loading ? "Publishing..." : "Publish"}
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <MdVisibility /> Preview
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Featured Image</h3>
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
                      setFormData({ ...formData, cover_image: null });
                    }}
                    className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                  >
                    <MdClose />
                  </button>
                </div>
              ) : (
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500">
                    <MdImage className="mx-auto text-4xl text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Category</h3>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Updates">Product Updates</option>
                <option value="News">Company News</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Tags</h3>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                placeholder="marketing, updates, news"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
