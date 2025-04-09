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

// making a dynamic routes 

app.get('/user/:username', (req,res)=>{
    const username = req.params.username;
    res.send(`Welcome mr: ${username}`)
})

// make daynamic serarch api 
app.get("/search" ,  (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`sercing for ${keyword}`)
})






// ===============
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})