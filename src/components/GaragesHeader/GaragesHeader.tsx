import { Avatar, Badge, Box, Container, createTheme, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem,  ThemeProvider, Typography } from '@mui/material';
import profile from '../../assets/profile.jpeg'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useStyles } from './GaragesHeader.styles'


 const theme= createTheme({
    palette:{
        secondary:{
          main:'#143656'
        },
      },
 })

const GaragesHeader:React.FC=()=>{
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
                    <IconButton aria-label="settings" color="inherit">
                       <SettingsIcon/>
                    </IconButton>
                    
                    </Grid>
                <Container sx={{ marginLeft:'2%',marginTop:'15%' }}>
                <Typography variant="h5" color="gray">Welcome Back Eddie</Typography>
                <Typography variant="h5" color="#143656">Looking for one of you cars?</Typography>
                </Container>
            </ThemeProvider>       
        </>
    )
}
export default GaragesHeader;