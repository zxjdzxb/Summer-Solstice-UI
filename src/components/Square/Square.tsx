import {useState} from 'react';
import s from './Square.module.scss';

interface squareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({value, onSquareClick}: squareProps) {
  //const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    //setValue('X');
    onSquareClick();
  }

  return (
    <button className={s.square} onClick={handleClick}>{value}</button>
  );
}

