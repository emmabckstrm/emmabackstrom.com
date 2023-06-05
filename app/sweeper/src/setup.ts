export interface SquareStatus {
  isBomb: boolean;
  isOpen: boolean;
  adjacentBombs: number;
}

export type GameBoard = SquareStatus[][];
type Position = [number, number];

export const initGameBoard = (width: number, height: number): GameBoard => {
  const board = [];
  const squareStatus = {
    isBomb: false,
    isOpen: false,
    adjacentBombs: 0,
  };
  for (let row = 0; row < height; row++) {
    const newRow: SquareStatus[] = [];
    board.push(newRow);
    for (let col = 0; col < width; col++) {
      board[row][col] = { ...squareStatus };
    }
  }
  return board;
};

export const positionExistsInArray = (
  position: Position,
  array: Position[]
) => {
  if (array.length === 0) return false;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (JSON.stringify(position) === JSON.stringify(element)) {
      return true;
    }
  }
  return false;
};

export const generateBombPositions = (
  width: number,
  height: number,
  numberOfBombs: number,
  reservedPositions: Position[]
) => {
  if (width * height - reservedPositions.length <= numberOfBombs) {
    throw new Error("too many bombs!");
  }
  const positions: Position[] = [];

  const random = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const disallowedPosition = (
    position: Position,
    occupiedPositions: Position[],
    reservedPositions: Position[]
  ) => {
    return (
      positionExistsInArray(position, occupiedPositions) ||
      positionExistsInArray(position, reservedPositions)
    );
  };

  for (let i = 0; i < numberOfBombs; i++) {
    let pos = [random(height), random(width)] as [number, number];
    while (disallowedPosition(pos, positions, reservedPositions)) {
      pos = [random(height), random(width)];
    }

    positions.push(pos);
  }
  return positions;
};

export const calculateAdjacentBombs = () => {};
