import { createSlice, type PayloadAction, nanoid} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ITask } from "@/types";
import {v4 as uuidv4} from "uuid"



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

type draftTask = Pick<ITask, "title"| "description"| "dueDate"| "member" | "priority">


// task create function  

const createTask = (taskData: draftTask): ITask=>{
    return{id: nanoid(), isCompleted: false, ...taskData}
}

const taskSlice = createSlice({
    name: "tasK",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>)=>{
            const id = uuidv4();

            const taskData = {
                ...action.payload,
                id,
                isCompleted: false
            }

            state.tasks.push(taskData)
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