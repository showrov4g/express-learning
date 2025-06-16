import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://learningexpress:Ba1ALs83Ccd0uWJK@cluster0.23lvn.mongodb.net/learningDb?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
