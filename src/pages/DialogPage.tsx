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
            <p>QWERTY欧帕斯对方过后就开了自行车VB你们</p>
          </Dialog>
        </div>
      </Layout>
    </>
  );
}

export default DialogPage;
