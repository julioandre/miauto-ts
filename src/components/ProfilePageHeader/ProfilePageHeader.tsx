
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import profile from '../../assets/profile.jpeg'


const ProfilePageHeader:React.FC=()=>{
    return(
        <>
        <Grid container sx={{ marginLeft:"20%", marginTop:"15%" }}>
            <Typography variant="h5">Eddie Bremmer</Typography>
            <Avatar alt="Eddie Bremmer" src={profile} sx={{marginLeft:'8%'}}/>
        </Grid></>
    )
}
export default ProfilePageHeader;