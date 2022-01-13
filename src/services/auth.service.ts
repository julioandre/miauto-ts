import axios from 'axios';

const API_URL = "https://mi-auto-db-jbp5o.ondigitalocean.app/"

export const register = (first_name:string,last_name:string,email:string,password:string,password_confirm:string,date_of_birth:number,address:string,number:string)=>{
    return axios.post(API_URL+"client/register",{
       first_name,
       last_name,
       email,
       password,
       password_confirm,
       date_of_birth,
       address,
       number
    })
    .then((response)=>{
        return response.data
    })
}