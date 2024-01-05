import axios from "axios"

const URL: string = "http://localhost:2233/api/v3";

export const createTask = async (projectId: any, data: any) =>{
    try{
        return await axios.post(`${URL}/create-task/${projectId}`, data).then((res: any) =>{
            return res.data
        })
    }catch(error){
        return error;
    }
}