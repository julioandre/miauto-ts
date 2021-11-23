import {  Box, Card, CardActionArea,  CardContent, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './ProfilePageBody.styles';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength'; 
import Carousel from 'react-material-ui-carousel'
import store from '../../assets/store.jpeg'
import ProfilePageForm from './ProfilePageForm';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppNavBar from '../AppNavBar';

const ProfilePageBody:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
        <Paper>
       
            <Typography variant="h5" marginTop="10%" marginLeft="5%"> Upcoming Appointments</Typography>
        <Carousel className={classes.container} >
                
                {arrayIndexingWithLength(4).map((v)=>
                     <Card sx={{ maxWidth:345, marginLeft:"4%",marginTop:"2%"}}>
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         height="140"
                         image={store}
                         alt="store"
                       />
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                            Titos Garage
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                          
                         </Typography>
                       </CardContent>
                     </CardActionArea>
                   </Card>
                )}
                
            </Carousel>
        <ProfilePageForm/>
        <AppNavBar/>
        
        </Paper>
        
       
       
        </>
    )
}
export default ProfilePageBody;