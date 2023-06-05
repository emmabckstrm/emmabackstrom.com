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
  return (
    <button className="font-mono bg-blue-700 text-white p-2 border rounded w-10 h-10">
      {(isBomb && "X") || adjacentBombs}
    </button>
  );
};
