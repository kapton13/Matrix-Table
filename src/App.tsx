import React from 'react';
import { MatrixProvider } from './context/MatrixContext';
import MatrixForm from './components/MatrixForm/MatrixForm';
import Matrix from './components/Matrix/Matrix';
import './App.module.css';

const App: React.FC = () => {
  return (
    <MatrixProvider>
      <div className="App">
        <h1>Matrix Generator</h1>
        <MatrixForm />
        <Matrix />
      </div>
    </MatrixProvider>
  );
};

export default App;