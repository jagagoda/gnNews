type ArticleSource = {
  id: string | null;
  name: string;
};

type Article = {
  author: string;
  source: ArticleSource | null;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
};

export type { Article, ArticleSource };