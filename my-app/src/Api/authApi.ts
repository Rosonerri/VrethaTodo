import axios from "axios";

const URL: string = "http://localhost:2233/api/v3";

export const createAccount = async (data: any)=>{
    try {
        return await axios.post(`${URL}//create-user`, data).then((res: any) =>{
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};

export const createFreemoAccount = async (data: any) =>{
    try {
        return await axios.post(`${URL}/create-user-freemo`, data).then((res: any) =>{
            return res.data;
        })
    } catch (error) {
        console.log(error);
    }
}

export const createBromoAccount = async (data: any)=>{
try {
    return await axios.post(`${URL}/create-user-bromo`, data).then((res: any) =>{
        return res.data
    })
} catch (error) {
    console.log(error)
}
}

export const createPremoAccount = async (data: any)=>{
    try{
        return await axios.post(`${URL}/create-user-premo`, data).then((res:any) =>{
            return res.data
        })
    }catch(error){
        console.log(error)
    }
}

