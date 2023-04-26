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

export async function getArticles(uid: string, cursor: number = 0) {
  const res = await axios.post(
    'https://api.juejin.cn/content_api/v1/article/query_list',
    {
      cursor: '0',
      sort_type: 2,
      user_id: '4174167156993223',
    }
  );

  return res.data;
}