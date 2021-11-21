import React from 'react'

import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';




import Headers from '../../components/Headers';
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
  const text = " Looking for one of your cars?"
  
  
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>

           <Headers searchtext={text}/>
           <GaragesBody/>


            
        </ThemeProvider>
            
        </>
    )
}
export default GaragePage;