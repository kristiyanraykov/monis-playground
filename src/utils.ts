import { BoardSize } from "./interfaces";

export const calculateBoardSize = (boardSize: BoardSize) => {
  const boardSizeArray = boardSize.split("x");
  const width = Number(boardSizeArray[0]);
  const height = Number(boardSizeArray[1]);
  return { width, height };
};
