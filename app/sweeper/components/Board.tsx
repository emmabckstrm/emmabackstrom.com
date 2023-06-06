import type { ChangeEvent, ReactNode } from "react";
import { useState } from "react";
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
  handleOnGameStart,
}: {
  children?: ReactNode;
  gameBoard: GameBoard;
  isGameRunning: boolean;
  renderSquare: (arg0: RenderSquare) => ReactNode;
  handleOnGameStart: () => void;
}) => {
  const [numberOfRows, setNumberOfRows] = useState(10);
  const [numberOfCols, setNumberOfCols] = useState(10);
  const [numberOfBombs, setNumberOfBombs] = useState(5);

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
              <Input
                disabled={isGameRunning}
                value={numberOfRows}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNumberOfRows(Number(event.target.value))
                }
              />
            </div>
            <div className="flex flex-col m-1">
              <span className="text-center text-sm">columns</span>
              <Input
                disabled={isGameRunning}
                value={numberOfCols}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNumberOfCols(Number(event.target.value))
                }
              />
            </div>
            <div className="flex flex-col m-1">
              <span className="text-center text-sm">bombs</span>
              <Input
                disabled={isGameRunning}
                value={numberOfBombs}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNumberOfBombs(Number(event.target.value))
                }
              />
            </div>
          </div>
          <Button onClick={() => handleOnGameStart(numberOfRows, numberOfCols)}>
            Start game
          </Button>
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
