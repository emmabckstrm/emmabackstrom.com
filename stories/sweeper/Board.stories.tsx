import type { Meta, StoryObj } from "@storybook/react";
import { Board } from "../../app/sweeper/components/Board";
import { Square } from "../../app/sweeper/components/Square";
import { initGameBoard } from "../../app/sweeper/src/setup";

const meta: Meta<typeof Board> = {
  title: "Sweeper/Board",
  component: Board,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Board>;

const gameBoard = initGameBoard(5, 5);

export const Idle: Story = {
  args: {
    isGameRunning: false,
    gameBoard,
    renderSquare: ({ key, ...props }) => (
      <Square
        onClick={() => {}}
        onSecondClick={() => {}}
        key={key}
        {...props}
      />
    ),
  },
};

export const GameIsRunning: Story = {
  args: {
    isGameRunning: true,
    gameBoard,
    renderSquare: ({ key, ...props }) => (
      <Square
        onClick={() => {}}
        onSecondClick={() => {}}
        key={key}
        {...props}
      />
    ),
  },
};
