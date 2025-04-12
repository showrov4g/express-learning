import mongoose from "mongoose";

const persionSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,

});

export const Person = mongoose.model("Perosn", persionSchema);