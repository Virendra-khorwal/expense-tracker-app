import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        ids: [],
        title: "",
        amount: "",
    },
    reducers: {
        addExpense: (state, action) => { state.ids.push(action.payload.id), state.title.push(action.payload.title), state.amount.push(action.payload.amount) },
        removeExpense: (state, action) => { state.ids.splice(state.ids.indexOf(action.payload.id), 1) },
    }
})

export const { addFav, removeFav } = dataSlice.actions;

export default dataSlice.reducer;