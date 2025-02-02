import React from 'react';
import { useMatrix } from "../../context/MatrixContext";

import styles from './Matrix.module.css';

const Matrix: React.FC = () => {
  const { matrix } = useMatrix();

  if (matrix.length === 0) return null;

  const columnSums = matrix[0].map((_, colIndex) => 
    matrix.reduce((sum, row) => sum + row[colIndex].amount, 0)
  );

  const percentiles = columnSums.map((sum) => Math.floor(sum / 2));

  return (
    <div className={styles.matrixContainer}>
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
                <div key={cell.id} className={`${styles.cell} ${styles.equalCell}`} style={{ width: `${100 / (matrix[0].length + 1)}%` }}>
                  <div className={styles.cellId}>{cell.id}</div>
                  <div className={styles.amount}>{cell.amount}</div>
                </div>
              ))}
              <div className={`${styles.cell} ${styles.sumCell} ${styles.equalCell}`}>{rowSum}</div>
            </div>
          );
        })}

        <div className={styles.row}>
          <div className={`${styles.headerCell} ${styles.cornerCell}`}>50th percentile</div>
          {percentiles.map((percentile, colIndex) => (
            <div key={`percentile-${colIndex}`} className={`${styles.cell} ${styles.footerRow} ${styles.equalCell}`}>
              {percentile}
            </div>
          ))}
          <div className={styles.headerCell}></div>
        </div>
      </div>
    </div>
  );
};

export default Matrix;