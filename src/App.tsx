import React from "react";
import Homepage from './components/Homepage'
import LoginPage from "./components/MainPage";
import {BrowserRouter as Router,Route } from 'react-router-dom';
import GaragePage from "./components/GaragePage";


const App:React.FC=()=>{
  return(
    <>
      
        <Router>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/garages" component={GaragePage}/>
        </Router>
    
    </>
   
  )
}
 
export default App;