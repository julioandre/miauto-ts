import { Button, Container, createTheme, FormControl, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../../assets/logo.png'
import { useStyles } from './RegisterPageForm.styles';

const theme = createTheme({
    typography:{
        allVariants:{
          color:'white'
        },
    },
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
      }
    const handleFormSubmit = async (e: any) => {
    // this function will be triggered by the submit event
    }
    const formIsValid: any = () => {
    // this function will check if the form values and return a boolean value
    }
    const handleInputValue: any = (fieldValues = values) => {
        // this function will be triggered by the text field's onBlur and onChange events
      }
    return(
        <>
        <ThemeProvider theme={theme}>
            <Paper>
                <FormControl>
                    <TextField name="email" onBlur={handleInputValue} onChange={handleInputValue} label="Email" fullWidth autoComplete="none" {...(errors["email"] && { error: true, helperText: errors["email"] })}/>   
                    <TextField name="password" onBlur={handleInputValue} onChange={handleInputValue} label="Password" fullWidth autoComplete="none" {...(errors["password"] && { error: true, helperText: errors["password"]  })}/>   
                    <TextField name="repeatpassword" onBlur={handleInputValue} onChange={handleInputValue} label="Repeat Password" fullWidth  autoComplete="none" {...(errors["repeatpassword"] && { error: true, helperText: errors["repeatpassword"] })}/> 
                    <TextField name="number" onBlur={handleInputValue} onChange={handleInputValue} label="Number" fullWidth  autoComplete="none" {...(errors["number"] && { error: true, helperText: errors["number"] })}/> 
                    <Button type="submit" disabled={!formIsValid()}>Register</Button>   
    
                </FormControl>
            </Paper>
        </ThemeProvider>
        
        </>
    )
}
export default RegisterPageForm