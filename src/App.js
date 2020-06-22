import React from 'react';
import Navmenu from './components/Navmenu';
import MainComponent from './components/MainComponent';
import FooterTag from './components/FooterTag';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navmenu/>
      <MainComponent/>
      <FooterTag/>
    </div>
  );
}

export default App;
