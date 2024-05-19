import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  newBlog: [],
  categories:[],
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
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess } = CardSlice.actions;

export default CardSlice.reducer;
