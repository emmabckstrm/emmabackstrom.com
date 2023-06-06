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
    for (let col = 0; col < width; col++) {
      newRow.push({ ...squareStatus });
    }
    board.push(newRow);
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

export const getAdjacentSquares = (
  row: number,
  col: number,
  gameBoard: GameBoard
) => {
  const adjacents: Position[] = [];
  const deltas = [-1, 0, 1];
  for (let i = 0; i < 8; i++) {}
  deltas.forEach((delta) => {
    deltas.forEach((delta2) => {
      if (delta === 0 && delta2 === 0) return;
      const newRow = row + delta;
      const newCol = col + delta2;
      if (
        newRow < 0 ||
        newRow >= gameBoard.length ||
        newCol < 0 ||
        newCol >= gameBoard[0].length
      ) {
        return;
      }

      adjacents.push([newRow, newCol]);
    });
  });
  return adjacents;
};
