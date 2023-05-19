import React from 'react';
import Layout from '@/components/Layout/Layout';
import s from '@/styles/Home.module.scss';

export default function Home() {


  return (
    <>
      <Layout title="夏至">
        <div className={s.container}>
          <h1>首页</h1>
          <div>测试</div>
        </div>
      </Layout>
    </>
  );
}
