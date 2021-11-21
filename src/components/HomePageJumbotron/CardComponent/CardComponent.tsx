import { Alert,  Button, Card, CardActions, CardContent, CardHeader, CardMedia,  IconButton, Snackbar,  Typography } from '@mui/material';
import React, { useState } from 'react';
import store from '../../../assets/store.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';





type Props={
  handleClose1:any
}
  const CardComponent:React.FC<Props>=({ handleClose1 })=>{
    const [open, setOpen] = React.useState(false);
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const [expanded, setExpanded] = React.useState(false);
    const [postcode, setPostcode]= useState(' ');
    const [housenumber, setHouseNumber] = useState(' ');
    const [datevalue, setDateValue] = useState(' ');

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
   
    const handleFormSubmit = async (e: any) => {
        // this function will be triggered by the submit event
        e.preventDefault();
        if(postcode && housenumber && datevalue){
            setOpen(true)
        }
       
        }
      return(
          <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Booking Successful
            </Alert>
      </Snackbar>
    
    <Card sx={{ maxWidth: 345,m:3 ,backgroundColor:'white',borderRadius:'5px'}}>
    <CardHeader
      subheader="Quito,Ecuador"
      
    />
    <CardMedia
      component="img"
      height="194"
      image={store}
      alt="store"
    />
    <CardContent>
      <Typography variant="h5" color="text.secondary">
         Tito's Garage
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <form onSubmit={handleFormSubmit}>
            
            <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth onClick={handleClose1}>Send Repair Request</Button>   
      </form>
    </CardActions>
  
  </Card></>
      )
  }

  export default CardComponent;