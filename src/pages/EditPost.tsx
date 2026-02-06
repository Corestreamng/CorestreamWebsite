import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdSave, MdArrowBack } from "react-icons/md";

interface PostFormData {
  id?: number;
  title: string;
  content: string;
  status: "Draft" | "Published";
  category: string;
  tags: string;
  featuredImage: string | null;
  excerpt: string;
  author: string;
  date?: string;
  views?: number;
}

const EditPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
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

  useEffect(() => {
    if (!id) return;
    try {
      const raw = localStorage.getItem("posts");
      const list = raw ? (JSON.parse(raw) as PostFormData[]) : [];
      const pid = Number(id);
      const found = list.find((p) => p.id === pid);
      if (!found) {
        setNotFound(true);
      } else {
        setFormData(found as PostFormData);
      }
    } catch (e) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent, status: "Draft" | "Published") => {
    e.preventDefault();
    try {
      const raw = localStorage.getItem("posts");
      const list = raw ? (JSON.parse(raw) as any[]) : [];
      const updated = list.map((p) => (p.id === formData.id ? { ...formData, status } : p));
      localStorage.setItem("posts", JSON.stringify(updated));
      alert("Post updated successfully");
      navigate("/posts");
    } catch (err) {
      alert("Failed to save post");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (notFound) return <div className="p-6 bg-white rounded">Post not found</div>;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/posts")}
          className="inline-flex items-center gap-2 text-white bg-green-600  mb-2 text-sm"
        >
          <MdArrowBack /> Back to Posts
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Edit Post</h1>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Post Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
          <textarea
            rows={12}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e as unknown as React.FormEvent, "Draft")}
            className="px-4 py-2.5 bg-green-700 text-white rounded text-sm"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e as unknown as React.FormEvent, "Published")}
            className="px-4 py-2.5 bg-green-700 text-white rounded text-sm inline-flex items-center gap-2"
          >
            <MdSave /> Save
          </button>
        </div>
      </form>
    </div>
  );
};



export default EditPost;
