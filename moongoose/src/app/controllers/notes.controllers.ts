import  express, { Request, Response }  from "express";
import { Note } from "../models/notes.modles";
export const noteRouter = express.Router();

noteRouter.post("/create-note", async (req: Request, res: Response) => {
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

noteRouter.get("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;

    const note = await Note.findOne({title : "learningt express"});


    res.status(201).json({
        success: true,
        message: "Successfully created",
        note
    })
})
// ----------------

noteRouter.patch("/:noteId", async (req: Request, res: Response) => {
    

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate({_id:noteId}, updatedBody,{new: true});
    res.status(201).json({
        success: true,
        message: "data has been updated",
        note
    })
})
