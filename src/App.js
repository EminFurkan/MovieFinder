import React from 'react';
import './styles/styles.sass';
import { Navbar } from './components/Navbar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;