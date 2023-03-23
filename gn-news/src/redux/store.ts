import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './ducks/news'

const store = configureStore({
  reducer: {
    news: newsReducer
  },
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export default store;
export type { RootState, AppDispatch };