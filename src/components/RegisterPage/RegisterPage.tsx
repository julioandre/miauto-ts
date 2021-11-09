import { ThemeProvider, createTheme, CssBaseline, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from './RegisterPage.styles';
import RegisterPageHeader from '../mobile/components/RegisterPageHeader';


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
  const classes = useStyles();
    return(
        <>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
               <RegisterPageHeader/>
            </ThemeProvider>
        </>
    )
}
export default RegisterPage;