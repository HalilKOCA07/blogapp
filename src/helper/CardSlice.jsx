import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  newBlog: [],
  categories:[],
  details:[],
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
      fetchStart.loading = false
      state[path] = blogInfo
    },
    getApiDetailSuccess: (state, {payload: {blogDetail}}) => {
      fetchStart.loading = false
      state.details = blogDetail
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess, getApiDetailSuccess } = CardSlice.actions;

export default CardSlice.reducer;
