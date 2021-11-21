import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react'

import RegisterPageHeader from '../../components/RegisterPageHeader';
import RegisterPageForm from '../../components/RegisterPageForm';


const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
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
              <CssBaseline/>
               <RegisterPageHeader/>
               <RegisterPageForm/>
            </ThemeProvider>
        </>
    )
}
export default RegisterPage;