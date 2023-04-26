import React from 'react';
import {GetServerSidePropsContext} from 'next';
import {InferGetServerSidePropsType} from 'next';
import {getArticles} from '@/pages/api/articles';
import Layout from '@/components/Layout/Layout';

export default function Page({
                               data,
                               count,
                               page,
                             }: InferGetServerSidePropsType<typeof getStaticProps>) {
  // Render data...
  console.log(data);
  console.log(page);
  console.log(count);
  return (
    <>
      <Layout title="掘金文章">
        <h1>
          测试
          {page}
        </h1>
      </Layout>
    </>
  );
}

// 每次刷新页面都后执行这个函数
export async function getStaticProps(context: GetServerSidePropsContext) {
  const page = (context.query?.page as string) || 1;
  // 通过 API 请求数据
  const uid = process.env.uid!;
  const {data, count} = await getArticles(uid, (+page - 1) * 10);

  // 将数据传递到页面上
  return {
    props: {
      data: data,
      count: count,
      page: +page
    }
  };
}
