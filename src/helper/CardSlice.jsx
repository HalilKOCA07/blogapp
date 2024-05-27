import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  newBlog: [],
  categories:[],
  detail:[],
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
    getApiSingleBlog: (state, {payload: {singleBlog}}) => {
      state.loading = false
      state.detail = singleBlog
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess, getApiSingleBlog } = CardSlice.actions;

export default CardSlice.reducer;
