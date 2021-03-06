import { IconButton } from '@material-ui/core';
import { Container, createTheme, Paper, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import logo from '../../assets/logo.png'
import { useStyles } from './RegisterPageHeader.styles';

const theme = createTheme({
    typography:{
        allVariants:{
          color:'white'
        },
    },
    palette:{
      primary:{
        main:'#ffffff'
      },
      background:{
        default:'#46d0d9',
        paper:'#46d0d9',
      },
      secondary:{
        main:'#143656'
      },
    },
  
  })

const RegisterPageHeader:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
        <ThemeProvider theme={theme}>
            <Paper>
            <Container sx={{display:"flex" ,alignItems:"center", justifyContent:'center',paddingY:3}}>
              <IconButton href="/">
                <img src={logo} alt="Miauto" className={classes.img} /> 
                </IconButton>
            </Container>
            <Typography my="1%" variant="h4" align="center"> Welcome</Typography>
            <Typography  paddingBottom="2%" variant="subtitle1" align="center" color="gray"> Signup to enjoy MiAuto</Typography>
            </Paper>
        </ThemeProvider>
        
        </>
    )
}
export default RegisterPageHeader