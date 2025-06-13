import express, { Request, Response } from "express";
import fs from "fs"
import path from "path";
import { client } from "../../config/mongodb";

const filePath = path.join(__dirname , "../db/todo.json");

export const todoRouter = express.Router()


todoRouter.get('/', (req: Request, res : Response) => {
  console.log("From params", req.params)
    const data = fs.readFileSync(filePath, {encoding: "utf-8"});
    // console.log(data)

  res.json({
    message: "todo router",
    data
  });
})


todoRouter.post('/create-todos', async (req: Request, res : Response) => {
  const {title, description, priority} = req.body;
    const db = await client.db("learningDb");
    const collection = await db.collection("todo");
     await collection.insertOne({
      title : title,
      description : description,
      priority: priority,
      isCompleted: "False"
    })
 
    // const cursor = collection.find({});
    // const todos  = await cursor.toArray();

  // res.send(todos)
})

todoRouter.get('/:id',async(req: Request, res: Response)=>{
  const id = req.params.id;
  console.log(id, 24);
})
