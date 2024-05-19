import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, {payload}) => {
        state.loading=false
        state.user=payload.user.username
        state.token=payload.token
        console.log(payload.user)
    },
    fetchFail:(state) => {
        state.loading= false
        state.error=true
    }
  },
});

export const {fetchFail,fetchStart,loginSuccess} = AuthSlice.actions;

export default AuthSlice.reducer;
