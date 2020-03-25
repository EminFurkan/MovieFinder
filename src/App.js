import React from 'react';
import './styles/styles.sass';
import { Navbar } from './components/Navbar';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;