import React from 'react';
import Board from './components/Board'
import Synchtonizer from './components/Synchronizer';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Synchtonizer>
      <Board />
    </Synchtonizer>
  );
}

export default App;
