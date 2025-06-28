import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        discernment: (state) => {
            state.count = state.count - 1;
        }
    }
})

export const {increment, discernment} = counterSlice.actions;



export default counterSlice.reducer;