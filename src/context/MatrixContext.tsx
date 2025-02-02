import { createContext } from "react";

type CellId = number;
type CellValue = number;
type NearestCount = number;

export type Cell = {
  id: CellId;
  amount: CellValue;
};

export type Dimensions = {
  M: number;
  N: number;
};

export type MatrixContextType = {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
  dimensions: Dimensions;
  nearestCount: NearestCount;
  setNearestCount: React.Dispatch<React.SetStateAction<NearestCount>>;
  generateMatrix: (M: number, N: number) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
  incrementCell: (rowIndex: number, colIndex: number) => void;
};

const MatrixContext = createContext<MatrixContextType | null>(null);

export default MatrixContext;