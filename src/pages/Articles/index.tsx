import React from 'react';
import {GetServerSidePropsContext} from 'next';
import {InferGetServerSidePropsType} from 'next';
import {getArticles} from '@/pages/api/articles';
import Layout from '@/components/Layout/Layout';
import s from '@/styles/Articles.module.scss';
import Link from 'next/link';

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
        <div className={s.container}>
          <div className={s.article_list}>
            {data.map((item: any) => (
              <div key={item.article_id}>
                <Link href={`/Articles/${item.article_id}`}>
                  <div className={s.title_item}>
                    {item.article_info.title}
                  </div>
                </Link>
                <div className={s.content_item}>
                  {item.article_info.brief_content}
                </div>
              </div>
            ))}

          </div>
        </div>
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
