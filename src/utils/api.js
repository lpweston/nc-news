import axios from "axios";

const request = axios.create({
  baseURL: "https://news-northcoders.herokuapp.com/api"
});

export const getArticles = async ({
  author,
  topic,
  sort_by,
  order,
  limit,
  p
}) => {
  const res = await request.get("/articles", {
    params: { author, topic, sort_by, order, limit, p }
  });
  return res.data;
};

export const getArticle = async article_id => {
  const res = await request.get(`/articles/${article_id}`);
  return res.data.article;
};

export const patchArticle = async (article_id, inc_votes) => {
  const res = await request.patch(`/articles/${article_id}`, { inc_votes });
  return res.data.article;
};

export const postArticle = async ({ title, topic, body, username }) => {
  console.log(title, topic, body, username);
  const res = await request.post(`/articles/`, {
    title,
    topic,
    body,
    username
  });
  console.log(res.data.article);
  return res.data.article;
};

export const getTopics = async topic => {
  const res = await request.get("/topics");
  if (topic) {
    const result = res.data.topics.filter(({ slug }) => slug === topic)[0];
    if (result) return result;
    const err = { status: 404, msg: "Topic not found" };
    throw err;
  }
  return res.data.topics;
};

export const getUsers = async () => {
  const res = await request.get("/users");
  return res.data.users;
};

export const getUser = async username => {
  const res = await request.get(`/users/${username}`);
  return res.data.user;
};

export const postUser = async (username, name, avatar_url) => {
  const res = await request.post("/users", { username, name, avatar_url });
  return res.data.user;
};

export const getComments = async (article_id, sort_by, order, limit, p) => {
  const res = await request.get(`/articles/${article_id}/comments`, {
    params: {
      sort_by,
      order,
      limit,
      p
    }
  });
  return res.data;
};

export const patchComments = async (comment_id, inc_votes) => {
  const res = await request.patch(`/comments/${comment_id}`, { inc_votes });
  return res.data.comment;
};

export const postComment = async (article_id, username, body) => {
  const res = await request.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
  return res.data.comment;
};

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const deleteArticle = article_id => {
  return request.delete(`/articles/${article_id}`);
};
