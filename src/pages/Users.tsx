import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAdd,
  MdVisibility,
  MdLock,
  MdBlock,
  MdSearch,
  MdFilterList,
  MdEdit,
  MdDelete,
  MdCheckCircle,
} from "react-icons/md";
import ActionsDropdown from "../components/ActionsDropdown";

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

const Users: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Admin",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2025-01-01",
      lastLogin: "2026-02-04",
    },
    {
      id: 2,
      name: "Jane Editor",
      email: "jane@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2025-06-15",
      lastLogin: "2026-02-03",
    },
    {
      id: 3,
      name: "Bob Moderator",
      email: "bob@example.com",
      role: "Moderator",
      status: "Active",
      joinDate: "2025-08-20",
      lastLogin: "2026-02-02",
    },
    {
      id: 4,
      name: "Alice User",
      email: "alice@example.com",
      role: "User",
      status: "Active",
      joinDate: "2025-09-10",
      lastLogin: "2026-01-30",
    },
    {
      id: 5,
      name: "Charlie Suspended",
      email: "charlie@example.com",
      role: "User",
      status: "Suspended",
      joinDate: "2025-05-01",
      lastLogin: "2026-01-15",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("All Roles");
  const [filterStatus, setFilterStatus] = useState("All Status");

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === "All Roles" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "All Status" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

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

  const handleAddUser = () => {
    navigate("/users/add");
  };

  const handleView = (user: User) => {
    navigate(`/users/view/${user.id}`);
  };

  const handleEdit = (user: User) => {
    navigate(`/users/edit/${user.id}`);
  };

  const handleResetPassword = (user: User) => {
    if (window.confirm(`Reset password for ${user.name}?`)) {
      alert(`Password reset email sent to ${user.email}`);
      console.log("Reset password for:", user);
    }
  };

  const handleSuspend = (user: User) => {
    if (user.status === "Suspended") {
      // Activate user
      if (window.confirm(`Activate ${user.name}?`)) {
        setUsers(
          users.map((u) =>
            u.id === user.id ? { ...u, status: "Active" as const } : u,
          ),
        );
        alert(`${user.name} has been activated`);
      }
    } else {
      // Suspend user
      if (
        window.confirm(`Suspend ${user.name}? They won't be able to log in.`)
      ) {
        setUsers(
          users.map((u) =>
            u.id === user.id ? { ...u, status: "Suspended" as const } : u,
          ),
        );
        alert(`${user.name} has been suspended`);
      }
    }
  };

  const handleDelete = (user: User) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
      )
    ) {
      setUsers(users.filter((u) => u.id !== user.id));
      alert(`${user.name} has been deleted`);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Users
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Manage your team members ({filteredUsers.length}{" "}
            {filteredUsers.length === 1 ? "user" : "users"})
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleAddUser}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto"
          >
            <MdAdd className="text-lg" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1 relative">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="relative">
          <MdFilterList className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl sm:hidden" />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full sm:w-auto pl-10 sm:pl-4 pr-8 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm"
          >
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Moderator</option>
            <option>User</option>
          </select>
        </div>
        <div className="relative">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-auto pl-4 pr-8 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* No Results */}
      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500 mb-4">No users found</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilterRole("All Roles");
              setFilterStatus("All Status");
            }}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Desktop Table */}
      {filteredUsers.length > 0 && (
        <div className="hidden lg:block bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(user.lastLogin).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center justify-center">
                        <ActionsDropdown
                          actions={[
                            {
                              label: "View Details",
                              icon: <MdVisibility />,
                              onClick: () => handleView(user),
                              color: "blue",
                            },
                            {
                              label: "Edit User",
                              icon: <MdEdit />,
                              onClick: () => handleEdit(user),
                              color: "green",
                            },
                            {
                              label: "Reset Password",
                              icon: <MdLock />,
                              onClick: () => handleResetPassword(user),
                              color: "yellow",
                            },
                            {
                              label:
                                user.status === "Suspended"
                                  ? "Activate User"
                                  : "Suspend User",
                              icon:
                                user.status === "Suspended" ? (
                                  <MdCheckCircle />
                                ) : (
                                  <MdBlock />
                                ),
                              onClick: () => handleSuspend(user),
                              color:
                                user.status === "Suspended"
                                  ? "green"
                                  : "orange",
                            },
                            {
                              label: "Delete User",
                              icon: <MdDelete />,
                              onClick: () => handleDelete(user),
                              destructive: true,
                            },
                          ]}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Cards */}
      {filteredUsers.length > 0 && (
        <div className="lg:hidden space-y-3">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {user.name}
                  </h3>
                  <p className="text-xs text-gray-600 truncate">{user.email}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}
                    >
                      {user.role}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
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
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  Last login:{" "}
                  {new Date(user.lastLogin).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <ActionsDropdown
                  actions={[
                    {
                      label: "View Details",
                      icon: <MdVisibility />,
                      onClick: () => handleView(user),
                      color: "blue",
                    },
                    {
                      label: "Edit User",
                      icon: <MdEdit />,
                      onClick: () => handleEdit(user),
                      color: "green",
                    },
                    {
                      label: "Reset Password",
                      icon: <MdLock />,
                      onClick: () => handleResetPassword(user),
                      color: "yellow",
                    },
                    {
                      label:
                        user.status === "Suspended"
                          ? "Activate User"
                          : "Suspend User",
                      icon:
                        user.status === "Suspended" ? (
                          <MdCheckCircle />
                        ) : (
                          <MdBlock />
                        ),
                      onClick: () => handleSuspend(user),
                      color: user.status === "Suspended" ? "green" : "orange",
                    },
                    {
                      label: "Delete User",
                      icon: <MdDelete />,
                      onClick: () => handleDelete(user),
                      destructive: true,
                    },
                  ]}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
