import express, { Application, Request, Response } from "express"
import { model, Schema } from "mongoose";
import { Note } from "./app/models/notes.modles";
import { noteRouter } from "./app/controllers/notes.controllers";

const app: Application = express();
app.use(express.json());
app.use("/notes", noteRouter)
// schema 







app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my Note app")
})



export default app;