const express = require("express");


const app = express();

const PORT = 3000;


// define a simple route 

app.get('/',(req, res)=>{
    res.send("hello ghosh")
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})