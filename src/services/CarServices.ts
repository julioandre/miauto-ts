import http from "../http-common";
import ICars from "../types/Cars";

const addCar=(data:ICars,your_token)=>{
    return http.post<ICars>("/api/cars/",data,{headers:{'Authorization': `Bearer ${your_token}`,
    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}});
}
const CarServices={
    addCar,
}
export default CarServices