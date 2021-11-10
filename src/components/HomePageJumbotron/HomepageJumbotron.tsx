import { Box, Button,  Container,  createTheme, CssBaseline, Divider, FormControl, FormLabel, Grid, InputAdornment, Link, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react'
import {useStyles} from './HomePageJumbotron.styles';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NavBar from '../NavBar';

const theme = createTheme({
    typography:{
      allVariants:{
        color:'white'
      }
    },
    palette:{
        primary:{
          main:'#ffffff'
        },
      },
  })

const HomePageJumbotron:React.FC=()=>{
    const classes = useStyles();
    const [location, setLocation]= useState(' ');
    const [number, setNumber] = useState(' ');
    const handleSubmit =(e) =>{
        e.preventDefault()

        if (location && number){
            console.log(location,number)
        }
    }
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Paper className={classes.container}>
            <NavBar/>
            <Grid container>
                <Grid xs={12} md={6}>
                    <Container className={classes.div} sx={{ mx:2 }}> 
                    <Typography sx={{ my:0.2}} align='center' variant='h4'>Car Repair & Servicing Made Easy</Typography>
                    <Typography sx={{ my:0.2 }} align='center' variant='h5'>Unbeatable Prices, mechanics you can trust, 2 hour service at any location in Quito</Typography>
                    <Typography sx={{ my:0.2 }} align='center' variant='h5'>10% off on first repair or service</Typography>
                    <Typography sx={{ my:0.2 }} align='center' variant='h6'>Various Garages all over Ecuador</Typography>
                    </Container>

                </Grid>
                <Grid xs={12} md={6}>
                    <Box className={classes.paper} sx={{ mx:2 }} >
                        
                        
                        <FormControl className={classes.form} sx={{ mx:'auto' }}  >
                            <FormLabel><Typography sx={{ m:2 }} align='center' variant="h5">FIND A GARAGE</Typography></FormLabel>
                            <TextField  color="primary" onChange={(e)=> setLocation(e.target.value)} InputProps={{ startAdornment:(<InputAdornment position="start"> <RoomIcon color="primary"/></InputAdornment> ) }} sx={{ m:1 }} label="Location/Postcode" variant="filled"  className={classes.boxelements} required/>
                            <TextField color="primary" onChange={(e)=> setNumber(e.target.value)} InputProps={{startAdornment:(<InputAdornment position="start"> <LocalPhoneIcon color="primary"/></InputAdornment> ) }} sx={{ m:1 }} label="Your Phone Number" variant="filled" className={classes.boxelements} required/>
                            <Link sx={{ m:1 }} href="#" underline="always">
                                {'I do not know where I am'}
                            </Link>
                            <Button sx={{ m:1 }} className={classes.boxelements} onSubmit={handleSubmit}
                             variant="contained" color="success">SEARCH</Button>
                            <Divider variant='middle' sx={{ width:'90%' }} />
                            <Typography sx={{ m:1 }} align='center' variant="h5">NOT SURE WHATS WRONG?
                            </Typography>
                            <Typography className={classes.boxelements} sx={{ m:0.5 }} align='center' 
                            variant="body1">Not a problem, our in-house mechanics team is here to assist.</Typography>
                            <Typography className={classes.boxelements} sx={{ m:0.5 }} align='center' 
                            variant="body1">Fill in this form with your vehicle registration, postcode, and phone number along with a brief description of the problem and they can help you.</Typography>
                            <Button sx={{ m:2 }} className={classes.boxelements} variant="contained" color="success">TECHNICAL ASSISTANCE FORM</Button>
                        </FormControl>
                        
                        </Box>
                </Grid>
            </Grid>
        </Paper>
        </ThemeProvider>
        
        
    )

}
export default HomePageJumbotron;