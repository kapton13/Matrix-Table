import { useState } from "react";
import MatrixContext, { Cell, Dimensions } from "../../context/MatrixContext";

type MatrixProviderProps = {
  children: React.ReactNode;
};

const MatrixProvider = ({ children }: MatrixProviderProps) => {
  const [matrix, setMatrix] = useState<Cell[][]>([]);
  const [dimensions, setDimensions] = useState<Dimensions>({ M: 0, N: 0 });
  const [maxMatrixLength, setMaxMatrixLength] = useState(Number);

  const generateMatrix = (M: number, N: number) => {
    const newMatrix = Array.from({ length: M }, (_, rowIndex) =>
      Array.from({ length: N }, (_, colIndex) => {
        setMaxMatrixLength(N);
        return ({
        id: rowIndex * N + colIndex,
        amount: Math.floor(Math.random() * 900) + 100,
      })})
    );
    setMatrix(newMatrix);
    setDimensions({ M, N });
  };
  
  const addRow = () => {
    if (dimensions.N === 0) return;
    const newRow = Array.from({ length: dimensions.N }, (_, colIndex) => ({
      id: maxMatrixLength * dimensions.N + colIndex,
      amount: Math.floor(Math.random() * 900) + 100,
    }));
    setMaxMatrixLength(maxMatrixLength + 1);
    setMatrix([...matrix, newRow]);
    setDimensions({ ...dimensions, M: dimensions.M + 1 });
  };

  const removeRow = (index: number) => {
    const newMatrix = matrix.filter((_, rowIndex) => rowIndex !== index);
    setMatrix(newMatrix);
    setDimensions({ ...dimensions, M: dimensions.M - 1 });
  };

  const incrementCell = (rowIndex: number, colIndex: number) => {
    setMatrix((prevMatrix) => {
      const updatedMatrix = prevMatrix.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) =>
              cIdx === colIndex ? { ...cell, amount: cell.amount + 1 } : cell
            )
          : row
      );
      return updatedMatrix;
    });
  };

  return (
    <MatrixContext.Provider value={{ matrix, setMatrix, dimensions, generateMatrix, addRow, removeRow, incrementCell }}>
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixProvider;