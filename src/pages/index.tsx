import React from 'react';
import s from '@/styles/Home.module.scss';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  const groupData = [
    {label: '选项1', value: 'a1'},
    {label: '选项2', value: 'a2'},
    {label: '选项3', value: 'a3'},
    {value: 'a4'},
    {label: '禁用', value: 'a5', disabled: true},
    {label: '勾选禁用', value: 'a6', disabled: true}
  ];
  const onChange = (value: string[]) => {
    console.log(value);
  };
  return (
    <>
      <Layout title="夏至">
        <div className={s.container}>
          <h1>测试页面</h1>
        </div>
      </Layout>
    </>
  );
}
