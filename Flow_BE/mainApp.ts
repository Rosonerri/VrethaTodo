console.clear()
import { Application, Request, Response } from "express";
import project from "./Router/projectRouter";
import staff from "./Router/projectRouter";
import user from "./Router/projectRouter";
import task from "./Router/projectRouter";

export const mainApp = (app: Application) =>{
    try {
        app.use("/api/v3", project )
        app.use("/api/v3", staff )
        app.use("/api/v3", user )
        app.use("/api/v3", task )
        app.get("/", (req:Request, res:Response) =>{
            try {
                return res.status(200).json({
                    message: "Server Running Succesfully....."
                });
            } catch (error) {
                return res.status(404).json({
                    message: "Error"
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
};