import React from "react";
import Homepage from './pages/Homepage'
import {BrowserRouter as Router,Route } from 'react-router-dom';
import GaragePage from "./pages/GaragesPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";
import CarsPage from "./pages/CarsPage";

const App:React.FC=()=>{
  return(
    <>
      
        <Router>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/cars" component={CarsPage}/>
            <Route exact path="/garages" component={GaragePage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/store" component={StorePage}/>
        </Router>
    
    </>
   
  )
}
 
export default App;