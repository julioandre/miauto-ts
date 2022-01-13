import { Badge,  Button, Card, CardActions, CardContent, CardMedia,   createTheme, CssBaseline,  IconButton, Paper, ThemeProvider, Typography } from "@mui/material";
import React, { FC, useState,useEffect } from "react";
import product from '../../assets/product.png'
import IAppointments from "../../types/Appointments";
import AppointmentService from "../../services/AppointmentService";
import AppNavBar from "../AppNavBar";
import LoginService from "../../services/LoginService";




interface IProps {};
const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',

        paper:'#D3DBE2'

      },
      secondary:{
        main:'#143656'
      },
    }
  })

const SearchPageBody:FC<IProps> = (props) => {
  useEffect(()=>{
    getAllAppointments()
},[])
const [data,setData] = useState<Array<IAppointments>>([])
// const [id,setID] = useState()
//   const getID=()=>{
//     const userStr = localStorage.getItem("user");
//     var userToken
//     if (userStr) userToken= JSON.parse(userStr);
//     LoginService.getUser(userToken).then((response:any)=>{
//       console.log(response.data.id)
//       setID(response.data.id);
//     })
//     .catch((e: Error) => {
//       console.log(e);
//     });
//   }
const getAllAppointments=()=>{
  const userStr = localStorage.getItem("user");
  var userToken
  if (userStr) userToken= JSON.parse(userStr);
  AppointmentService.getAppointments(userToken).then((response:any)=>{
    setData(response.data);
  })
  .catch((e: Error) => {
    console.log(e);
  });
}
    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{ height:"85vh" }}>
            <Paper sx={{ height:"110%"}}>

            <Typography variant="h4" sx={{ marginTop:3 }}>
              Upcoming Appointments
            </Typography>
              
            {data.map(item=>{
                return(
                <Card  sx={{ display:"flex",width:"70%",marginLeft:"2%",paddingBottom:"5%", backgroundColor:"white",my:4 }}>
                    <CardContent > 
                        <Typography sx={{paddingTop:"0px"}} variant="body1"> Date: {item.date}</Typography>
                        <Typography variant="subtitle1">Starting Time {item.startingTime}</Typography>
                        <Typography variant="subtitle1">Ending Time {item.endingTime}</Typography>
                        <Typography variant="subtitle1">{item.description}</Typography>
                    </CardContent>
                </Card>)
            })}
            <AppNavBar selected="appointment"/>
            </Paper>
            </div>
        </ThemeProvider>
        

        </>
    )
};

export default SearchPageBody;