import axios from 'axios';

const URL ="http://localhost:2000"

export const authenicateSignup = async (data) =>{
    try{
        return await axios.post(`${URL}/signup` ,data)
    }
    catch(error){
        console.log("Error while calling signup api",error)
    }
}

export const authenicateLogin = async (data) =>{
    try{
        return await axios.post(`${URL}/login` ,data)
    }
    catch(error){
        console.log("Error while calling login api",error)
        return error.response; 
    }
}


export const payUsingPaytm = async (data) =>{
    try{
        let response = await axios.post(`${URL}/payment`,data)
        return response.data;
    }catch(error){
        console.log('Error while calling payment api' , error)
    }
}