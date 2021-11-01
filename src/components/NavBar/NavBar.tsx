import { AppBar, Button, IconButton, Toolbar, useMediaQuery ,useTheme} from '@mui/material';

import React from 'react';
import logo from '../../assets/logo.png';
import { useStyles } from './NavBar.styles';
import DrawerComponent from '../Drawer/Drawer';
import { Box } from '@mui/system';



const NavBar:React.FC=()=>{
    // const [auth,setAuth] = React.useState(false)
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    //     setAuth(event.target.checked)
    // }
    const classes  = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Box sx = {{ flexGrow:1 }}>
       <AppBar position ="static">
           <Toolbar>
           
           {isMobile?(<DrawerComponent/>):(
            <>
            <Box  sx={{ flexGrow:1 }}> 
            <IconButton size="large" edge="start">
                <img src={logo} alt="Miauto" className={classes.img}/>   
           </IconButton>
           </Box>
         
           <Button href="/mainpage" color="inherit">Home</Button>
        
           <Button href="/garages" color="inherit" >Garage</Button>
          
           <Button  href="/register" color="inherit" >Register</Button>
         
           
           <Button color="inherit" >Contact</Button>
          
             
             
             
              
             {/* <IconButton size="large" edge="start" sx={{ ml:15 }}>
                  <AccountCircle fontSize='large'/>
                  <Typography variant="h6">Sign In</Typography>
             </IconButton> */}
             
             </>
           )}
          
           </Toolbar>
       </AppBar>
    </Box>
    )
}
export default NavBar;