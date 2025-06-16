import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "./config/mongodb";


let server;
const port = 5000;

// database connect 


const bootstrap = async () => {
    server = app.listen(port, async () => {
        await client.connect();
        const db = await client.db("learningDb");
    
        console.log("connect to the mongodb")
        console.log(`app is running on port ${port}`)
    })
}

bootstrap()