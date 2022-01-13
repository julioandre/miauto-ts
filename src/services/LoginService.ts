import http from '../http-common'
import ILogin from '../types/Login';
import IClient from '../types/Clients';

const login = (data:  ILogin)=>{
    return http.post<ILogin>("/api/login",data)
    
}
const getUser = (your_token)=>{
    return http.get<IClient>("/api/user",{headers:{'Authorization':   `Bearer ${your_token}`,
    'Content-Type': 'application/json'}})
}
const LoginService={
    login,getUser
}
export default LoginService