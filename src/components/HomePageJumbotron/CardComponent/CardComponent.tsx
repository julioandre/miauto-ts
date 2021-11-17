import { Alert,  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Snackbar, styled,  Typography } from '@mui/material';
import React, { useState } from 'react';
import store from '../../../assets/store.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
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
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <form onSubmit={handleFormSubmit}>
            
            <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth onClick={handleClose1}>Send Repair Request</Button>   
      </form>
      </CardContent>
    </Collapse>
  </Card></>
      )
  }

  export default CardComponent;