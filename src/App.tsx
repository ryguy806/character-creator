import React, {FC, useState} from 'react';
import { GlobalStyle } from './styles/FormComponents.style';
import CharacterForm from './components/CharacterForm';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <CharacterForm />
    </>
  );
}

export default App;