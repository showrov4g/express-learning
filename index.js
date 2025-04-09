import express from "express";


const app = express();

const PORT = 3000;


// index route 
app.get('/', (req, res) => {
    res.send("hello ghosh")
})


/








// ===============
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})