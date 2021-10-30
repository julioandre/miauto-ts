import React from "react";
import { useStyles } from "./Homepage.styles";
import {Typography, Button,Grid, createTheme, ThemeProvider, CssBaseline, Link} from "@mui/material";
import logo from '../../assets/logo.png';
import { Circle } from "react-konva";

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'#46d0d9'
      },
      secondary:{
        main:'#143656'
      },
    }
  })

const Homepage:React.FC=()=>{
    const classes = useStyles();
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className={classes.jumbotron}>
            <Grid container spacing={12}>
                <Grid item sm = {12}lg={6}>
                    <Typography variant='h1'>MiAuto</Typography>
                    <p> Book appointments for car maintenance. Buy car parts and have your car fixed</p>
                    <Link href='/login'>
                        <Button variant="contained" color="secondary">Start</Button>
                    </Link>
                </Grid>
                <Grid item lg={6}>
                    <img src={logo} alt="Miauto" className={classes.img}/>
                    <Circle x={200} y={100} radius={50} fill="green" />
                </Grid>
            </Grid>
           
        </div>
        </ThemeProvider>

        </>
        
    )
}
export default Homepage;