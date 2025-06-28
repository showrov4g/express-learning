import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../src/redux/features/conuter/counterSlice"


export const store = configureStore({
    reducer: {
        conter : counterSlice
    } 
});