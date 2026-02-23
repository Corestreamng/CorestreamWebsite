import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdEdit,
  MdDelete,
  MdLock,
  MdBlock,
  MdCheckCircle,
  MdEmail,
  MdCalendarToday,
  MdAccessTime,
} from "react-icons/md";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Moderator" | "User";
  status: "Active" | "Suspended" | "Inactive";
  joinDate: string;
  lastLogin: string;
  avatar?: string;
}

const ViewUser: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const mockUsers: { [key: string]: User } = {
        "1": {
          id: 1,
          name: "John Admin",
          email: "john@example.com",
          role: "Admin",
          status: "Active",
          joinDate: "2025-01-01",
          lastLogin: "2026-02-04",
        },
        "2": {
          id: 2,
          name: "Jane Editor",
          email: "jane@example.com",
          role: "Editor",
          status: "Active",
          joinDate: "2025-06-15",
          lastLogin: "2026-02-03",
        },
        "3": {
          id: 3,
          name: "Bob Moderator",
          email: "bob@example.com",
          role: "Moderator",
          status: "Active",
          joinDate: "2025-08-20",
          lastLogin: "2026-02-02",
        },
        "4": {
          id: 4,
          name: "Alice User",
          email: "alice@example.com",
          role: "User",
          status: "Active",
          joinDate: "2025-09-10",
          lastLogin: "2026-01-30",
        },
        "5": {
          id: 5,
          name: "Charlie Suspended",
          email: "charlie@example.com",
          role: "User",
          status: "Suspended",
          joinDate: "2025-05-01",
          lastLogin: "2026-01-15",
        },
      };
      const foundUser = mockUsers[id || ""];
      if (foundUser) {
        setUser(foundUser);
      } else {
        alert("User not found!");
        navigate("/users");
      }
      setLoading(false);
    };
    setTimeout(loadUser, 500);
  }, [id, navigate]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800";
      case "Editor":
        return "bg-blue-100 text-blue-800";
      case "Moderator":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = () => navigate(`/users/edit/${id}`);
  const handleDelete = () => {
    if (window.confirm(`Delete ${user?.name}?`)) {
      alert("User deleted!");
      navigate("/users");
    }
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

  if (!user) return null;

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
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
              User Details
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              View user information
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-800 hover:bg-green-900 text-white rounded-lg font-medium text-sm"
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
          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <div className="flex items-start gap-6 mb-6 pb-6 border-b">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-3xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h2>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}
                  >
                    {user.role}
                  </span>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Suspended"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <p className="text-gray-600 flex items-center gap-2">
                  <MdEmail className="text-gray-400" />
                  {user.email}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MdCalendarToday className="text-xl text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Join Date
                      </p>
                      <p className="text-sm text-gray-900">
                        {new Date(user.joinDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MdAccessTime className="text-xl text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Last Login
                      </p>
                      <p className="text-sm text-gray-900">
                        {new Date(user.lastLogin).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Role Permissions
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  {user.role === "Admin" && (
                    <p className="text-sm text-gray-700">
                      • Full system access
                      <br />• Manage all users
                      <br />• Configure settings
                    </p>
                  )}
                  {user.role === "Editor" && (
                    <p className="text-sm text-gray-700">
                      • Create and edit content
                      <br />• Publish posts and articles
                      <br />• Manage media
                    </p>
                  )}
                  {user.role === "Moderator" && (
                    <p className="text-sm text-gray-700">
                      • Moderate content
                      <br />• Manage user comments
                      <br />• Review reports
                    </p>
                  )}
                  {user.role === "User" && (
                    <p className="text-sm text-gray-700">
                      • Basic access
                      <br />• View content
                      <br />• Update own profile
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button
                onClick={handleEdit}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-green-50 hover:bg-green-100 text-green-800 rounded-lg font-medium text-sm"
              >
                <MdEdit /> Edit User
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-yellow-50 hover:bg-yellow-100 text-yellow-600 rounded-lg font-medium text-sm">
                <MdLock /> Reset Password
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-lg font-medium text-sm">
                {user.status === "Suspended" ? <MdCheckCircle /> : <MdBlock />}
                {user.status === "Suspended" ? "Activate User" : "Suspend User"}
              </button>
              <button
                onClick={() => navigate("/users")}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium text-sm"
              >
                <MdArrowBack /> Back to Users
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium text-sm"
              >
                <MdDelete /> Delete User
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 p-5 sm:p-6">
            <h3 className="text-base font-semibold mb-4">Activity Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-600 mt-1">Posts</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-xs text-gray-600 mt-1">Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;