import React from "react";
import Homepage from './pages/Homepage'
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router,Route } from 'react-router-dom';
import GaragePage from "./pages/GaragePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


const App:React.FC=()=>{
  return(
    <>
      
        <Router>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/mainpage" component={MainPage}/>
            <Route exact path="/garages" component={GaragePage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/profile" component={ProfilePage}/>
        </Router>
    
    </>
   
  )
}
 
export default App;