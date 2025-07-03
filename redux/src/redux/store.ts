import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../src/redux/features/conuter/counterSlice"
import taskReducer from "../redux/task/taskSlice"


export const store = configureStore({
    reducer: {
        counter : counterSlice,
        tasks: taskReducer
    } 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType< typeof store.dispatch>