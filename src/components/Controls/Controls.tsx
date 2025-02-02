import { useMatrix } from "../../context/MatrixContext";

import styles from "./Controls.module.css";

const Controls: React.FC = () => {
  const { generateMatrix, addRow, dimensions } = useMatrix();
  const m = dimensions.M;
  const n = dimensions.N;

  const handleMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newM = Math.min(100, Math.max(0, Number(e.target.value)));
    generateMatrix(newM, n);
  };

  const handleNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newN = Math.min(100, Math.max(0, Number(e.target.value)));
    generateMatrix(m, newN);
  };

  return (
    <div className={styles.controls}>
      <input type="number" value={m} onChange={handleMChange} placeholder="Rows (M)" className={styles.input} />
      <input type="number" value={n} onChange={handleNChange} placeholder="Columns (N)" className={styles.input} />
      <button onClick={() => generateMatrix(m, n)} className={styles.btn}>Generate Matrix</button>
      <button onClick={addRow} className={styles.btn}>Add Row</button>
    </div>
  );
};

export default Controls;