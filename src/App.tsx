import React from "react";
import Homepage from './components/Homepage'
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette:{
    primary:{
      main:'#46d0d9'
    },
    background:{
      default:'#46d0d9'
    },
    secondary:{
      main:'#143656'
    },
  }
})
const App:React.FC=()=>{
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Homepage/>
    </ThemeProvider>
    
  )
}
 
export default App;