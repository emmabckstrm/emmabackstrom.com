import type { ReactNode } from "react";

export const Button = ({ children }: { children?: ReactNode }) => {
  return (
    <button
      className={`bg-purple-400 border-purple-600 border 
            inline-block px-3 py-2 rounded-md shadow-sm
            hover:bg-purple-500 hover:border-purple-700
        `}
    >
      {children}
    </button>
  );
};
