import type { ReactNode } from "react";

export interface SquareT {
  adjacentBombs: number;
  children?: ReactNode;
  isBomb: boolean;
  isOpen: boolean;
  onClick: () => void;
  onSecondClick: () => void;
}

export const Square = ({
  adjacentBombs,
  isBomb,
  isOpen,
  children,
  onClick,
  onSecondClick,
}: SquareT) => {
  const baseClasses = "font-mono p-2 border rounded w-10 h-10";
  const unopenedClasses = "bg-purple-400 border-purple-700";
  const openClasses = "bg-purple-200 border-purple-300";
  const bombClasses = "bg-amber-500 border-amber-700";

  const handleSecondClick = (e) => {
    e.preventDefault();
    onSecondClick();
  };

  let style;
  if (!isOpen) {
    style = unopenedClasses;
  } else if (isBomb) {
    style = bombClasses;
  } else {
    style = openClasses;
  }

  return (
    <button
      className={`${baseClasses} ${style}`}
      onClick={onClick}
      onContextMenu={handleSecondClick}
    >
      {(isBomb && "X") || adjacentBombs}
    </button>
  );
};
