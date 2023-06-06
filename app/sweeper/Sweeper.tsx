"use client";

import { useState } from "react";
import { Square } from "./components/Square";
import { Board } from "./components/Board";
import {
  initGameBoard,
  generateBombPositions,
  getAdjacentSquares,
} from "./src/setup";
import type { SquareStatus, GameBoard } from "./src/setup";

const WIDTH = 10;
const HEIGHT = 10;
const NUMBER_OF_BOMBS = 2;

export const Sweeper = () => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameBoard, setGameBoard] = useState<GameBoard>([]);

  const updateSquare = (
    row: number,
    col: number,
    newValue: Partial<SquareStatus>
  ) => {
    setGameBoard((prevBoard) => {
      const newBoard = prevBoard.slice();
      newBoard[row][col] = { ...newBoard[row][col], ...newValue };
      return newBoard;
    });
  };
  const updateBoardWithSquare = (
    row: number,
    col: number,
    board: GameBoard,
    newValue: Partial<SquareStatus>
  ) => {
    const newBoard = board.slice();
    newBoard[row][col] = { ...newBoard[row][col], ...newValue };
    return newBoard;
  };

  const handleOnGameStart = (rows: number, cols: number, bombs: number) => {
    let gb = initGameBoard(rows, cols);
    // setGameBoard(gb);
    const bombPositions = generateBombPositions(rows, cols, bombs);
    bombPositions.forEach((position) => {
      gb = updateBoardWithSquare(position[0], position[1], gb, {
        isBomb: true,
      });
      // updateSquare(position[0], position[1], { isBomb: true });
    });
    bombPositions.forEach((position) => {
      const adjacents = getAdjacentSquares(position[0], position[1], gb);
      adjacents.forEach((adjacent) => {
        const adjacentSquare = gb[adjacent[0]][adjacent[1]];
        if (adjacentSquare.isBomb || adjacentSquare.adjacentBombs > 0) {
          return;
        }

        const adjacentAdjacents = getAdjacentSquares(
          adjacent[0],
          adjacent[1],
          gb
        );
        let adjacentBombs = 0;
        adjacentAdjacents.forEach((adj) => {
          if (gb[adj[0]][adj[1]].isBomb) {
            adjacentBombs += 1;
          }
        });
        gb = updateBoardWithSquare(adjacent[0], adjacent[1], gb, {
          adjacentBombs,
        });
      });
    });
    setGameBoard(gb);
    setGameIsRunning(true);
    console.log("game start!\n", gameBoard, "\n\n\n", gb);
  };

  const handleOnSquareClick = () => {
    console.log("left click");
  };

  const handleOnSquareSecondClick = () => {
    console.log("right click");
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
