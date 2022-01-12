import http from '../http-common'
import ILogin from '../types/Login';

const login = (data:  ILogin)=>{
    return http.post<ILogin>("/api/login",data)
    
}
const LoginService={
    login,
}
export default LoginService