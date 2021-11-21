import { Alert,  Button, Card, CardActions, CardContent, CardHeader, CardMedia,  IconButton, Snackbar,  Typography } from '@mui/material';
import React, { useState } from 'react';
import store from '../../../assets/store.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';





type Props={
  handleClose1:any
  handlSnackBar:any
}
  const CardComponent:React.FC<Props>=({ handleClose1,handlSnackBar })=>{
    const [open, setOpen] = React.useState(false);
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const [expanded, setExpanded] = React.useState(false);
    const [postcode, setPostcode]= useState(' ');
    const [housenumber, setHouseNumber] = useState(' ');
    const [datevalue, setDateValue] = useState(' ');

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
   
    const handleFormSubmit =  () => {
        // this function will be triggered by the submit event
        handleClose1()
        handlSnackBar(false)
        
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
      <form >
            
            <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth onClick={handleFormSubmit} >Send Repair Request</Button>   
      </form>
    </CardActions>
  
  </Card></>
      )
  }

  export default CardComponent;