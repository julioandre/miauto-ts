import React from "react";
import { useStyles } from "./Homepage.styles";
import {Typography, Button,Grid, createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import HomePageJumbotron from "../HomePageJumbotron";
import Banner from "../Banner";
import Footer from "../Footer";
import HomepageRegister from "../HomepageRegister/HomepageRegister";

const theme = createTheme({
    palette:{
      primary:{
        main:'#ffffff'
      },
      background:{
        default:'#46d0d9'
      },
      secondary:{
        main:'#143656'
      },
    },
  
  })

const Homepage:React.FC=()=>{
    const classes = useStyles();
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <HomePageJumbotron/>
        <Banner/>
        <HomepageRegister/> 
        <Footer/>
        {/* <div className={classes.jumbotron}>
            <Grid container spacing={12}>
                <Grid item sm = {12}lg={6}>
                    <Typography variant='h1'>MiAuto</Typography>
                    <p> Book appointments for car maintenance. Buy car parts and have your car fixed</p>
                    
                        <Button href="/mainpage"  variant="contained" color="secondary">Start</Button>
                    
                </Grid>
                <Grid item lg={6}>
                    <img src={logo} alt="Miauto" className={classes.img}/>
                    <Circle x={200} y={100} radius={50} fill="green" />
                </Grid>
            </Grid>
           
        </div> */}
        </ThemeProvider>

        </>
        
    )
}
export default Homepage;