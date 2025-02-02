import { createContext, useContext } from "react";

type CellId = number;
type CellValue = number;

export type Cell = {
  id: CellId;
  amount: CellValue;
};

export type Dimensions = {
  M: number;
  N: number;
};

type MatrixContextType = {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
  dimensions: Dimensions;
  generateMatrix: (M: number, N: number) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
  incrementCell: (rowIndex: number, colIndex: number) => void;
};

const MatrixContext = createContext<MatrixContextType | null>(null);

export const useMatrix = (): MatrixContextType => {
  const context = useContext(MatrixContext);
  if (!context) {
    throw new Error("useMatrix must be used within a MatrixProvider");
  }
  return context;
};

export default MatrixContext;