import React from "react";
import { useStyles } from "./Homepage.styles";
import { Paper,Typography, Button,Grid} from "@mui/material";
import logo from '../../assets/logo.png';

const Homepage:React.FC=()=>{
    const classes = useStyles();
    return(
        <div className={classes.jumbotron}>
            <Grid container spacing={12}>
                <Grid item lg={6}>
                    <Typography variant='h1'>MiAuto</Typography>
                    <p> Book appointments for car maintenance. Buy car parts and have your car fixed</p>
                    <Button variant="contained" color="secondary">Start</Button>
                </Grid>
                <Grid item lg={6}>
                    <img src={logo} alt="Miauto" className={classes.img}/>
                </Grid>
            </Grid>
          
        </div>
    )
}
export default Homepage;