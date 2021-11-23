import { Box, Container, createTheme, CssBaseline, Grid,  IconButton,  Paper } from '@mui/material';
import React from 'react'
import { useStyles } from './GaragesPageBody.styles';
import SearchBar from '../SearchBar';
import { ThemeProvider } from '@mui/private-theming';
import CardComponent from './CardComponent';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import AppNavBar from '../AppNavBar';


const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'#143656'
      },
      secondary:{
        main:'#143656'
      },
    }
  })

const GaragesPageBody:React.FC=()=>{
    const classes = useStyles();
    const searchtext = "Looking for a Garage"
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Paper sx={{  }}>
            
              <SearchBar searchtext={searchtext}/>
            
            {arrayIndexingWithLength(3).map((v)=>(
                     <CardComponent/>
                  ))}
        <Box sx={{ marginTop:"15%" }}>
        <AppNavBar/>
        </Box>
            
        </Paper>
        
        


        </ThemeProvider>
           
        </>
    )
}

export default GaragesPageBody;