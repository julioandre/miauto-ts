import { Alert,  Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Snackbar, Stack, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import store from '../../../assets/store.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SnackbarContainer, snackbarService } from "uno-material-ui";
import AppointmentService from '../../../services/AppointmentService';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
   
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
    const responses={
      message:" ",
      successful:false,
    }
    const [message, setMessage] = useState(responses);

    const [json, setJson] = useState<string>();
    const [startTime, setstartTime] = useState('')
    const [endTime, setendTime] = useState(' ')
    
    const makeApt=()=>{
      const userStr = localStorage.getItem("user");
      var userToken
      if (userStr) userToken= JSON.parse(userStr);
    
     }
    const [expanded, setExpanded] = React.useState(false);
    const [descrip, setDescription]= useState(' ');
    const [datevalue, setDateValue] = useState(' ');

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
   
    const handleFormSubmit = async (e: any) => {
        // this function will be triggered by the submit event
        e.preventDefault();
        const userStr = localStorage.getItem("user");
        var userToken
        if (userStr) userToken= JSON.parse(userStr);
        AppointmentService.makeAppointments(data={user_id:28,garage_id:1,vin_number:"56342",description:descrip,date:datevalue,startingTime:startTime,endingTime:endTime},userToken).then(response=>{
          onOpenSuccess("Appointment made","success")
          window.location.reload()
        },error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            onOpenSuccess("Car could not be added","error")
          setMessage({
            successful: false,
            message: resMessage
          });
        }
      ); 
        
        console.log(data)
        setJson(JSON.stringify(data));
        
       
        }
      return(
          <>
        
    <SnackbarContainer/>

    <Card sx={{ maxWidth: 345,marginBottom:3 ,backgroundColor:'white',borderRadius:'5px',marginLeft:3}}>
    <CardHeader
      subheader={data.address}
      
    />
    <CardMedia
      component="img"
      height="194"
      image={store}
      alt="store"
    />
    <CardContent>
      <Typography variant="h5" color="text.secondary">
         {data.name}
      </Typography>
      <Typography variant='subtitle2' color="text.secondary">
          Phone:{data.phone_number}
      </Typography>
      <Typography variant='subtitle2' color="text.secondary">
          Email:{data.email}
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
        <Button variant="outlined" color="secondary">Book Appointment</Button>
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <form onSubmit={handleFormSubmit}>
            
           <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      <TextField
                id="date"
                label="Select Date"
                type="date"
                onChange={(e)=> setDateValue(e.target.value)}
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
        <TextField
          type="time"
          defaultValue="08:00"
          value={startTime}
          label="Start Time"
          InputLabelProps={{
            shrink: true,
            }}
          onChange={(newValue) => {
            setstartTime(newValue.target.value);
            const newt =new Date(startTime).getHours()+1
            setendTime(newt.toString())
            
          }}
        />
         <TextField
          type="time"
          defaultValue="09:00"
          value={endTime}
          label="End Time"
          InputLabelProps={{
            shrink: true,
            }}
          onChange={(newValue) => {
            setendTime(newValue.target.value);
            
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          value={descrip}
          onChange={(newValue)=>{
            setDescription(newValue.target.value)
          }}
        />
      </Stack>
    </LocalizationProvider>
    
            
            <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth >Schedule Appointment</Button>   
      </form>
      </CardContent>
    </Collapse>
  </Card></>
      )
  }

  export default CardComponent;