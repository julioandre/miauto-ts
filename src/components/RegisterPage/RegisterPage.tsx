import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import NavBar from '../NavBar';


const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'#46d0d9',
        paper:'#dfe8e1'
      },
      secondary:{
        main:'#143656'
      },
    }
  })

const RegisterPage:React.FC=()=>{
    return(
        <>
            <ThemeProvider theme={theme}>
                <NavBar/>
            </ThemeProvider>
        </>
    )
}
export default RegisterPage;