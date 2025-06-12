"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// ------------
app.use(express_1.default.json());
const todoRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
app.use("/", todoRouter);
app.use('/users', userRouter);
// -----------
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get('/', (req, res) => {
    console.log({ req, res });
    res.send('welcome to your todo app');
});
todoRouter.get('/todos', (req, res) => {
    console.log("From params", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data)
    res.json({
        message: "todo router",
        data
    });
});
// app.get('/todos', (req: Request, res : Response) => {
//   console.log("From params", req.params)
//     const data = fs.readFileSync(filePath, {encoding: "utf-8"});
//     // console.log(data)
//   res.json(data);
// })
app.post('/todos/create-todos', (req, res) => {
    const { body } = req.body;
    console.log(body);
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
