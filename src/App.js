import './App.css';
import { useState } from 'react';

function App() {
  const [bg, setBg] = useState('white')

  const design ={
    position: 'absolute',
    backgroundColor: bg,
    width: '100%',
    height: '100%'
  }

  const btnDesign = {
    position: 'absolute',
    left: '45%',
    top: '50%'
  }

  const mode = () => {
    bg === 'white'? setBg('black'):setBg('white')
  }

  return (
    <div className="App" style={design}>
      <button onClick={mode} style={btnDesign}>Change Mode</button>      
    </div>
  );
}

export default App;
