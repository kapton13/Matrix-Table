import React from 'react';
import { useMatrixContext } from '../../context/MatrixContext';
import styles from './Matrix.module.css';

const Matrix: React.FC = () => {
  const { matrix } = useMatrixContext();

  return (
    <div className={styles.matrixContainer}>
      {matrix.length > 0 && (
        <div className={styles.matrix}>
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((cell) => (
                <div key={cell.id} className={styles.cell}>
                  <div className={styles.cellId}>{cell.id}</div>
                  <div className={styles.amount}>{cell.amount}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matrix;