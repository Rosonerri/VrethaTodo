import axios from "axios"

const URL: string = "http://localhost:2233/api/v3";


export const viewProjects = async (userId: any) =>{
    try {
        return await axios.get(`${URL}/view-user-project/${userId}`).then((res: any) =>{
            return res.data
        });
    } catch (error) {
        return error;
    }
};
export const createProject = async (data: any, userId: any)=>{
    try {
        return await axios.post(`${URL}/create-project/${userId}`, data).then((res: any) =>{
            return res.data
        });
    } catch (error) {
        return error;
    };
}