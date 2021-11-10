import { Button, Container, createTheme, CssBaseline, Paper, TextField, ThemeProvider } from '@mui/material';

import React, { useState } from 'react';
import {useStyles} from './LoginPageForm.styles'

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
  
const LoginPageForm:React.FC=()=>{
    const classes= useStyles()
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
            <Paper className={classes.paper}>
            <Container >
              <form onSubmit={handleFormSubmit}>
               
                    <TextField sx={{my:2}} name="email" onBlur={handleInputValue} onChange={handleInputValue} label="Email" fullWidth autoComplete="none" {...(errors["email"] && { error: true, helperText: errors["email"] })}/>   
                    <TextField sx={{my:2}} name="password" onBlur={handleInputValue} onChange={handleInputValue} label="Password" fullWidth autoComplete="none" {...(errors["password"] && { error: true, helperText: errors["password"]  })}/>   
                    <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth >Login</Button>   
    
                </form>
              </Container>
            </Paper>
        </ThemeProvider>
        </>
    )
}
export default LoginPageForm

function postContactForm(values: any) {
    throw new Error('Function not implemented.');
}
