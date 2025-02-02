import React, { createContext, useContext, useState, ReactNode } from 'react';

type CellId = number;
type CellValue = number;

type Cell = {
  id: CellId;
  amount: CellValue;
};

interface MatrixContextType {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

const MatrixContext = createContext<MatrixContextType | undefined>(undefined);

export const MatrixProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [matrix, setMatrix] = useState<Cell[][]>([]);

  return (
    <MatrixContext.Provider value={{ matrix, setMatrix }}>
      {children}
    </MatrixContext.Provider>
  );
};

export const useMatrixContext = (): MatrixContextType => {
  const context = useContext(MatrixContext);
  if (!context) {
    throw new Error('useMatrixContext must be used within a MatrixProvider');
  }
  return context;
};