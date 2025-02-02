import MatrixProvider from './components/MatrixProvider/MatrixProvider';
import Controls from './components/Controls/Controls';
import Matrix from './components/Matrix/Matrix';

import styles from './App.module.css';


const App: React.FC = () => {
  return (
    <MatrixProvider>
      <div className={styles.container}>
        <h1>Matrix Generator</h1>
        <Controls />
        <Matrix />
      </div>
    </MatrixProvider>
  );
};

export default App;