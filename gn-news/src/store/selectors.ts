import { RootState } from ".";

const selectNewsData = (state: RootState) => state.news.data;
const selectNewsView = (state: RootState) => state.news.view;

export { selectNewsData, selectNewsView };
