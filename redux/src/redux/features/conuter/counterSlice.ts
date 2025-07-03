import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        discernment: (state, action) => {
            state.count = state.count - action.payload;
        }
    }
})

export const {increment, discernment} = counterSlice.actions;



export default counterSlice.reducer;