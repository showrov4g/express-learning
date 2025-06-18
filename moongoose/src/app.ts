import express, { Application, Request, Response } from "express"
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

// schema 
const noteSchema = new Schema({
    title: {type: String, required: true, trim: true},
    content: {type: String, },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned:{
        type : "Boolean",
        default: false,
    }
})

const Note = model("Note", noteSchema);

app.post("/create-note", async(req: Request, res: Response)=>{
    const myNote = new Note({
        title: "learning mongoose",
        content: "I am learning mongoose"
    })
    await myNote.save();
    res.status(201).json({
        success: true,
        message:"Successfully created",
        myNote
    })
})

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my Note app")
})



export default app;