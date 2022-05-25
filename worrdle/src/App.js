import GameBoard from './GameBoard';
import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "Worrdle";
  }, []);

  return (
    <>
    <div>
      <h1 style = {{color: 'white', justifyContent: 'center', alignItems:'center', marginLeft: 390}}> Worrdle</h1>
    </div>
    <div className="App">
      <GameBoard />
    </div>
    </>
  );
}

export default App;
