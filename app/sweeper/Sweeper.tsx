"use client";

import { useState } from "react";
import { Square } from "./components/Square";
import { Board } from "./components/Board";
import { initGameBoard } from "./src/setup";

const WIDTH = 10;
const HEIGHT = 10;
const NUMBER_OF_BOMBS = 2;

export const Sweeper = () => {
  const [gameBoard, setGameBoard] = useState(initGameBoard(WIDTH, HEIGHT));

  const handleOnSquareClick = () => {};
  const handleOnSquareSecondClick = () => {};

  return (
    <div className="flex justify-center p-24">
      <Board
        gameBoard={gameBoard}
        isGameRunning={false}
        renderSquare={({ key, ...props }) => (
          <Square
            key={key}
            onClick={handleOnSquareClick}
            onSecondClick={handleOnSquareSecondClick}
            {...props}
          />
        )}
      >
        {/* {gameBoard.map((row, r) => {
          return (
            <div key={`row-${r}`}>
              {row.map((col, c) => {
                return (
                  <Square
                    isBomb={col.isBomb}
                    isOpen={col.isOpen}
                    adjacentBombs={col.adjacentBombs}
                    key={`row-${r}-col-${c}`}
                  >
                    {col.isOpen.toString()}
                  </Square>
                );
              })}
            </div>
          );
        })} */}
      </Board>
    </div>
  );
};
