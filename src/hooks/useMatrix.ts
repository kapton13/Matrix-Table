import { useContext } from "react";
import MatrixContext, { MatrixContextType } from "../context/MatrixContext";

export const useMatrix = (): MatrixContextType => {
  const context = useContext(MatrixContext);
  if (!context) {
    throw new Error("useMatrix must be used within a MatrixProvider");
  }
  return context;
};