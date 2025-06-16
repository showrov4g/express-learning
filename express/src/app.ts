import  express, { Application, Request, Response }  from "express"
import fs from "fs";
import path from "path";
import { todoRouter } from "./app/todos/todos.route";
const app: Application = express()
const port = 3000
// ------------
app.use(express.json())

const userRouter = express.Router();


app.use("/", todoRouter);
app.use('/users', userRouter);


// -----------
const filePath = path.join(__dirname , "../db/todo.json")

app.get('/', (req: Request, res : Response) => {

  console.log({req, res})
  res.send('welcome to your todo app')
})








export default app;