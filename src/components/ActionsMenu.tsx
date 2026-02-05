import React, { useEffect, useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";

type Action = {
  key?: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  destructive?: boolean;
};

interface Props {
  actions: Action[];
  ariaLabel?: string;
}

const ActionsMenu: React.FC<Props> = ({ actions, ariaLabel = "Actions" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <MdMoreVert className="w-5 h-5" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={ariaLabel}
          className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
        >
          <div className="py-1">
            {actions.map((a, i) => (
              <button
                key={a.key ?? `${i}-${a.label}`}
                onClick={() => {
                  a.onClick?.();
                  setOpen(false);
                }}
                role="menuitem"
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-gray-50 ${
                  a.destructive ? "text-red-600" : "text-gray-700"
                }`}
              >
                {a.icon && <span className="w-4 h-4">{a.icon}</span>}
                <span className="truncate">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionsMenu;
