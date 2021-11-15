import { Alert,  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Snackbar, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import car from '../../../../../assets/car.jpeg'
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

  const CardComponent:React.FC=()=>{
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
      
    
    <Card sx={{ maxWidth: 345,m:3 ,backgroundColor:'white',borderRadius:'5px'}}>
    <CardHeader
      subheader="Ford Mustang"
      
    />
    <CardMedia
      component="img"
      height="194"
      image={car}
      alt="car"
    />
    <CardContent>
      <Typography variant="h5" color="text.secondary">
         Car Number: MY6712
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
        <Typography variant="h6"> Car Number: MY6712</Typography>
        <Typography variant="h6"> Mileage: 124366KM</Typography>
        <Typography variant="h6"> Last Visit: 12/10/2021</Typography>
            
      </CardContent>
    </Collapse>
  </Card></>
      )
  }

  export default CardComponent;