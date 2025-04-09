import express from "express";


const app = express();

const PORT = 3000;


// define a simple route 

app.get('/',(req, res)=>{
    res.send("hello ghosh")
})
// second  route
app.get('/about',(req, res)=>{
    res.send("this is about api routes")
})
// third rouutes 
app.get('/contact',(req, res)=>{
    res.send("this is contact api routes")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})