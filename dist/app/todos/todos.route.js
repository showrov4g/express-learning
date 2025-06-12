"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../db/todo.json");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res) => {
    console.log("From params", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data)
    res.json({
        message: "todo router",
        data
    });
});
exports.todoRouter.post('/create-todos', (req, res) => {
    const { body } = req.body;
    console.log(body);
    res.send('Hello World!');
});
