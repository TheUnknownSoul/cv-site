import { ButtonHTMLAttributes } from "react";

export function Button({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`px-4 py-2 rounded bg-black text-white hover:opacity-90 ${className}`} {...props}>
      {children}
    </button>
  );
}
