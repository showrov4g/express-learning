import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { Person } from "./models/persons.js";

const app = express();
const PORT = 3000;


await connectDB();


// middlewares

//routes

app.post("/person", express.json(), async(req, res) => {
 
    const { email, name, age } = req.body;
    const newPerson = new Person({
        name, age, email
    });
    await newPerson.save();
    res.send("person added");
})




// index route 
app.get('/', (req, res) => {

    res.send("hello express");
});





// ✅ catch all invalid routes (fixed)
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// server listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
