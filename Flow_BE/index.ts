console.clear()
import express, { Application } from "express"
import cors from "cors"
import { dbConfig } from "./Utils/dbConfig";
import {mainApp} from "./mainApp"

const app:Application = express();
const Port: number = 2233;

app.use(express.json());
app.use(cors());

mainApp(app)


const server = app.listen(Port, ()=>{
    dbConfig()
});

process.on("uncaughtException", (error: Error) =>{
    console.log("Error: ", error);

    process.exit(1)
})

process.on("unhandledRejection", (reason: any) =>{
    console.log("Error: ", reason)

    server.close(()=>{
        process.exit(1);
    });
});
