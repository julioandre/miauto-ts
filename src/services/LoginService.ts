import http from '../http-common'
import ILogin from '../types/Login';

const login = (data:  ILogin)=>{
    return http.post<ILogin>("/api/login",data)
    .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });;
}
const LoginService={
    login,
}
export default LoginService