import React from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';
import Layout from '@/components/Layout/Layout';

const TooltipPage: React.FC = () => {
  return (
    <Layout title={'Tooltip'}>
      <h1>Tooltip Page</h1>
      <Tooltip content="This is a tooltip" position="top">
        <button>Hover me</button>
      </Tooltip>
    </Layout>
  );
};

export default TooltipPage;
