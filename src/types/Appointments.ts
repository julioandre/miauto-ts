export default interface IAppointments{
    user_id:number,
    garage_id?:number,
    vin_number?:string,
    description:string,
    date:string,
    startingTime:string,
    endingTime:string,
    
}