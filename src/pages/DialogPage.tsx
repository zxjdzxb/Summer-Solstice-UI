import s from './DialogPage.module.scss';
import React, {useRef, useState} from 'react';
import Dialog from '@/components/Dialog';


export default function DialogPage() {
  const [y, setY] = useState(false);
  return (
    <>
      <div className={s.container}>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setY(false);}} key={1}>确认</button>,
            <button onClick={() => {setY(false);}} key={2}>取消</button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>HI</strong>
        </Dialog>
      </div>
    </>
  );
}
