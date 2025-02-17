import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./ducks/news";

const reducer = {
  news: newsReducer,
};

const store = configureStore({
  reducer,
  middleware: [],
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
