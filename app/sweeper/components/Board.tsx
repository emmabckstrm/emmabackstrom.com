import type { ReactNode } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import type { SquareT } from "./Square";
import type { GameBoard } from "../src/setup";

interface RenderSquare
  extends Pick<SquareT, "isBomb" | "isOpen" | "adjacentBombs"> {
  key: any;
}

export const Board = ({
  children,
  gameBoard,
  isGameRunning,
  renderSquare,
}: {
  children?: ReactNode;
  gameBoard: GameBoard;
  isGameRunning: boolean;
  renderSquare: (arg0: RenderSquare) => ReactNode;
}) => {
  return (
    <div
      className={`w-auto inline-flex min-w-[150px] min-h-[250px]
                  items-center justify-center
                  flex-col bg-purple-100 rounded-md p-4 shadow-md
                  space-y-5
                `}
    >
      <div className="font-bold text-3xl">Sweeper</div>
      {!isGameRunning && (
        <>
          <div className="flex flex-row flex-nowrap space-x-2">
            <div className="flex flex-col m-1">
              <span className="text-center text-sm">rows</span>
              <Input disabled={isGameRunning} />
            </div>
            <div className="flex flex-col m-1">
              <span className="text-center text-sm">columns</span>
              <Input disabled={isGameRunning} />
            </div>
            <div className="flex flex-col m-1">
              <span className="text-center text-sm">bombs</span>
              <Input disabled={isGameRunning} />
            </div>
          </div>
          <Button>Start game</Button>
        </>
      )}
      <div>
        {isGameRunning && (
          <div className="shadow-sm inline-block bg-purple-600 p-1 rounded-md">
            {gameBoard.map((row, r) => {
              return (
                <div key={`row-${r}`}>
                  {row.map((col, c) => {
                    return renderSquare({
                      isBomb: col.isBomb,
                      isOpen: col.isOpen,
                      adjacentBombs: col.adjacentBombs,
                      key: `row-${r}-col-${c}`,
                    });
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
