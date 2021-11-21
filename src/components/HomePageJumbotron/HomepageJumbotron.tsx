import { Alert, Box, Button,  Container,  createTheme, CssBaseline, Dialog, DialogActions, DialogTitle, Divider, FormControl, FormLabel, Grid, InputAdornment, Link, Paper, Snackbar, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react'
import {useStyles} from './HomePageJumbotron.styles';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NavBar from '../NavBar';
import CardComponent from './CardComponent';



const theme = createTheme({

    
    palette:{
        primary:{
          main:'#ffffff'
        },
        background:{
            paper:""
        },
        secondary:{
            main:'#143656'
        }
      },
  })

const HomePageJumbotron:React.FC=()=>{
  const [open3, setOpen3] = React.useState(false);
    const handleClose3 = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen3(false);
      };
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [status, setStatus] = useState(' ');
    const handleClose = () => {
      setOpen(false);
    };

    const getLocation = () => {
      handleClose();
      
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus('Located '+position.coords.latitude+ ' '+position.coords.longitude);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setOpen3(true);
          console.log(lat,lng)
        }, () => {
          setStatus('Unable to retrieve your location');
        });
      }
    }
    
  const handleClickOpen = () => {
    setOpen(true);
  };

 
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

    const classes = useStyles();
    const [location, setLocation]= useState(' ');
    const [number, setNumber] = useState(' ');
    const handleSubmit =(e) =>{
        e.preventDefault()
        handleClickOpen1()

        if (location && number){
            console.log(location,number)
            handleClickOpen1();
        }
    }
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Snackbar open={open3} autoHideDuration={6000} onClose={handleClose3} >
            <Alert onClose={handleClose3} severity="success" sx={{ width: '100%' , height:"45%"}}>
                {status}
            </Alert>
      </Snackbar>
            <Paper className={classes.container} >
            <NavBar/>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Container className={classes.div} sx={{ mx:0 }}> 
                    <Typography sx={{ my:0.2}}   variant='h4'>Car Repair & Servicing Made Easy</Typography>
                    <Typography sx={{ my:0.2 }}   variant='h5'>Unbeatable Prices, mechanics you can trust, 2 hour service at any location in Quito</Typography>
                    <Typography sx={{ my:0.2 }}   variant='h5'>10% off on first repair or service</Typography>
                    <Typography sx={{ my:0.2 }}   variant='h6'>Various Garages all over Ecuador</Typography>
                    </Container>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.paper} sx={{ mx:1 }} >
                        
                        
                        <FormControl className={classes.form} sx={{ mx:'auto'}}  >
                            <FormLabel><Typography color="secondary"  sx={{ m:2 }} align='center' variant="h5">FIND A GARAGE</Typography></FormLabel>
                            <TextField focused   color="secondary"  onChange={(e)=> setLocation(e.target.value)} InputProps={{ startAdornment:(<InputAdornment position="start" color="secondary" > <RoomIcon color="secondary"  /></InputAdornment> ) }} sx={{ m:1,borderColor:"secondary" }} label="Location/Postcode"  className={classes.boxelements} required/>
                            <TextField focused color="secondary"  onChange={(e)=> setNumber(e.target.value)} InputProps={{startAdornment:(<InputAdornment position="start" color="secondary" > <LocalPhoneIcon color="secondary" /></InputAdornment> ) }} sx={{ m:1,borderColor:"secondary"}} label="Your Phone Number"  className={classes.boxelements} required/>
                            <Link sx={{ m:1 }} href="#" underline="always" onClick={handleClickOpen}>
                                {'I do not know where I am'}
                            </Link>
                            <Dialog
                            PaperProps={{
                                style: {
                                  backgroundColor: "white",
                                  boxShadow: "none"
                                },
                              }}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                
                            >
                                <DialogTitle id="alert-dialog-title">
                                {"Use Google's location service to get location?"}
                                </DialogTitle>
                            <DialogActions>
                            <Button color="secondary" onClick={handleClose}>Disagree</Button>
                            <Button color="secondary" onClick={getLocation} autoFocus>
                                Agree
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            PaperProps={{
                                style: {
                                  backgroundColor: "white",
                                  boxShadow: "none"
                                },
                              }}
                                open={open1}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                
                            >
                            <DialogActions>
                            <Button color="warning" variant="outlined" onClick={handleClose1}>Close</Button>
                            </DialogActions>
                              <CardComponent handleClose1={handleClose1}/>
                        </Dialog>
                            <Button sx={{ m:1 }} className={classes.boxelements} onSubmit={handleSubmit}
                             variant="contained" color="secondary" onClick={handleClickOpen1}>SEARCH </Button>
                           
                            <Typography color="secondary"  sx={{ m:1 }} align='center' variant="h5">NOT SURE WHATS WRONG?
                            </Typography>
                            <Typography color="secondary"  className={classes.boxelements} sx={{ m:0.5 }} align='center' 
                            variant="body1">Not a problem, our in-house mechanics team is here to assist.</Typography>
                            <Typography color="secondary"  className={classes.boxelements} sx={{ m:0.5 }} align='center' 
                            variant="body1">Fill in this form with your vehicle registration, postcode, and phone number along with a brief description of the problem and they can help you.</Typography>
                            <Button sx={{ m:2 }} className={classes.boxelements} variant="contained" color="secondary">TECHNICAL ASSISTANCE FORM</Button>
                        </FormControl>
                        
                        </Box>
                </Grid>
            </Grid>
        </Paper>
        </ThemeProvider>
        
        
    )

}
export default HomePageJumbotron;