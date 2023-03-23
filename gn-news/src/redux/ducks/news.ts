import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  data: Array<any>;
}

const initialState: InitialState = {
  data: [],
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload.data;
    }
  }
});

const { actions: newsActions, reducer } = newsSlice;

export default reducer;
export { newsActions };
