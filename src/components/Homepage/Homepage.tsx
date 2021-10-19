import React from "react";
import { useStyles } from "./Homepage.styles";
import {Typography, Button,Grid} from "@mui/material";
import logo from '../../assets/logo.png';
import { Circle } from "react-konva";
import NavBar from '../NavBar';

const Homepage:React.FC=()=>{
    const classes = useStyles();
    return(
        <>
        <NavBar/>
        <div className={classes.jumbotron}>
            <Grid container spacing={12}>
                <Grid item sm = {12}lg={6}>
                    <Typography variant='h1'>MiAuto</Typography>
                    <p> Book appointments for car maintenance. Buy car parts and have your car fixed</p>
                    <Button variant="contained" color="secondary">Start</Button>
                </Grid>
                <Grid item lg={6}>
                    <img src={logo} alt="Miauto" className={classes.img}/>
                    <Circle x={200} y={100} radius={50} fill="green" />
                </Grid>
            </Grid>
           
        </div>
        </>
        
    )
}
export default Homepage;