import { createSlice } from "@reduxjs/toolkit";
 


interface initialState{
    task: ImageTrackList;
}


const initialState = {
    task:[
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
    reducers:{}
})

export default taskSlice.reducer;