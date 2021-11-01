import { Box, createTheme, CssBaseline, Grid,  Paper,  ThemeProvider, Typography } from '@mui/material';
// import React, { useState } from 'react';
import NavBar from '../NavBar';
import { useStyles } from './MainPage.styles';
import Jumbotron from '../Jumbotron';
import logo from '../../assets/logo.png';

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
  const classes = useStyles();

  // const [values,handleValues] = useState(initialValues)
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            <Jumbotron/>
           <Paper variant="outlined" sx={{ borderRadius:'15px 15px 0 0' }} square={false} elevation={6} className={classes.paper}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width:300,height:315 }} className={classes.box}>
                  <img src={logo} alt="Miauto" className={classes.img}/>
                  <Typography color="secondary" variant="h6">Lorem Ipsum Solo do</Typography>
                  <Typography color="secondary" variant="h6">Lorem Ipsum Solo do This is Mi Auto </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box sx={{ width:300,height:300 }} className={classes.box}>
                  <img src={logo} alt="Miauto" className={classes.img}/>
                  <Typography color="secondary" variant="h6">Lorem Ipsum Solo do</Typography>
                  <Typography color="secondary" variant="h6">Lorem Ipsum Solo do This is Mi Auto </Typography>
                </Box>
                </Grid>
              </Grid>
           </Paper>
          
        </ThemeProvider>
       
        </>
    )
}
export default MainPage;