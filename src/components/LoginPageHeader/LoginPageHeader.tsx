import { IconButton } from '@material-ui/core';
import { Container, createTheme, Paper, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import logo from '../../assets/logo.png'
import { useStyles } from './LoginPage.styles'

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

const LoginPageHeader:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
         <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
            <Container sx={{display:"flex" ,alignItems:"center", justifyContent:'center',paddingY:3}}>
              <IconButton href="/">
                <img src={logo} alt="Miauto" className={classes.img}  /> </IconButton>
                
            </Container>
            <Container sx={{display:"flex" ,alignItems:"center", justifyContent:'center',paddingY:3}}>
                <Typography variant="h4" color="#143656">Find</Typography><Typography variant="h4" color="white">Garage</Typography>
                
            </Container>
            <Typography my="1%" variant="h4" align="center"> Welcome</Typography>
            <Typography my="2%" paddingBottom="2%" variant="subtitle1" align="center" color="gray"> Login to enjoy MiAuto</Typography>
            </Paper>
        </ThemeProvider>
        </>
    )
}
export default LoginPageHeader;