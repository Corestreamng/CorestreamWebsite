import React from "react";

interface CardProps {
  title: string;
  value?: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  description,
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md rounded-lg p-6 ${className}`}
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-gray-900 dark:text-gray-100 text-sm font-semibold">
          {title}
        </h3>
        {value !== undefined && (
          <div className="text-gray-900 dark:text-gray-100 text-2xl font-bold">
            {value}
          </div>
        )}
      </div>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      )}
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
