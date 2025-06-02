import app from "./app";

let server;
const port = 5000;


const bootstrap = async () =>{
    server = app.listen(port, ()=>{
        console.log(`app is running on port ${port}`)
    })
}

bootstrap()