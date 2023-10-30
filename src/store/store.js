import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../components/features/articleSlice";

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});
