import { ThemeProvider, createTheme, CssBaseline, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import NavBar from '../NavBar';
import logo from '../../assets/logo.png';
import appstore from '../../assets/appstore.png';
import playstore from '../../assets/playstore.png';
import { useStyles } from './RegisterPage.styles';


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
                <NavBar/>
                <div className={classes.jumbotron}>
                  <Grid container spacing={12}>
                      <Grid item sm = {12}lg={6}>
                      <Typography variant='h1'>MiAuto</Typography>
                      <IconButton size="large" edge="start">
                          <img src={appstore} alt="Miauto" />   
                      </IconButton>
                      <IconButton size="large" edge="start">
                          <img src={playstore} alt="Miauto" />   
                      </IconButton>
                      </Grid>
                      <Grid item lg={6}>
                          <img src={logo} alt="Miauto" className={classes.img}/>
                      </Grid>
                  </Grid>
           
        </div>
            </ThemeProvider>
        </>
    )
}
export default RegisterPage;