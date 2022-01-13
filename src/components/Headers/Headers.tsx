import { Avatar, Badge, Box, Container, createTheme, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem,  ThemeProvider, Typography } from '@mui/material';
import profile from '../../assets/profile.jpeg'
import React, { useEffect, useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStyles } from './Headers.styles'
import LoginService from '../../services/LoginService';


 const theme= createTheme({
    palette:{
        secondary:{
          main:'#143656'
        },
      },
 })
 type Props={
    searchtext:string
  }

const Headers:React.FC<Props>=({searchtext})=>{
    useEffect(()=>{
        getName()
    },[])
    const [name,setName] = useState()
  const getName=()=>{
    const userStr = localStorage.getItem("user");
    var userToken
    if (userStr) userToken= JSON.parse(userStr);
    LoginService.getUser(userToken).then((response:any)=>{
      console.log(response.data.id)
      setName(response.data.first_name);
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }
    const [location, setLocation] = React.useState('Quito');

    const handleChange = (event: SelectChangeEvent) => {
      setLocation(event.target.value);
    };
    const classes = useStyles()
    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>  
                    <Grid container direction="row" className={classes.container} >
                        <Avatar alt="Eddie Bremmer" src={profile} sx={{marginLeft:'5%'}}/>
                        <Box sx={{ width:"45%", marginLeft:"2%" }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            label="location"
                            onChange={handleChange}
                            sx={{ borderRadius:'5px'}}
                            startAdornment={
                                <InputAdornment position="start">
                                  <LocationOnIcon />
                                </InputAdornment>
                                }
                         
                            
                            >
                                <MenuItem value={"Loja"}>Loja</MenuItem>
                                <MenuItem value={"Cuenca"}>Cuenca</MenuItem>
                                <MenuItem value={"Quito"}>Quito</MenuItem>
                        </Select>
                        </FormControl>
                        </Box>
                        <IconButton sx={{marginLeft:'15%'}} aria-label="notifications" color="inherit">
                        <Badge badgeContent={4} color='secondary'> 
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    
                    
                    </Grid>
                <Container sx={{ marginLeft:'2%',marginTop:'5%' }}>
                <Typography variant="h5" color="gray">Welcome Back {name}</Typography>
                <Typography variant="h5" color="#143656">{searchtext}</Typography>
                </Container>
            </ThemeProvider>       
        </>
    )
}
export default Headers;