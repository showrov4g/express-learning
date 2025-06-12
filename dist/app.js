"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_route_1 = require("./app/todos/todos.route");
const app = (0, express_1.default)();
const port = 3000;
// ------------
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/", todos_route_1.todoRouter);
app.use('/users', userRouter);
// -----------
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get('/', (req, res) => {
    console.log({ req, res });
    res.send('welcome to your todo app');
});
exports.default = app;
