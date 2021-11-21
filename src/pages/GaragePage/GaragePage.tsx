import React from 'react'

import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';




import GaragesHeader from '../../components/GaragesHeader';
import GaragesBody from '../../components/GaragesBody';

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