import express, { Application, Request, Response } from "express"
import { model, Schema } from "mongoose";

const app: Application = express();

// schema 
const noteSchema = new Schema({
    title: String,
    content: String
})

const Note = model("Note", noteSchema);

app.post("/")

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my Note app")
})



export default app;