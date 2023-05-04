import React from 'react';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import {getArticles} from '@/pages/api/articles';
import Layout from '@/components/Layout/Layout';
import s from '@/styles/Articles.module.scss';
import Link from 'next/link';
import {Article} from '@/types/article';

export default function Page(
  {
    data,
    count,
    page,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const prevPage = page - 1 > 0;
  const nextPage = page + 1 <= Math.floor(count / 10) + 1;
  return (
    <>
      <Layout title="掘金文章">
        <div className={s.container}>
          <div className={s.article_list}>
            {data.map((item: Article) => (
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
          <footer>
            {!prevPage && (
              <button
                className="cursor-auto disabled:opacity-50"
                disabled={!prevPage}
              >
                上一页
              </button>
            )}
            {prevPage && (
              <Link
                href={
                  page - 1 === 1 ? `/Articles?page=1` : `/Articles?page=${page - 1}`
                }
              >
                <button>上一页</button>
              </Link>
            )}
            <span>
          {page} of {Math.floor(count / 10) + 1}
        </span>
            {!nextPage && (
              <button
                className="cursor-auto disabled:opacity-50"
                disabled={!nextPage}
              >
                下一页
              </button>
            )}
            {nextPage && (
              <Link href={`/Articles?page=${page + 1}`}>
                <button>下一页</button>
              </Link>
            )}
          </footer>
        </div>
      </Layout>
    </>
  );
}

// 每次刷新页面都后执行这个函数
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = (context.query?.page as string) || 1;
  // 通过 API 请求数据
  const uid = process.env.uid!;
  const {data, count} = await getArticles(uid, (+page - 1) * 10);

  // 将数据传递到页面上
  return {
    props: {
      data: data,
      count: count,
      page: +page,
    }
  };
}
