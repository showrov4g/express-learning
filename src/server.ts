import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";


let server;
const port = 5000;

// database connect 


const uri = "mongodb+srv://learningexpress:Ba1ALs83Ccd0uWJK@cluster0.23lvn.mongodb.net/learningDb?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});







const bootstrap = async () => {
    server = app.listen(port, async () => {
        await client.connect();
        const db = await client.db("learningDb");
    
        console.log("connect to the mongodb")
        console.log(`app is running on port ${port}`)
    })
}

bootstrap()