import React from "react";
import Homepage from './components/Homepage'
import MainPage from "./components/MainPage";
import {BrowserRouter as Router,Route } from 'react-router-dom';
import GaragePage from "./components/GaragePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";


const App:React.FC=()=>{
  return(
    <>
      
        <Router>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/mainpage" component={MainPage}/>
            <Route exact path="/garages" component={GaragePage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/login" component={LoginPage}/>
        </Router>
    
    </>
   
  )
}
 
export default App;