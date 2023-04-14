import s from './Template.module.scss';


export default function Template() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}
