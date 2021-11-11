import React from 'react'
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import { CssBaseline, ThemeProvider, createTheme, Grid} from '@mui/material';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import Cards from '../Cards';
import { useStyles } from '../GaragePage/GaragePage.styles';
import GaragesHeader from '../mobile/components/GaragesHeader';
import GaragesBody from '../mobile/components/GaragesBody';

const theme = createTheme({
  palette:{
    primary:{
      main:'#46d0d9'
    },
    background:{
      default:'white',
      paper:'#D3DBE2',
    },
    secondary:{
      main:'#143656'
    },
  }
  })

const GaragePage:React.FC=()=>{
  const classes = useStyles();
  
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
           <GaragesHeader/>
           <GaragesBody/>
            
            
        </ThemeProvider>
            
        </>
    )
}
export default GaragePage;