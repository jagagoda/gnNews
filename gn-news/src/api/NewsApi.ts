import axios from "axios";
import { Country } from "config/countries";

const Api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

type GetArticlesParams = {
  country: Country;
};

const NewsApi = {
  getArticles(params: GetArticlesParams) {
    return Api.request({
      method: "GET",
      url: "top-headlines",
      params,
    });
  },
};

export default NewsApi;
