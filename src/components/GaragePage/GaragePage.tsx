import React from 'react'
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'white'
      },
      secondary:{
        main:'#143656'
      },
    }
  })

const GaragePage:React.FC=()=>{
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            <SearchBar/>
            
        </ThemeProvider>
            
        </>
    )
}
export default GaragePage;