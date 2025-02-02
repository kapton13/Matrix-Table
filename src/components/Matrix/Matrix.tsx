import React, { useState } from 'react';
import { useMatrix } from "../../context/MatrixContext";

import styles from './Matrix.module.css';

const Matrix: React.FC = () => {
    const { matrix, dimensions, removeRow, incrementCell } = useMatrix();
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
     const colSums = Array.from({ length: dimensions.N }, (_, colIndex) =>
      matrix.reduce((sum, row) => sum + (row[colIndex]?.amount || 0), 0) / 2
    );
  
    return (
      <div className={styles.matrixWrapper}>
        <div className={styles.matrix} style={{ display: "grid", gridTemplateColumns: `repeat(${dimensions.N + 2}, 1fr)` }}>
            <div className={`${styles.header} ${styles.headerRow} ${styles.headerColumn} ${styles.maxZindex}`}>#</div>
            {dimensions.N > 0 &&
            Array.from({ length: dimensions.N }, (_, colIndex) => (
                <div key={`col-${colIndex}`} className={`${styles.header} ${styles.headerRow}`}>{colIndex + 1}</div>
            ))}
            <div className={`${styles.header} ${styles.sumColumn} ${styles.headerRow} ${styles.maxZindex}`}>Sum values</div>
            {matrix.map((row, rowIndex) => {
                const rowSum = row.reduce((sum, cell) => sum + cell.amount, 0);
                const maxVal = Math.max(...row.map(cell => cell.amount));
            
            return (
                <React.Fragment key={`row-${rowIndex}`}>
                <div className={`${styles.header} ${styles.headerColumn}`}>
                    {rowIndex + 1}
                    <button onClick={() => removeRow(rowIndex)} className={styles.removeBtn}>✖</button>
                </div>
                {row.map((cell, colIndex) => {
                    const percentage = ((cell.amount / rowSum) * 100).toFixed(2);
                    const intensity = maxVal > 0 ? (cell.amount / maxVal) * 255 : 0;

                    return (
                    <div
                        key={`cell-${rowIndex}-${colIndex}`}  
                        className={`${styles.cell} ${rowIndex % 2 === 0 ? styles.even : styles.odd}`}
                        onClick={() => incrementCell(rowIndex, colIndex)}
                        style={{ backgroundColor: hoveredRow === rowIndex ? `rgba(255, 0, 0, ${intensity / 255})` : "" }}
                    >
                        <div className={styles.cellId}>{cell.id}</div>
                        <div className={styles.amount}>{hoveredRow === rowIndex ? `${percentage}%` : cell.amount}</div>
                    </div>
                    );
                })}
                <div
                    className={`${styles.sumCell} ${styles.sumColumn}`}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                >
                    {rowSum}
                </div>
                </React.Fragment>
            );
            })}
    
            <div className={`${styles.header} ${styles.footerRow} ${styles.headerColumn} ${styles.maxZindex}`}>50th percentile</div>
            {dimensions.N > 0 &&
                colSums.map((sum, colIndex) => (
                <div key={`col-sum-${colIndex}`} className={`${styles.sumCell} ${styles.footerRow}`}>
                    {sum.toFixed(2)}
                </div>
                ))}
            <div className={styles.emptyCell}></div>
        </div>
      </div>
    );
  };

export default Matrix;