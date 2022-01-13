import {  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps,  MenuItem,  styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import car from '../../../assets/car.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SnackbarContainer, snackbarService } from "uno-material-ui";





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
    data:any
  }
  const CardComponent:React.FC<Props>=({data})=>{
    const onOpenSuccess = (text,texttype) => {
      snackbarService.showSnackbar(text,texttype);
    };
    const [open, setOpen] = React.useState(false);
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
     
    };
   
    
      return(
          <>
      
    <SnackbarContainer/>

    <Card sx={{ maxWidth: 345,marginBottom:3 ,backgroundColor:'white',borderRadius:'5px',marginLeft:3}}>

    <CardHeader
      subheader={data.make+" "+ data.model}
      
    />
    <CardMedia
      component="img"
      height="194"
      image={car}
      alt="car"
    />
    <CardContent>
      <Typography variant="h5" color="text.secondary">
         Car Number:{data.plate}
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
      <Typography variant="subtitle2"  color="text.secondary" >
        Color: {data.color}
      </Typography>
      <Typography variant="subtitle2"  color="text.secondary" >
        Engine: {data.engine}
      </Typography>
      <Typography variant="subtitle2"  color="text.secondary" >
        Fuel: {data.fuel}
      </Typography>
      <Typography variant="subtitle2"  color="text.secondary" >
        Type: {data.type}
      </Typography>
            
      </CardContent>
    </Collapse>
  </Card></>
      )
  }

  export default CardComponent;