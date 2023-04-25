import React from 'react';
import s from '@/styles/Home.module.scss';
import Layout from '@/components/Layout/Layout';

export default function Home() {

  return (
    <>
      <Layout title="夏至">
        <div className={s.container}></div>
      </Layout>
    </>
  );
}
