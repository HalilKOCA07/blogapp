import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogCard: [],
    loading: false,
    error: false
}

const CardSlice = createSlice({
  name: card,
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading= true
    },
    getApiCardSuccess:(state, {payload: {path, cardData}}) => {
        fetchStart=false
        state[path] = cardData
    },
    fetchError:(state) => {
        state.loading=false
        state.error=true
    }
  }
});

export const {fetchError, fetchStart, getApiCardSuccess} = CardSlice.actions

export default CardSlice.reducer