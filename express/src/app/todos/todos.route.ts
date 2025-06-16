import express, { NextFunction, Request, Response } from "express";
import fs from "fs"
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";


export const todoRouter = express.Router()


todoRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('this is custom middleware')
  res.json({
    message: "todo router",
  });
  next();
})


todoRouter.post('/create-todos', async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  const db = await client.db("learningDb");
  const collection = await db.collection("todo");
  const data = await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: "False"
  })

  // const cursor = collection.find({});
  // const todos  = await cursor.toArray();

  // res.send(todos)
  res.json(data)
})

todoRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("learningDb");
  const collection = await db.collection("todo");
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo)
})

todoRouter.delete("/todo-delete/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("learningDb");
  const collection = await db.collection("todo");
  const data = await collection.deleteOne({ _id: new ObjectId(id) })

  res.json(data)
});

// update data in the database
todoRouter.put("/todo-update/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("learningDb");
  const collection = await db.collection("todo");
  const filter = { _id: new ObjectId(id) }

  const updatedToDo = await collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true })

  res.json(updatedToDo)
})