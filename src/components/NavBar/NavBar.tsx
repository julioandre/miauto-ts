import { AppBar, IconButton, Toolbar, Typography, useMediaQuery ,useTheme} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../assets/logo.png';
import { useStyles } from './NavBar.styles';
import {AccountCircle} from '@mui/icons-material';
import DrawerComponent from '../Drawer/Drawer';



const NavBar:React.FC=()=>{
    const [auth,setAuth] = React.useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setAuth(event.target.checked)
    }
    const classes  = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return(
       <AppBar position ="static">
           <Toolbar>
           <IconButton size="large" edge="start" sx={{ mr:3 }}>
                <img src={logo} alt="Miauto" className={classes.img}/>   
           </IconButton>
           {isMobile?(<DrawerComponent/>):(
            <>
             <Typography className={classes.centre_content} variant='h6' sx={{ mr:4  }}>Home</Typography>
             <Typography  variant='h6' sx={{ mr:4}}>Garage</Typography>
             <Typography  variant='h6' sx={{ mr:4}}>Register</Typography>
             <Typography variant='h6' sx={{ mr:4 }}>Contact</Typography>
             {/* <IconButton size="large" edge="start" sx={{ ml:15 }}>
                  <AccountCircle fontSize='large'/>
                  <Typography variant="h6">Sign In</Typography>
             </IconButton> */}
             </>
           )}
          
           </Toolbar>
       </AppBar>
    )
}
export default NavBar;