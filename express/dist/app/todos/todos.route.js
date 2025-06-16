"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res, next) => {
    console.log('this is custom middleware');
    res.json({
        message: "todo router",
    });
    next();
});
exports.todoRouter.post('/create-todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongodb_1.client.db("learningDb");
    const collection = yield db.collection("todo");
    const data = yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: "False"
    });
    // const cursor = collection.find({});
    // const todos  = await cursor.toArray();
    // res.send(todos)
    res.json(data);
}));
exports.todoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("learningDb");
    const collection = yield db.collection("todo");
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
}));
exports.todoRouter.delete("/todo-delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_1.client.db("learningDb");
    const collection = yield db.collection("todo");
    const data = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(data);
}));
// update data in the database
exports.todoRouter.put("/todo-update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    const db = yield mongodb_1.client.db("learningDb");
    const collection = yield db.collection("todo");
    const filter = { _id: new mongodb_2.ObjectId(id) };
    const updatedToDo = yield collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.json(updatedToDo);
}));
