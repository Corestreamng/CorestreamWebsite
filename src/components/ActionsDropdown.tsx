import React, { useState, useRef, useEffect } from "react";
import { MdMoreVert } from "react-icons/md";

interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  destructive?: boolean;
  color?: string;
}

interface ActionsDropdownProps {
  actions: Action[];
}

const ActionsDropdown: React.FC<ActionsDropdownProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <MdMoreVert className="text-xl text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors ${
                action.destructive
                  ? "text-red-600 hover:bg-red-50"
                  : action.color === "green"
                    ? "text-green-800 hover:bg-green-50"
                    : action.color === "blue"
                      ? "text-blue-600 hover:bg-blue-50"
                      : action.color === "yellow"
                        ? "text-yellow-600 hover:bg-yellow-50"
                        : action.color === "orange"
                          ? "text-orange-600 hover:bg-orange-50"
                          : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{action.icon}</span>
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
