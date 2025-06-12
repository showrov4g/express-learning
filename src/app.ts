import  express, { Application, Request, Response }  from "express"
import fs from "fs";
import path from "path";
const app: Application = express()
const port = 3000
// ------------
app.use(express.json())

const todoRouter = express.Router();
const userRouter = express.Router();


app.use("/", todoRouter);
app.use('/users', userRouter);


// -----------
const filePath = path.join(__dirname , "../db/todo.json")

app.get('/', (req: Request, res : Response) => {

  console.log({req, res})
  res.send('welcome to your todo app')
})
todoRouter.get('/todos', (req: Request, res : Response) => {
  console.log("From params", req.params)
    const data = fs.readFileSync(filePath, {encoding: "utf-8"});
    // console.log(data)

  res.json({
    message: "todo router",
    data
  });
})


// app.get('/todos', (req: Request, res : Response) => {
//   console.log("From params", req.params)
//     const data = fs.readFileSync(filePath, {encoding: "utf-8"});
//     // console.log(data)


//   res.json(data);
// })
app.post('/todos/create-todos', (req: Request, res : Response) => {
  const {body} = req.body;
  console.log(body);
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


export default app;