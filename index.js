import express, { urlencoded } from "express";

const app = express();
const PORT = 3000;



// middlewares

//routes

app.post("/form", (req, res) => {

    console.log(req.body);
    console.log(req.file);


    res.send(`form data reviced`)
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
