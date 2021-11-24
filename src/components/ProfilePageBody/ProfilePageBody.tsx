import {   Card, CardActionArea,  CardContent, CardMedia,  Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './ProfilePageBody.styles';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength'; 
import Carousel from 'react-material-ui-carousel'
import store from '../../assets/store.jpeg'
import ProfilePageForm from './ProfilePageForm';


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
        <AppNavBar selected="profile"/>
        
        </Paper>
        
       
       
        </>
    )
}
export default ProfilePageBody;