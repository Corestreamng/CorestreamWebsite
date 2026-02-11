import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdSave, MdClose, MdArrowBack, MdPerson } from "react-icons/md";

interface UserFormData {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Moderator" | "User";
  status: "Active" | "Suspended" | "Inactive";
  avatar: string | null;
}

const EditUser: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<UserFormData>({
    id: 0,
    name: "",
    email: "",
    role: "User",
    status: "Active",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const mockUsers: { [key: string]: UserFormData } = {
        "1": {
          id: 1,
          name: "John Admin",
          email: "john@example.com",
          role: "Admin",
          status: "Active",
          avatar: null,
        },
        "2": {
          id: 2,
          name: "Jane Editor",
          email: "jane@example.com",
          role: "Editor",
          status: "Active",
          avatar: null,
        },
        "3": {
          id: 3,
          name: "Bob Moderator",
          email: "bob@example.com",
          role: "Moderator",
          status: "Active",
          avatar: null,
        },
        "4": {
          id: 4,
          name: "Alice User",
          email: "alice@example.com",
          role: "User",
          status: "Active",
          avatar: null,
        },
        "5": {
          id: 5,
          name: "Charlie Suspended",
          email: "charlie@example.com",
          role: "User",
          status: "Suspended",
          avatar: null,
        },
      };
      const user = mockUsers[id || ""];
      if (user) {
        setFormData(user);
        if (user.avatar) setAvatarPreview(user.avatar);
      } else {
        alert("User not found!");
        navigate("/users");
      }
      setLoading(false);
    };
    setTimeout(loadUser, 500);
  }, [id, navigate]);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
        setFormData({ ...formData, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating user:", formData);
    alert("User updated successfully!");
    navigate("/users");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/users")}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <MdArrowBack className="text-xl text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Edit User
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Update user information
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/users")}
          className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm"
        >
          <MdClose /> Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Profile Picture</h3>
              {avatarPreview ? (
                <div className="relative">
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setAvatarPreview(null);
                      setFormData({ ...formData, avatar: null });
                    }}
                    className="absolute top-0 right-0 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
                  >
                    <MdClose />
                  </button>
                </div>
              ) : (
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500">
                    <MdPerson className="mx-auto text-4xl text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <h3 className="text-base font-semibold mb-4">Role & Status</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value as any })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="User">User</option>
                    <option value="Moderator">Moderator</option>
                    <option value="Editor">Editor</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-green-800 hover:bg-green-900 text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <MdSave /> Update User
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
