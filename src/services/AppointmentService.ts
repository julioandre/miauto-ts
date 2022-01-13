import http from "../http-common";
import IAppointments from "../types/Appointments";

const getAppointments= (your_token)=>{
    return http.get<Array<IAppointments>>("/api/reservation",{headers:{'Authorization': `Bearer ${your_token}`,
    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}});
}
const makeAppointments= (data,your_token)=>{
    return http.post<Array<IAppointments>>("/api/reservation",data,{headers:{'Authorization': `Bearer ${your_token}`,
    'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}});
}

const AppointmentService={
    getAppointments,makeAppointments
}
export default AppointmentService