import s from '@/styles/DialogPage.module.scss';
import React, {useState} from 'react';
import Dialog from '@/components/Dialog/Dialog';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Button/Button';


function DialogPage() {
  const [y, setY] = useState(false);

  const closeDialog = () => { setY(!y);};
  return (
    <>
      <Layout title="Dialog">
        <div className={s.container}>
          <Dialog visible={y} closeOnClickMask={false} buttons={
            [
              <Button onClick={() => {setY(false);}} key={1} type="primary">确认</Button>,
              <Button onClick={() => {setY(false);}} key={2} type="primary">取消</Button>
            ]
          }
                  onClose={closeDialog}
          >
            <p>这是一条提示</p>
          </Dialog>
        </div>
      </Layout>
    </>
  );
}

export default DialogPage;
