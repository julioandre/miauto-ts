import http from "../http-common";
import ICars from "../types/Cars";

const addCar=(data:ICars,your_token)=>{
    return http.post<ICars>("/api/client/cars",data,{headers:{'Authorization': `Bearer ${your_token}`,
    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}});
}
const getCars = (your_token)=>{
    return http.get<Array<ICars>>("/api/client/cars",{headers:{'Authorization': `Bearer ${your_token}`,
    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}});
}
const CarServices={
    addCar,getCars
}
export default CarServices