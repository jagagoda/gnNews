import { NewsApi } from "api";
import { useDispatch } from "react-redux";

import { Country } from "config/countries";
import { newsActions } from "store/ducks/news";

const useGetArticles = () => {
  const dispatch = useDispatch();

  const fetch = (country: Country) => {
    dispatch(newsActions.initDataDownload());

    NewsApi.getArticles({ country })
      .then((response) => {
        const { data } = response;
        const { articles } = data;

        dispatch(newsActions.dataDownloadSuccess({ data: articles }));
      })
      .catch(() => {
        dispatch(newsActions.dataDownloadFailed());
      });
  };

  return {
    fetch,
  }
};

export default useGetArticles;
