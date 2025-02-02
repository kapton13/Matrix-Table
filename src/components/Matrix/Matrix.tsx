import React from 'react';
import { useMatrixContext } from '../../context/MatrixContext';
import styles from './Matrix.module.css';

const Matrix: React.FC = () => {
  const { matrix } = useMatrixContext();

  return (
    <div className={styles.matrixContainer}>
      {matrix.length > 0 && (
        <div className={styles.matrix}>
          <div className={styles.row}>
            <div className={`${styles.headerCell} ${styles.cornerCell}`}>#</div>
            {matrix[0].map((_, colIndex) => (
              <div key={`col-${colIndex}`} className={styles.headerCell}>
                {colIndex + 1}
              </div>
            ))}
            <div className={styles.headerCell}>Sum values</div>
          </div>

          {matrix.map((row, rowIndex) => {
            const rowSum = row.reduce((sum, cell) => sum + cell.amount, 0);

            return (
              <div key={rowIndex} className={styles.row}>
                <div className={styles.headerCell}>{rowIndex + 1}</div>

                {row.map((cell) => (
                  <div key={cell.id} className={styles.cell}>
                    <div className={styles.cellId}>{cell.id}</div>
                    <div className={styles.amount}>{cell.amount}</div>
                  </div>
                ))}

                <div className={`${styles.cell} ${styles.sumCell}`}>
                  {rowSum}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Matrix;