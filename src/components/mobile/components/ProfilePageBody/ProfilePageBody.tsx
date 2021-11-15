import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './ProfilePageBody.styles';
import { arrayIndexingWithLength } from '../../../../utils/arrayIndexingWithLength';
import Carousel from 'react-material-ui-carousel'
import store from '../../../../assets/store.jpeg'
import ProfilePageForm from './ProfilePageForm';


const ProfilePageBody:React.FC=()=>{
    const classes = useStyles()
    return(
        <>
        <Paper>
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