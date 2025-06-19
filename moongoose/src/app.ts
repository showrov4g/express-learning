import express, { Application, Request, Response } from "express"
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

// schema 
const noteSchema = new Schema(
    {
    title: { type: String, required: true, trim: true },
    content: { type: String, },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: {
        type: "Boolean",
        default: false,
    },
    tags: {
        label: { type: String, require: true },
        color: { type: String, default: "gray" }
    }
},
{
    versionKey: false,
    timestamps: true
}
)

const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
    const body = req.body;

    // const myNote = new Note({
    //     title: "learning mongoose",
    //     content: "I am learning mongoose"
    // })
    // await myNote.save();
    const note = await Note.create(body);


    res.status(201).json({
        success: true,
        message: "Successfully created",
        note
    })
})

app.get("/notes/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;

    const note = await Note.findOne({title : "learningt express"});


    res.status(201).json({
        success: true,
        message: "Successfully created",
        note
    })
})
// ----------------

app.patch("/notes/:noteId", async (req: Request, res: Response) => {
    

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate({_id:noteId}, updatedBody,{new: true});
    res.status(201).json({
        success: true,
        message: "data has been updated",
        note
    })
})



app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to my Note app")
})



export default app;