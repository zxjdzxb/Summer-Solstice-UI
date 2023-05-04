import s from '@/styles/MDX.module.scss';
import Layout from '@/components/Layout/Layout';
import {getArticleDetail} from '@/pages/api/articles';
import {Article} from '@/types/article';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism';

function MDX(
  {
    data,
    statusCode,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (statusCode || !data) {
    return (<div>{statusCode}</div>);
  }
  const result = matter(data?.article_info.mark_content || '');
  return (
    <>
      <Layout title={data.article_info.title}>
        <div className={s.container}>
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}
                           components={{
                             code({node, inline, className, children, ...props}) {
                               const match = /language-(\w+)/.exec(className || '');
                               return !inline ? (
                                 <SyntaxHighlighter
                                   {...props}
                                   style={dark}
                                   language={match ? match[1] : 'typescript'}
                                   PreTag="div"
                                 >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                               ) : (
                                 <code {...props} className={className}>
                                   {children}
                                 </code>
                               );
                             }
                           }}
            >{result.content}</ReactMarkdown>
          </div>
        </div>
      </Layout>
    </>
  );
}

//const match = /language-(\w+)/.exec(className || '');的作用是什么？
// 用来匹配代码块的语言，比如：```js，就会匹配到 js
//  为什么要用{...props}，而不是直接用{...restProps}？
//  因为 restProps 里面有 className，但是我们不想把 className 传递给 SyntaxHighlighter，所以用 {...props}
//  这样就只会把 style 和 language 传递给 SyntaxHighlighter
//  为什么要用String(children).replace(/\n$/, '')？
//  因为 children 里面有换行符，但是 SyntaxHighlighter 会把换行符当成代码的一部分，所以我们要把换行符去掉
//  为什么要用PreTag="div"？
//  因为 SyntaxHighlighter 默认会把代码块包裹在<pre>标签里面，但是我们不想要<pre>标签，所以用 PreTag="div"，这样就会把代码块包裹在<div>标签里面
//  为什么要用!inline && match？
//  因为 inline 为 true 的时候，表示代码块是行内代码，我们不需要高亮行内代码，所以用 !inline 来判断是否是行内代码


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

export default MDX;
