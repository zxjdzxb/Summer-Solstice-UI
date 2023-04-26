import React, {MouseEventHandler} from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import s from './Dialog.module.scss';

interface Props {
  visible: boolean,
  buttons?: Array<JSX.Element>,
  onClose: (e: React.MouseEvent) => void,
  children: React.ReactNode,
  closeOnClickMask?: boolean
}

Dialog.defaultProps = {
  closeOnClickMask: false
};

function Dialog(props: Props) {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
    console.log(e);
  };
  const closeOnMask: MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  //const btnApi = (type: string) => {
  //  switch (type) {
  //    case 'confirm':
  //      return (
  //        <button onClick={() => {}}>确认</button>
  //      );
  //    case 'cancel':
  //      return (
  //        <button onClick={() => {}}>取消</button>
  //      );
  //    default:
  //      return (
  //        <button onClick={() => {}}>确认</button>
  //      );
  //  }
  //};
  return (
    <>
      <Button onClick={(e) => props.onClose(e)} type="success" style={{zIndex: 9}}>click</Button>
      {props.visible
        ?
        <div style={{zIndex: 10}}>
          <div className={s.mask} onClick={closeOnMask}></div>
          <div className={s.dialog}>
            <div className={s.close} onClick={onClickClose}>
              <Icon name="close" className="close"/>
            </div>
            <header className={s.header}>标题</header>
            <main className={s.main}>
              {props.children}
            </main>
            <footer className={s.footer}>
              {props.buttons && props.buttons.map((button, index) =>
                React.cloneElement(button, {key: index})
              )}
            </footer>
          </div>
        </div>
        : '点击展示'}


    </>);

}


export default Dialog;
