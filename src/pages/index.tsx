import React, {useState} from 'react';
import s from '@/styles/Home.module.scss';
import Layout from '@/components/Layout/Layout';
import CheckboxGroup from '@/components/CheckBox/CheckboxGroup';
import DatePicker from '@/components/DataPicker/DataPicker';

export default function Home() {


  return (
    <>
      <Layout title="夏至">
        <div className={s.container}>
          <h1>测试页面</h1>
          <div>

          </div>
        </div>
      </Layout>
    </>
  );
}
