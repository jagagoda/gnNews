import { RootState } from "./store"

const selectNewsData = (state: RootState) => {
  state.news.data
}

export { selectNewsData };