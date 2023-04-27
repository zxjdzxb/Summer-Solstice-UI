import s from '@/styles/Wellhead.module.scss';
import Layout from '@/components/Layout/Layout';
import Square from '@/components/Square/Square';
import {useState} from 'react';


interface boardProps {
  squares: Array<string>;
  xIsNext: boolean;
  onPlay: (nextSquares: Array<string>) => void;
}


function Board({xIsNext, squares, onPlay}: boardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // 生成新的数组，不要直接修改原数组
    console.log(squares.slice());
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>

      <div className={s.status}>{status}</div>
      <div className={s.board_row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className={s.board_row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className={s.board_row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>
  );
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className={s.li} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <Layout title="井字小游戏">
      <div className={s.game}>
        <div className={s.game_board}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className={s.game_info}>
          <ol className={s.ol}>{moves}</ol>
        </div>
      </div>
    </Layout>
  );
}

// 判断胜利者
function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // 遍历所有的胜利情况，如果有一种胜利情况成立，就返回胜利者
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

