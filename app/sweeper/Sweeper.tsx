"use client";

import { useState } from "react";
import { Square } from "./components/Square";
import { Board } from "./components/Board";
import { initGameBoard } from "./src/setup";

const WIDTH = 10;
const HEIGHT = 10;
const NUMBER_OF_BOMBS = 2;

export const Sweeper = () => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameBoard, setGameBoard] = useState([]);

  const handleOnSquareClick = () => {
    console.log("left click");
  };
  const handleOnSquareSecondClick = () => {
    console.log("right click");
  };
  const handleOnGameStart = (rows: number, cols: number, bombs: number) => {
    console.log("rows,", rows, "cols", cols);
    const gb = initGameBoard(cols, rows);
    setGameBoard(gb);
    setGameIsRunning(true);
    console.log("game start!\n", gameBoard, "\n\n\n", gb);
  };

  return (
    <div className="flex justify-center p-24">
      <Board
        gameBoard={gameBoard}
        isGameRunning={gameIsRunning}
        handleOnGameStart={handleOnGameStart}
        renderSquare={({ key, ...props }) => (
          <Square
            key={key}
            onClick={handleOnSquareClick}
            onSecondClick={handleOnSquareSecondClick}
            {...props}
          />
        )}
      ></Board>
    </div>
  );
};
