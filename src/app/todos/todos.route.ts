import express, { Request, Response } from "express";
import fs from "fs"
import path from "path";

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


todoRouter.post('/create-todos', (req: Request, res : Response) => {
    
  const {body} = req.body;
  console.log(body);
  
  res.send('Hello World!')
})

