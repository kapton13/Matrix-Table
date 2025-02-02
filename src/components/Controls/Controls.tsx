import { useMatrix } from "../../context/MatrixContext";

import styles from "./Controls.module.css";

const Controls: React.FC = () => {
  const { generateMatrix, addRow, dimensions, nearestCount, setNearestCount } = useMatrix();
  const m = dimensions.M;
  const n = dimensions.N;
  const x = nearestCount;

  const handleMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newM = Math.min(100, Math.max(0, Number(e.target.value)));
    generateMatrix(newM, n);
  };

  const handleNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newN = Math.min(100, Math.max(0, Number(e.target.value)));
    generateMatrix(m, newN);
  };

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNearestCount(+e.target.value);
  };

  return (
    <div className={styles.controls}>
      <label className={styles.label}>
        Matrix rows:
        <input type="number" value={m} onChange={handleMChange} className={styles.input} />
      </label>
      
      <label className={styles.label}>
        Matrix columns:
        <input type="number" value={n} onChange={handleNChange} className={styles.input} />
      </label>

      <label className={styles.label}>
        Count of nearest numbers:
        <input type="number" value={x} onChange={handleXChange} className={styles.input} />
      </label>
      
      <button onClick={() => generateMatrix(m, n)} className={styles.btn}>Generate Matrix</button>
      <button onClick={addRow} className={styles.btn}>Add Row</button>
    </div>
  );
};

export default Controls;