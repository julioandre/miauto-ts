import {  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps,  MenuItem,  styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import car from '../../../assets/car.jpeg'
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
    const [disabled, setDisabled]= useState(true);
    const [housenumber, setHouseNumber] = useState(' ');
    const [datevalue, setDateValue] = useState(' ');

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleEdit=()=>{
      setDisabled(!disabled)
    }
   
    
      return(
          <>
      
    
    <Card sx={{ maxWidth: 345,marginBottom:3 ,backgroundColor:'white',borderRadius:'5px'}}>
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
      <TextField
          disabled={disabled}
          id="outlined-disabled"
          label="Car Number"
          defaultValue="MY6712"
          
          
        />
       
        <TextField
          disabled={disabled}
          id="outlined-disabled" 
          label="Mileage"
          defaultValue="6712"
          sx={{ my:2 }}
          
          
        ><MenuItem> KM </MenuItem> </TextField>
         <TextField
          disabled
          id="outlined-disabled"
          label="Last Visit"
          defaultValue="12/10/2021"
          
        />
        <Button sx={{my:2}} variant="contained" color="secondary" fullWidth onClick={handleEdit}>Edit Car Details</Button>
        <Button sx={{my:2}} variant="contained" color="secondary" fullWidth onClick={handleEdit}>Save</Button>
        

            
      </CardContent>
    </Collapse>
  </Card></>
      )
  }

  export default CardComponent;