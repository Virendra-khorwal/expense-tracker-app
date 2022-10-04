import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Redux/dataSlice";

export const store = configureStore({
    reducer: {
        expense : dataSlice,
    }
})