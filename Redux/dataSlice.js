import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        title: "",
        amount: "",
    },
    reducers: {
        addExpense: (state, action) => { state.title.push(action.payload.title), state.amount.push(action.payload.amount) },
        // removeExpense: (state, action) => { state.ids.splice(state.ids.indexOf(action.payload.id), 1) },
    }
})

export const { addFav} = dataSlice.actions;

export default dataSlice.reducer;