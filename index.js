import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";


const app = express();
const PORT = 3000;
app.use(cookieParser());

// database connection 

// middlewares

//routes





// index route 
app.get('/', (req, res) => {
    res.cookie('name',"express-app",{maxAge:360000});
    res.send("hello express");
});

app.get('/fetch',(req,res)=>{
    console.log(req.cookies);
    res.send('api called');
})

app.get('/remove',(req,res)=>{
    res.clearCookie("name");
    res.send("Clear Cookies");
})


// ✅ catch all invalid routes (fixed)
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// server listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
