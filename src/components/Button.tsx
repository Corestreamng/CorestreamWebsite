import React from "react";

type Variant = "primary" | "ghost" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-green-700 text-white hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-300",
  ghost:
    "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-green-100 border-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-300",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium shadow-sm border ${variants[variant]} ${className} transition-colors duration-150 focus:outline-none`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
