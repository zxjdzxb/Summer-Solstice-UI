import React from 'react';
import Drawer from '@/components/Drawer/Drawer';
import Layout from '@/components/Layout/Layout';

const DrawerPage: React.FC = () => {
  
  return (
    <Layout title={'Drawer'}>
      <div>
        <Drawer>
          <h1>Drawer Content</h1>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </div>
    </Layout>
  );
};

export default DrawerPage;
