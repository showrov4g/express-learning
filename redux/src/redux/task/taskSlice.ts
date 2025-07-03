import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";



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
            priority: "heigh",
        },
        {

            id: "gadsgas",
            title: "initialize frontend",
            description: "this is task to do description",
            dueDate: "2020-30-20",
            isCompleted: false,
            priority: "heigh",

        }
    ]
}

const taskSlice = createSlice({
    name: "tasK",
    initialState,
    reducers: {}
})


export const selectTask = (state: RootState)=>{
    return state.todo.tasks
}



export default taskSlice.reducer;