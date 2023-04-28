import axios from 'axios';


export async function getArticleDetail(article_id: string) {
  const res = await axios.post(
    'https://api.juejin.cn/content_api/v1/article/detail',
    {
      article_id,
    }
  );

  return res.data;
}


export async function getArticles(uid: string, cursor: number) {
  const res = await axios.post(
    'https://api.juejin.cn/content_api/v1/article/query_list',
    {
      cursor: cursor + '',
      sort_type: 2,
      user_id: uid + '',
    }
  );

  return res.data;
}
