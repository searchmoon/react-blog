import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleList: [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticleList: (state, action) => {
      state.articleList = action.payload;
    },
  },
});

export const { setArticleList } = articleSlice.actions;

export default articleSlice.reducer;
