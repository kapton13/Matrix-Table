import React, { useState } from 'react';
import { useMatrixContext } from '../../context/MatrixContext';
import styles from './MatrixForm.module.css';

const MatrixForm: React.FC = () => {
  const { setMatrix } = useMatrixContext();
  const [m, setM] = useState<number>(0);
  const [n, setN] = useState<number>(0);

  const handleGenerateMatrix = () => {
    const newMatrix: any[][] = [];
    
    for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push({
          id: i * n + j,
          amount: Math.floor(Math.random() * 900) + 100
        });
      }
      newMatrix.push(row);
    }
    
    setMatrix(newMatrix);
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>
        M (rows):
        <input 
          className={styles.input} 
          type="number" 
          value={m} 
          onChange={(e) => setM(Number(e.target.value))} 
          min="0" 
          max="100" 
        />
      </label>
      <label className={styles.label}>
        N (columns):
        <input 
          className={styles.input} 
          type="number" 
          value={n} 
          onChange={(e) => setN(Number(e.target.value))} 
          min="0" 
          max="100" 
        />
      </label>
      <button className={styles.button} onClick={handleGenerateMatrix}>Generate Matrix</button>
    </div>
  );
};

export default MatrixForm;