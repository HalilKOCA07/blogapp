import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogCard: [],
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
    getApiCardSuccess: (state, { payload: { path, apiInfo } }) => {
      fetchStart = false;
      state[path] = apiInfo;
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchError, fetchStart, getApiCardSuccess } = CardSlice.actions;

export default CardSlice.reducer;
