import { Box, createTheme, CssBaseline, Grid,  Paper,  ThemeProvider, Typography } from '@mui/material';
// import React, { useState } from 'react';
import NavBar from '../NavBar';
import { useStyles } from './MainPage.styles';
import Jumbotron from '../Jumbotron';
import logo from '../../assets/logo.png';
import MainPageHeader from '../mobile/components/MainPageHeader';

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'#46d0d9'
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
 
  // const [values,handleValues] = useState(initialValues)
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
           <MainPageHeader/>
          
        </ThemeProvider>
       
        </>
    )
}
export default MainPage;