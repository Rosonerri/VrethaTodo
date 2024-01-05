import { connect } from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017/authoTaskDB";
export const dbConfig = () =>{
    try {
        connect(URL).then(() =>{
            console.log("Server Running....🚀🚀🚀");
        });
    } catch (error) {
        console.log(error);
    }
};
