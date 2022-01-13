import { Button, Container, createTheme, CssBaseline, FormLabel, TextField, ThemeProvider } from '@mui/material';
import { SnackbarContainer, snackbarService } from "uno-material-ui";

import React, { useEffect, useState } from 'react';
import LoginService from '../../../services/LoginService';
import IClient from '../../../types/Clients';


const theme = createTheme({
 
    palette:{
      primary:{
        main:'#ffffff'
      },
      secondary:{
        main:'#143656'
      },
    },
  
  })
  const initialVals={
   
  }
  
const ProfilePageForm:React.FC=()=>{
    useEffect(()=>{
      getName()
  },[])
  const [name,setName] = useState()
  const [address,setAddress] = useState()
  const [email,setEmail] = useState()
  const [number,setNumber] = useState()
  const getName=()=>{
  const userStr = localStorage.getItem("user");
  var userToken
  if (userStr) userToken= JSON.parse(userStr);
  LoginService.getUser(userToken).then((response:any)=>{
    console.log(response.data.id)
    setName(response.data.first_name);
    setAddress(response.data.address)
    setEmail(response.data.email)
    setNumber(response.data.phone_number)
  })
  .catch((e: Error) => {
    console.log(e);
  });
  }
    
    const [errors, setErrors] = useState({} as any);
    const initialFormValues = {
        email: "",
        password: "",
        formSubmitted: false,
        success: false
      }
    const validate: any = (fieldValues = values) => {
    // this function will check if the form values are valid
    let temp: any = { ...errors }

    if ("password" in fieldValues)
        temp.password = fieldValues.password ? "" : "This field is required."

   


    if ("email" in fieldValues) {
        temp.email = fieldValues.email ? "" : "This field is required."
        if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
            ? ""
            : "Email is not valid."
    }


    setErrors({
        ...temp
    });
    }
    const [values, setValues] = useState(initialFormValues);
    const handleFormSubmit = async (e: any) => {
    // this function will be triggered by the submit event
    e.preventDefault();
    if (formIsValid()) {
        await postContactForm(values);
        alert("You've posted your form!")
    }
    }
    const formIsValid: any = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    const isValid =
    fieldValues.password &&
    fieldValues.email &&
    Object.values(errors).every((x) => x === "");

    return isValid;
    }
    const handleInputValue: any = (e: any) => {
        // this function will be triggered by the text field's onBlur and onChange events
        const{name,value}=e.target;
        setValues({
          ...values,
          [name]:value
        });
        validate({ [name]: value})
      }
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SnackbarContainer/>
            <Container sx={{ paddingTop:5,paddingBottom:"23%" }} >
              <form onSubmit={handleFormSubmit} >
                  <FormLabel sx={{ marginTop:5 }}>Profile Information</FormLabel>
                    <TextField sx={{my:2}} name="name" value={name}  fullWidth autoComplete="none" disabled  />   
                    <TextField sx={{my:2}} name="address" value={address}   fullWidth autoComplete="none" disabled />
                    <TextField sx={{my:2}} name="email" value={email}  fullWidth autoComplete="none" disabled {...(errors["email"] && { error: true, helperText: errors["email"] })}/>   
                    <TextField sx={{my:2}} name="phone" value={number}    fullWidth autoComplete="none"disabled />    
                    <Button sx={{my:2}} variant="contained" type="submit" color="error" fullWidth href="/">Sign Out</Button>      
                </form>
              </Container>
        
        </ThemeProvider>
        </>
    )
}
export default ProfilePageForm

function postContactForm(values: any) {
    throw new Error('Function not implemented.');
}
