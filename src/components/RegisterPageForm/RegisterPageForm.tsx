import { Button, Container, createTheme, Paper, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './RegisterPageForm.styles';
import { register } from '../../services/auth.service';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


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
  const dt = new Date()
  const maxdate = dt.setDate(dt.getDate()-18)
  const initialFormValues = {
    first_name:"",
    last_name:"",
    email: "",
    password: "",
    repeatpassword:'',
    number:"",
    address:"",
    date_of_birth:dt.setDate(dt.getDate()-18),
    formSubmitted: false,
    success: false
  }
  
const RegisterPageForm:React.FC=()=>{
    const classes = useStyles()
    const [message, setMessage] = useState<string>("");
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    const [successful, setSuccessful] = useState<boolean>(false);

    const validate: any = (fieldValues = values) => {
        // this function will check if the form values are valid
        let temp: any = { ...errors }

        if ("password" in fieldValues)
          temp.password = fieldValues.password ? "" : "This field is required."

        if ("first_name" in fieldValues)
        temp.first_name = fieldValues.first_name ? "" : "This field is required."
        
        if ("last_name" in fieldValues)
        temp.last_name = fieldValues.last_name ? "" : "This field is required."


        if ("repeatpassword" in fieldValues)
        temp.repeatpassword = fieldValues.repeatpassword ? "" : "This field is required."
  
    
        if ("email" in fieldValues) {
          temp.email = fieldValues.email ? "" : "This field is required."
          if (fieldValues.email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
              ? ""
              : "Email is not valid."
        }
        if("date_of_birth" in fieldValues){
           temp.date_of_birth = fieldValues.date_of_birth? "" : "Wrong Date" 
        }
    
        if ("number" in fieldValues)
          temp.number =
            fieldValues.number ? "" : "This field is required."
        if("address" in fieldValues) temp.address = fieldValues.address?"":"This field is required"
    
        setErrors({
          ...temp
        });
      }
    setMessage("");
    const handleFormSubmit = async (e: any,fieldValues=values) => {
    // this function will be triggered by the submit event
    e.preventDefault();
    if (formIsValid()) {
      await register(fieldValues.first_name,fieldValues.last_name,fieldValues.email,fieldValues.password,fieldValues.repeatpassword,fieldValues.date_of_birth,fieldValues.address,fieldValues.number).then((response)=>{setMessage(response.data.message);
        setSuccessful(true);},
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      setMessage(resMessage);}
      )
      
    }
    }
    const formIsValid: any = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    const isValid =
    fieldValues.first_name &&
    fieldValues.last_name&&
    fieldValues.password &&
    fieldValues.email &&
    fieldValues.number &&
    fieldValues.address&&
    fieldValues.date_of_birth&&
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
              <form onSubmit={()=>handleFormSubmit}>
               
                    <TextField sx={{my:2}} name="first_name" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="First Name" fullWidth autoComplete="none" {...(errors["first_name"] && { error: true, helperText: errors["first_name"] })}/>  
                    <TextField sx={{my:2}} name="last_name" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Last Name" fullWidth autoComplete="none" {...(errors["last_name"] && { error: true, helperText: errors["last_name"] })}/>  
                    <TextField sx={{my:2}} name="email" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Email" fullWidth autoComplete="none" {...(errors["email"] && { error: true, helperText: errors["email"] })}/>   
                    <TextField sx={{my:2}} name="password" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Password" fullWidth autoComplete="none" {...(errors["password"] && { error: true, helperText: errors["password"]  })}/>   
                    <TextField sx={{my:2}} name="repeatpassword" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Repeat Password" fullWidth  autoComplete="none" {...(errors["repeatpassword"] && { error: true, helperText: errors["repeatpassword"] })}/> 
                    <TextField sx={{my:2}} name="number" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Number" fullWidth  autoComplete="none" {...(errors["number"] && { error: true, helperText: errors["number"] })}/> 
                    <TextField sx={{my:2}} name="address" onBlur={()=>handleInputValue} onChange={()=>handleInputValue} label="Address" fullWidth  autoComplete="none" {...(errors["address"] && { error: true, helperText: errors["address"] })}/> 
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TextField InputLabelProps={{shrink: true,}} type="date" maxDate={maxdate} sx={{my:2}} name="date_of_birth"  onChange={()=>handleInputValue} inputFormat="MM/dd/yyyy" label="Date Of Birth" fullWidth  autoComplete="none" {...(errors["date_of_birth"] && { error: true, helperText: errors["date_of_birth"] })}/> 
                    </LocalizationProvider>
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
