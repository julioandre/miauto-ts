import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './Cards.styles';
import { AttachMoney } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import store from '../../assets/store.jpeg';



const Cards:React.FC=()=>{
    const classes = useStyles();
    return(
    <Card className={classes.root}>
      <CardMedia component="img" alt="store" image={store} className={classes.media}/>
      <CardContent>
      <CardActions>
          <div>
          <AttachMoney/>
          <Typography variant="h6">50</Typography></div>
          <div className={classes.spacing}>
            <Person/>
            <Typography variant="h6">Eduardo</Typography>
          </div>
      </CardActions>
      </CardContent>
    </Card>
    )
}
export default Cards;