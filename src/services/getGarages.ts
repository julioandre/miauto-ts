import http from "../http-common";
import IGarage from "../types/Garages";

const getAllGarages=(your_token)=>{
    return http.get<Array<IGarage>>("/api/garages",{headers:{'Authorization':   `Bearer ${your_token}`,
    'Content-Type': 'application/json'}})
}
const getGarageAddress=(your_token,address)=>{
    return http.get<Array<IGarage>>(`/api/garages/address/${address}`,{headers:{'Authorization':   `Bearer ${your_token}`,
    'Content-Type': 'application/json'}})
}
const getGarageName=(your_token,name)=>{
    return http.get<Array<IGarage>>(`/api/garages/${name}`,{headers:{'Authorization':   `Bearer ${your_token}`,
    'Content-Type': 'application/json'}})
}
const getGarages={
    getAllGarages,getGarageAddress,getGarageName
}
export default getGarages