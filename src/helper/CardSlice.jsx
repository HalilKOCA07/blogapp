import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  newBlog: [],
  categories:[],
  comments:[],
  loading: false,
  error: false,
};
const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getApiCardSuccess: (state, {payload: {path, blogInfo}}) => {
      state.loading = false
      state[path] = blogInfo
    },
    getApiCommentsSuccess: (state, {payload: {path, commentsInfo}}) => {
      state.loading = false
      state[path] = commentsInfo
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess, getApiCommentsSuccess } = CardSlice.actions;

export default CardSlice.reducer;
