import axios from "axios";
import ICreateAccountData from '../types/CreateAccount'
import http from "../http-common";

const API_URL="https://mi-auto-db-jbp5o.ondigitalocean.app/"

const createAccount = (data:  ICreateAccountData)=>{
    return http.post<ICreateAccountData>("/api/client/register",data);
}
const CreateAccountService={
    createAccount,
}
export default CreateAccountService