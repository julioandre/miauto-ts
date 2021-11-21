import { Button, Container, createTheme, Paper, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './RegisterPageForm.styles';

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
  const initialFormValues = {
    email: "",
    password: "",
    repeatpassword:'',
    number:"",
    formSubmitted: false,
    success: false
  }
  
const RegisterPageForm:React.FC=()=>{
    const classes = useStyles()
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    const validate: any = (fieldValues = values) => {
        // this function will check if the form values are valid
        let temp: any = { ...errors }

        if ("password" in fieldValues)
          temp.password = fieldValues.password ? "" : "This field is required."

        if ("repeatpassword" in fieldValues)
        temp.repeatpassword = fieldValues.repeatpassword ? "" : "This field is required."
  
    
        if ("email" in fieldValues) {
          temp.email = fieldValues.email ? "" : "This field is required."
          if (fieldValues.email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
              ? ""
              : "Email is not valid."
        }
    
        if ("number" in fieldValues)
          temp.number =
            fieldValues.number ? "" : "This field is required."
    
        setErrors({
          ...temp
        });
      }
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
    fieldValues.number &&
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
            <Paper elevation={12} className={classes.paper}>
              <Container className={classes.container} >
              <form onSubmit={handleFormSubmit}>
               
                    <TextField sx={{my:2}} name="email" onBlur={handleInputValue} onChange={handleInputValue} label="Email" fullWidth autoComplete="none" {...(errors["email"] && { error: true, helperText: errors["email"] })}/>   
                    <TextField sx={{my:2}} name="password" onBlur={handleInputValue} onChange={handleInputValue} label="Password" fullWidth autoComplete="none" {...(errors["password"] && { error: true, helperText: errors["password"]  })}/>   
                    <TextField sx={{my:2}} name="repeatpassword" onBlur={handleInputValue} onChange={handleInputValue} label="Repeat Password" fullWidth  autoComplete="none" {...(errors["repeatpassword"] && { error: true, helperText: errors["repeatpassword"] })}/> 
                    <TextField sx={{my:2}} name="number" onBlur={handleInputValue} onChange={handleInputValue} label="Number" fullWidth  autoComplete="none" {...(errors["number"] && { error: true, helperText: errors["number"] })}/> 
                    <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth href="login" >Register</Button>   
    
                </form>
              </Container>
            </Paper>
        </ThemeProvider>
        
        </>
    )
}
export default RegisterPageForm

function postContactForm(values: { email: string; password: string; repeatpassword: string; number: string; formSubmitted: boolean; success: boolean; }) {
  throw new Error('Function not implemented.');
}
