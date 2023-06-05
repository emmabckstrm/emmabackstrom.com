import { useState } from "react";
import { Square } from "../../components/sweeper/Square";
import { initGameBoard } from "./setup";

const WIDTH = 10;
const HEIGHT = 10;
const NUMBER_OF_BOMBS = 2;

export const Sweeper = () => {
  const [gameBoard, setGameBoard] = useState(initGameBoard(WIDTH, HEIGHT));

  return (
    <div className="bg-white">
      {gameBoard.map((row) => {
        return (
          <div>
            {row.map((col) => {
              return (
                <Square
                  isBomb={col.isBomb}
                  isOpen={col.isOpen}
                  adjacentBombs={col.adjacentBombs}
                >
                  {col.isOpen.toString()}
                </Square>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
