import React from 'react';
import './App.css';
//import Character from './components/character/Character';
import { CharacterForm } from './components/form/CharacterForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterForm />
      </header>
    </div>
  );
}

export default App;
