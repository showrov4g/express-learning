import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ITask } from "@/types";



interface initialState {
    tasks: ImageTrackList;
    filter: "all" | "hight" | "medium"
}


const initialState = {
    tasks: [
        {
            id: "gadsgas",
            title: "initialize frontend",
            description: "this is task to do description",
            dueDate: "2020-30-20",
            isCompleted: false,
            priority: "low",
        },
        {

            id: "gadsgas",
            title: "initialize frontend",
            description: "this is task to do description",
            dueDate: "2020-30-20",
            isCompleted: false,
            priority: "high",

        }
    ]
}

const taskSlice = createSlice({
    name: "tasK",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>)=>{
            state.tasks.push(action.payload)
        }
    }
})


export const {
  addTask
} = taskSlice.actions


export const selectTask = (state: RootState)=>{
    return state.todo.tasks
}



export default taskSlice.reducer;