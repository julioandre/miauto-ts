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
        
        <Paper sx={{ marginTop:10,height:"700px" }}>
       

        <ProfilePageForm/>
        <AppNavBar selected="profile"/>
        
        </Paper>
        
       
       
        </>
    )
}
export default ProfilePageBody;