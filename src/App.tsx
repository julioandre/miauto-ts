import React from "react";
import Homepage from './components/Homepage'
import LoginPage from "./components/MainPage";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';


const App:React.FC=()=>{
  return(
    <>
      
        <Router>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/login" component={LoginPage}/>
        </Router>
    
    </>
   
  )
}
 
export default App;