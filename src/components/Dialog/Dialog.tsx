import React, {MouseEventHandler} from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import s from './Dialog.module.scss';

interface Props {
  visible: boolean;
  onClose: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  closeOnClickMask?: boolean;
}

Dialog.defaultProps = {
  closeOnClickMask: false,
};

function Dialog({visible, onClose, children, closeOnClickMask = false}: Props) {
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
    console.log(e);
  };

  const closeOnMask: MouseEventHandler = (e) => {
    if (closeOnClickMask) {
      onClose(e);
    }
  };

  const confirmHandler: MouseEventHandler = (e) => {
    // 处理确认逻辑
    onClose(e);
  };

  const cancelHandler: MouseEventHandler = (e) => {
    // 处理取消逻辑
    onClose(e);
  };

  return (
    <>
      {visible ? (
        <div style={{zIndex: 10}}>
          <div className={s.mask} onClick={closeOnMask}></div>
          <div className={s.dialog}>
            <div className={`${s.close} close`} onClick={onClickClose}>
              <Icon name="close" className="close"/>
            </div>
            <header className={s.header}>标题</header>
            <main className={s.main}>{children}</main>
            <footer className={s.footer}>
              <Button onClick={confirmHandler} type="primary">
                确认
              </Button>
              <Button onClick={cancelHandler} type="primary">
                取消
              </Button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Dialog;
