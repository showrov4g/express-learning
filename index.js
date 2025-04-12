import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static('public'))


// middlewares








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
