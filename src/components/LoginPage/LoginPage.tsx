import React from 'react'
import LoginPageHeader from '../mobile/components/LoginPageHeader'
import LoginPageForm from '../mobile/components/LoginPageForm'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/private-theming'

const theme = createTheme({
 
    palette:{
      primary:{
        main:'#ffffff'
      },
      secondary:{
        main:'#143656'
      },
    },
  
  })
const LoginPage:React.FC=()=>{
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <LoginPageHeader/>
            <LoginPageForm/>
        </ThemeProvider>
            
        </>
    )
}

export default LoginPage