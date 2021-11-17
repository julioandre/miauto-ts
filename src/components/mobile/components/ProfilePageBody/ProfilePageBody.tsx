import {  Box, Card, CardActionArea,  CardContent, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './ProfilePageBody.styles';
import { arrayIndexingWithLength } from '../../../../utils/arrayIndexingWithLength';
import Carousel from 'react-material-ui-carousel'
import store from '../../../../assets/store.jpeg'
import ProfilePageForm from './ProfilePageForm';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const ProfilePageBody:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
        <Paper>
        <Grid container height='100%' marginLeft="3%" marginTop="5%" paddingTop="3%">
                <Grid item xs={3}>
                    <Box className={classes.selectedbox}>
                        <IconButton href='/profile'>
                        <AppSettingsAltIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box  className={classes.box}>
                        <IconButton href='/mainpage'>
                        <HomeIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <IconButton href='/garages'>
                        <DirectionsCarIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <ShoppingBasketIcon fontSize="large"/>
                    </Box>
                </Grid>
                
            </Grid>
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
        </Paper>
       
       
        </>
    )
}
export default ProfilePageBody;