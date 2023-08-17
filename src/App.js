import {useState} from 'react'
import './App.css';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X')
  }
  return <button className='square' onClick={handleClick}>{value}</button>
}

function App() {
  return (
    <div className="App">
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>

    </div>
  );
}

export default App;
