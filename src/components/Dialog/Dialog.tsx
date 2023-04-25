import s from './Dialog.module.scss';
import React from 'react';
import Icon from '@/components/Icon/Icon';

interface Props {
  visible: boolean,
  buttons?: Array<JSX.Element>,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean,
  children: React.ReactNode,
}

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default function Dialog(props: Props) {
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  return (
    props.visible ?
      <>
        <div className={s.dialog}>
          <div className={s.mask} onClick={onClickMask}>
          </div>
          <div className={s.close} onClick={onClickClose}>
            <Icon name="close" className="close"/>
          </div>
          <header className={s.header}>提示</header>
          <main className={s.main}>
            {props.children}
          </main>
          <footer className={s.footer}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        </div>
      </>
      :
      null
  );

}
