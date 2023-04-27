import s from '@/styles/MDX.module.scss';
import Layout from '@/components/Layout/Layout';
import {getArticleDetail} from '@/pages/api/articles';
import {Article} from '@/types/article';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';


export default function MDX(
  {
    data,
    statusCode,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data, statusCode);

  if (statusCode || !data) {
    return (<div>{statusCode}</div>);
  }
  const result = matter(data?.article_info.mark_content || '');
  const markdown = `Just a link: https://reactjs.com.`;
  return (
    <>
      <Layout title="详情">
        <div className={s.container}>
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.content}</ReactMarkdown>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query?.id as string;
  // 通过 API 请求数据
  const res = await getArticleDetail(id);
  if (res.err_msg === 'success') {
    // 将数据传递到页面上
    return {props: {data: res.data as Article}};
  }

  // 将数据传递到页面上
  return {props: {statusCode: 404}};
}
