import http from '../http-common'
import ICreateAccountData from '../types/CreateAccount'

const createAccount = (data:  ICreateAccountData)=>{
    return http.post<ICreateAccountData>("/api/client/register",data);
}
const CreateAccountService={
    createAccount,
}
export default CreateAccountService