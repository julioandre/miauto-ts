import React from 'react'

import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';




import Headers from '../../components/Headers';
import CarsPageBody from '../../components/CarsPageBody';

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

const CarsPage:React.FC=()=>{
  const text = " Looking for one of your cars?"
  
  
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>

           <Headers searchtext={text}/>
           <CarsPageBody/>


            
        </ThemeProvider>
            
        </>
    )
}
export default CarsPage;