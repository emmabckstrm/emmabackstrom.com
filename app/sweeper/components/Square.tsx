import type { ReactNode } from "react";

export const Square = ({
  adjacentBombs,
  isBomb,
  isOpen,
  children,
}: {
  adjacentBombs: number;
  children?: ReactNode;
  isBomb: boolean;
  isOpen: boolean;
}) => {
  const baseClasses = "font-mono p-2 border rounded w-10 h-10";
  const unopenedClasses = "bg-purple-400 border-purple-700";
  const openClasses = "bg-purple-100 border-purple-300";
  const bombClasses = "bg-amber-500 border-amber-700";

  let style;
  if (!isOpen) {
    style = unopenedClasses;
  } else if (isBomb) {
    style = bombClasses;
  } else {
    style = openClasses;
  }

  return (
    <button className={`${baseClasses} ${style}`}>
      {(isBomb && "X") || adjacentBombs}
    </button>
  );
};
