
import {  createTheme, CssBaseline,  ThemeProvider } from '@mui/material';
// import React, { useState } from 'react';


import Headers from '../../components/Headers';
import MainPageBody from '../../components/MainPageBody';


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
const MainPage:React.FC=()=>{
  const text ="Looking for a Garage?"
 
  // const [values,handleValues] = useState(initialValues)
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
           <Headers searchtext={text}/>
           <MainPageBody/>
          
        </ThemeProvider>
       
        </>
    )
}
export default MainPage;