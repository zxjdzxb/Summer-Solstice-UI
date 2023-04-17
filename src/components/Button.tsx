import s from './Button.module.scss';

export default function Button() {
  return (
    <>
      <div className={s.container}>
        <button className={s.button}>Button</button>
      </div>
    </>
  );
}
