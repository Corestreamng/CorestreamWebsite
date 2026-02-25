import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdEdit,
  MdDelete,
  MdVisibility,
  MdCalendarToday,
  MdPerson,
  MdFolder,
  MdLabel,
} from "react-icons/md";
import { supabase } from "../lib/supabase";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  status: string;
  category: string;
  tags: string;
  cover_image: string | null;
  excerpt: string;
  created_at: string;
  views: number;
  author: string;
}

const ViewBlog: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      if (error || !data) {
        alert("Blog post not found!");
        navigate("/blog");
        return;
      }
      setPost(data);

      // Increment views
      await supabase
        .from("posts")
        .update({ views: (data.views || 0) + 1 })
        .eq("id", id);

      setLoading(false);
    };
    fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${post?.title}"?`)) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) alert("Failed to delete post.");
    else navigate("/blog");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/blog")}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <MdArrowBack className="text-xl text-gray-600" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
              Blog Post Details
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">View and manage</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/blog/edit/${post.id}`)}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm"
          >
            <MdEdit /> <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm"
          >
            <MdDelete /> <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
            )}
            <div className="p-6 sm:p-8 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                >
                  {post.status}
                </span>
                {post.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-base sm:text-lg text-gray-600">
                  {post.excerpt}
                </p>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>
            </div>
            {post.tags && (
              <div className="p-6 sm:p-8 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <MdLabel className="text-gray-400" />
                  {post.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold mb-4">Post Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MdPerson className="text-xl text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">Author</p>
                  <p className="text-sm text-gray-900">
                    {post.author || "Admin"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdCalendarToday className="text-xl text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">Date</p>
                  <p className="text-sm text-gray-900">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdVisibility className="text-xl text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">Views</p>
                  <p className="text-sm text-gray-900">
                    {post.views?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
              {post.category && (
                <div className="flex items-start gap-3">
                  <MdFolder className="text-xl text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500">
                      Category
                    </p>
                    <p className="text-sm text-gray-900">{post.category}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => navigate(`/blog/edit/${post.id}`)}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg font-medium text-sm"
              >
                <MdEdit /> Edit Post
              </button>
              <button
                onClick={() => navigate("/blog")}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium text-sm"
              >
                <MdArrowBack /> Back to Blog
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium text-sm"
              >
                <MdDelete /> Delete Post
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold mb-4">Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {post.views || 0}
                </p>
                <p className="text-xs text-gray-600 mt-1">Views</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-600 mt-1">Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
