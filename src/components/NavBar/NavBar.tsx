import { AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material';

import React from 'react';
import logo from '../../assets/logo.png';
import { useStyles } from './NavBar.styles';

import { Box } from '@mui/system';



const NavBar:React.FC=()=>{
    // const [auth,setAuth] = React.useState(false)
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    //     setAuth(event.target.checked)
    // }
    const classes  = useStyles();
    

    return(
        <Box sx = {{ flexGrow:1 }}>
       <AppBar position ="static" style={{ background: '#46d0d9', boxShadow: 'none' }}>
           <Toolbar>
           
           
            <>
            <Box  sx={{ flexGrow:1 }}> 
            <IconButton size="large" edge="start">
                <img src={logo} alt="Miauto" className={classes.img}/>   
           </IconButton>
           </Box>
         
        
           <Button href="/login" color="inherit" ><Typography>Sign In</Typography></Button>
          
           <Button  href="/register" color="inherit" ><Typography>Register</Typography></Button>
 
              
             {/* <IconButton size="large" edge="start" sx={{ ml:15 }}>
                  <AccountCircle fontSize='large'/>
                  <Typography variant="h6">Sign In</Typography>
             </IconButton> */}
             
             </>
           
          
           </Toolbar>
       </AppBar>
    </Box>
    )
}
export default NavBar;