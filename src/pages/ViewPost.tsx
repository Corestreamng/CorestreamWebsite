import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdEdit,
  MdDelete,
  MdVisibility,
  MdCalendarToday,
  MdPerson,
  MdLabel,
} from "react-icons/md";

interface Post {
  id: number;
  title: string;
  content: string;
  status: "Draft" | "Published";
  category: string;
  tags: string;
  featuredImage: string | null;
  excerpt: string;
  date: string;
  views: number;
  author: string;
}

const ViewPost: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = () => {
      const mockPosts: { [key: string]: Post } = {
        "1": {
          id: 1,
          title: "Getting Started with React",
          content:
            "React is a powerful JavaScript library for building user interfaces...",
          status: "Published",
          category: "Technology",
          tags: "React, JavaScript, Tutorial",
          featuredImage: null,
          excerpt:
            "Learn the basics of React in this beginner-friendly tutorial.",
          date: "2026-02-01",
          views: 342,
          author: "Admin",
        },
        "2": {
          id: 2,
          title: "Tailwind CSS Guide",
          content: "Tailwind CSS is a utility-first CSS framework...",
          status: "Published",
          category: "Design",
          tags: "CSS, Tailwind, Design",
          featuredImage: null,
          excerpt: "A complete guide to styling with Tailwind CSS.",
          date: "2026-02-02",
          views: 156,
          author: "Admin",
        },
        "3": {
          id: 3,
          title: "TypeScript Tips",
          content: "TypeScript is a typed superset of JavaScript...",
          status: "Draft",
          category: "Development",
          tags: "TypeScript, JavaScript",
          featuredImage: null,
          excerpt: "Improve your TypeScript skills with these tips.",
          date: "2026-02-03",
          views: 0,
          author: "Admin",
        },
      };

      const foundPost = mockPosts[id || ""];
      if (foundPost) {
        setPost(foundPost);
      } else {
        alert("Post not found!");
        navigate("/posts");
      }
      setLoading(false);
    };

    setTimeout(loadPost, 500);
  }, [id, navigate]);

  const handleEdit = () => navigate(`/posts/edit/${id}`);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${post?.title}"?`)) {
      alert("Post deleted successfully!");
      navigate("/posts");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
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
            onClick={() => navigate("/posts")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MdArrowBack className="text-xl text-gray-600" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
              Post Details
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              View and manage your post
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm"
          >
            <MdEdit className="text-lg" />
            <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors text-sm"
          >
            <MdDelete className="text-lg" />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-xl border border-gray-200 overflow-hidden">
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
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
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
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Post Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MdPerson className="text-xl text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">Author</p>
                  <p className="text-sm text-gray-900">{post.author}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdCalendarToday className="text-xl text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-500">
                    Published Date
                  </p>
                  <p className="text-sm text-gray-900">
                    {new Date(post.date).toLocaleDateString("en-US", {
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
                    {post.views.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button
                onClick={handleEdit}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors text-sm"
              >
                <MdEdit className="text-lg" />
                Edit Post
              </button>
              <button
                onClick={() => navigate("/posts")}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors text-sm"
              >
                <MdArrowBack className="text-lg" />
                Back to Posts
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors text-sm"
              >
                <MdDelete className="text-lg" />
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
