import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import { useStyles } from './Jumbotron.styles';

const Jumbotron:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
        <Container maxWidth="lg" className={classes.jumbotronheight}> 
            <Typography color="secondary" variant="h2" align="center">MiAuto Web Platform</Typography>
            <Grid container className={classes.childGrid}> 
                <Grid item xs={12} md={4}>
                <img src={logo} alt="Miauto" className={classes.img}/>
                </Grid>
                <Grid item xs={12} md ={8}>
        
                <Typography color="secondary" variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, pariatur non ab vero laborum aut dicta qui voluptatibus? </Typography>
                </Grid>
            </Grid>

        </Container>
        </>
        
    )
}
export default Jumbotron;