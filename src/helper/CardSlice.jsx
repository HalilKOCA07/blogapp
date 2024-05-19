import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
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
    getApiCardSuccess: (state, { payload}) => {
      fetchStart.loading = false;
      state.blogs = payload.data;
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess } = CardSlice.actions;

export default CardSlice.reducer;
