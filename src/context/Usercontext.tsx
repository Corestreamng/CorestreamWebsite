import React, { createContext, useContext, useState,  } from "react";
import type { ReactNode } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Moderator" | "User";
  status: "Active" | "Suspended" | "Inactive";
  joinDate: string;
  lastLogin: string;
  avatar?: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, "id" | "joinDate" | "lastLogin">) => void;
  updateUser: (id: number, user: Partial<User>) => void;
  deleteUser: (id: number) => void;
  getUserById: (id: number) => User | undefined;
  toggleUserStatus: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  const addUser = (userData: Omit<User, "id" | "joinDate" | "lastLogin">) => {
    const newUser: User = {
      ...userData,
      id: Math.max(...users.map((u) => u.id), 0) + 1,
      joinDate: new Date().toISOString().split("T")[0],
      lastLogin: new Date().toISOString().split("T")[0],
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (id: number, userData: Partial<User>) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...userData } : user)),
    );
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const getUserById = (id: number) => {
    return users.find((user) => user.id === id);
  };

  const toggleUserStatus = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Suspended"
                  ? ("Active" as const)
                  : ("Suspended" as const),
            }
          : user,
      ),
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        getUserById,
        toggleUserStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
