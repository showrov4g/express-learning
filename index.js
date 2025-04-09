import express from "express";
import router from "./route.js";


const app = express();

const PORT = 3000;


// index route 
app.get('/', (req, res) => {
    res.send("hello ghosh")
})

app.use('/user', router);


app.post("/users",express.json(), (req,res)=>{
    const {name, email} = req.body;
    res.json({
        message: `User ${name} and email ${email} created successfully`
    })
})

app.put("/users/:id", express.json(), (req,res)=>{
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
        message: `user ${userId} updated to ${name} and email ${email}`
    })
})










// ===============
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})