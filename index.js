import express from "express";

const app = express();
const PORT = 3000;

// middlewares

app.get("/error",()=>{
   throw new Error("this is test error")
})








// index route 
app.get('/', (req, res) => {
    console.log("middle")
    res.send("hello ghosh");
});





// ✅ catch all invalid routes (fixed)
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// server listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
