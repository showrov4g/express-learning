"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
// schema 
const noteSchema = new mongoose_1.Schema({
    title: String,
    content: String
});
const Note = (0, mongoose_1.model)("Note", noteSchema);
app.post;
app.get('/', (req, res) => {
    res.send("Welcome to my Note app");
});
exports.default = app;
