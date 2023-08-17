import {useState} from 'react'
import './App.css';

function Square({value, squareClick}) {
  return <button className='square' onClick={squareClick}>{value}</button>
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares)    
  }
  return (
    <div className="App">
      <div className='board-row'>
        <Square value={squares[0]} squareClick={() => handleClick(0)}/>
        <Square value={squares[1]} squareClick={() => handleClick(1)}/>
        <Square value={squares[2]} squareClick={() => handleClick(2)}/>
      </div>

      <div className='board-row'>
        <Square value={squares[3]} squareClick={() => handleClick(3)}/>
        <Square value={squares[4]} squareClick={() => handleClick(4)}/>
        <Square value={squares[5]} squareClick={() => handleClick(5)}/>
      </div>

      <div className='board-row'>
        <Square value={squares[6]} squareClick={() => handleClick(6)}/>
        <Square value={squares[7]} squareClick={() => handleClick(7)}/>
        <Square value={squares[8]} squareClick={() => handleClick(8)}/>
      </div>

    </div>
  );
}

export default App;
