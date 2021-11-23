
import {  createTheme, CssBaseline,  ThemeProvider } from '@mui/material';
// import React, { useState } from 'react';


import Headers from '../../components/Headers';
import GaragesPageBody from '../../components/GaragesPageBody';


const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'#D3DBE2',
      },
      secondary:{
        main:'#143656'
      },
    }
  })

// const initialValues={
//   username:"",
//   password:"",
// }
const GaragesPage:React.FC=()=>{
  const text ="Looking for a Garage?"
 
  // const [values,handleValues] = useState(initialValues)
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
           <Headers searchtext={text}/>
           <GaragesPageBody/>
          
        </ThemeProvider>
       
        </>
    )
}
export default GaragesPage;