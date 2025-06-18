import {Server} from "http"
import app from "./app";
import mongoose from "mongoose";


let server: Server;
const PORT = 5000;
async function main(){
    try {
         await mongoose.connect('mongodb+srv://learningexpress:Ba1ALs83Ccd0uWJK@cluster0.23lvn.mongodb.net/advance-to-do-app?retryWrites=true&w=majority&appName=Cluster0');
         console.log("Connected to mongodb with mongoose")
        server = app.listen(PORT,()=>{
            console.log(`app is running on port ${PORT}`)
        })


    } catch (error) {
        console.log(error);
    }
}

main();