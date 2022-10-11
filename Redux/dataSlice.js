import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [
            {
                id: "e1",
                title: "Test",
                amount: 120,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e2",
                title: "Shoes",
                amount: 500,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e3",
                title: "Tea",
                amount: 20,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e4",
                title: "Stationary",
                amount: 250,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e5",
                title: "Test",
                amount: 120,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e6",
                title: "Shoes",
                amount: 500,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e8",
                title: "Tea",
                amount: 20,
                date: new Date("2022-09-11").toDateString(),
            },
            {
                id: "e7",
                title: "Stationary",
                amount: 250,
                date: new Date("2022-09-11").toDateString(),
            },
        ],
    },
    reducers: {
        addExpense: (state, action) => { state.data.push(action.payload)},
        // removeExpense: (state, action) => { state.ids.splice(state.ids.indexOf(action.payload.id), 1) },
        removeExpense: (state, action) => state.data.splice(state.data.indexOf(action.payload.id), 1)
    }
})

export const { addExpense, removeExpense} = dataSlice.actions;

export default dataSlice.reducer;