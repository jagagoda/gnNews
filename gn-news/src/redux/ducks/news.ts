import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type InitialState = {
  view: "cards" | "list";
  data: {
    isLoading: boolean;
    records: Array<any>;
    error: boolean;
  };
};

const initialState: InitialState = {
  view: "cards",
  data: {
    isLoading: false,
    records: [],
    error: false,
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    initDataDownload: (state) => {
      state.data.isLoading = true;
      state.data.records = [];
      state.data.error = false;
    },
    dataDownloadSuccess: (state, { payload }) => {
      state.data.isLoading = false;
      state.data.records = payload.data;
      state.data.error = false;
    },
    dataDownloadFailed: (state) => {
      state.data.isLoading = false;
      state.data.records = [];
      state.data.error = true;
    },
  },
});

const { actions: newsActions, reducer } = newsSlice;

export default reducer;
export { newsActions };
