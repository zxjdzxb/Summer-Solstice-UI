import s from '@/styles/DialogPage.module.scss';
import React, {useState} from 'react';
import Dialog from '@/components/Dialog/Dialog';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Button/Button';


function DialogPage() {
  const [visible, setVisible] = useState(false);

  const openDialog = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
  };
  return (
    <>
      <Layout title="Dialog">
        <div className={s.container}>
          <Button type="success" onClick={openDialog}>
            Click me
          </Button>

          <Dialog visible={visible} onClose={closeDialog} closeOnClickMask>
            <h2>自定义对话框</h2>
            <p>这是一个自定义的对话框组件</p>
          </Dialog>
        </div>
      </Layout>
    </>
  );
}

export default DialogPage;
