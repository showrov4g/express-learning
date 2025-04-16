import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import session from "express-session";



const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(session({
    secret:"sample-secret",
    resave: false,
    saveUninitialized: false,

}));

const user = [];

// database connection 

// middlewares

//routes





// index route 
app.get('/', (req, res) => {
    res.cookie('name',"express-app",{maxAge:360000});
    res.send("hello express");
});

app.post("/regester",async(req,res)=>{

})



// ✅ catch all invalid routes (fixed)
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// server listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
