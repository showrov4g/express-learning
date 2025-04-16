import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    useOrder:{type : Object, default:{test: "test value"}}
},{timestamps: true, minimize: false});

// Make sure index is created
personSchema.index({ email: 1 }, { unique: true });

export const Person = mongoose.model("Person", personSchema);
