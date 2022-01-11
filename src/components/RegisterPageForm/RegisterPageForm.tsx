import { Button, Container, createTheme, Paper, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './RegisterPageForm.styles';
import { useForm } from "react-hook-form";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CreateAccountService from '../../services/CreateAccountService';
import ICreateAccountData from '../../types/CreateAccount';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


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
const schema = yup.object().shape({
  email: yup.string().required().email(),
  first_name: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
  password_confirm:yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  last_name:yup.string().required().min(2).max(25),
  address:yup.string().required().min(2).max(25),
  phone_number:yup.string().required().max(10),
  date_of_birth:yup.string().required()

});
  
const RegisterPageForm:React.FC=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccountData>({
    resolver: yupResolver(schema),
  });
  const responses={
    message:" ",
    successful:false,
  }
  
  
   
    const classes = useStyles()
    const [message, setMessage] = useState(responses);

    const [json, setJson] = useState<string>();

    const onSubmit = (data: ICreateAccountData) => {
      CreateAccountService.createAccount(data).then(response=>{
        setMessage({message:response.data.message,successful:true});
      },error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage({
          successful: false,
          message: resMessage
        });
      }
    ); 
      
      console.log(data)
      setJson(JSON.stringify(data));
    };
  // const creatAccount=()=>{
  //   console.log("I am")
  //   var data = {
  //     last_name:accountData.last_name,
  //     first_name:accountData.first_name,
  //     email:accountData.email,
  //     password:accountData.password,
  //     password_confirm:accountData.password_confirm,
  //     date_of_birth:accountData.date_of_birth,
  //     address:accountData.address,
  //     phone_number:accountData.phone_number
  //   };
  //   console.log(data)
  //   CreateAccountService.createAccount(data).then((response:any)=>{
  //     console.log("I am here")
  //    setAccountData({
  //      first_name:response.data.first_name,
  //      last_name:response.data.last_name,
  //      email:response.data.email,
  //      password:response.data.password,
  //      password_confirm:response.data.password_confirm,
  //      date_of_birth:response.data.date_of_birth,
  //      address:response.data.password,
  //      phone_number:response.data.phone_number, 
  //    })
  //    setSubmitted(true);
  //   console.log(response.data);

  //   })
  //   .catch((e:Error)=>{
  //     console.log(e)
  //   })
  // }
  // const handleInputValue: any = (e: any) => {
  //     // this function will be triggered by the text field's onBlur and onChange events
  //     const{name,value}=e.target;
  //     setAccountData({
  //       ...accountData,
  //       [name]:value
  //     });
      
  //   }
    return(
        <>
        <ThemeProvider theme={theme}>
            <Paper elevation={12} className={classes.paper}>
              <Container className={classes.container} >
              <form onSubmit={handleSubmit(onSubmit)}>
               
                    <TextField sx={{my:2}} {...register("first_name")}
                          variant="outlined"
                          margin="normal"
                          label="First Name"
                          helperText={errors.first_name?.message}
                          error={!!errors.first_name?.message}
                          fullWidth
                          required/>  
                    <TextField sx={{my:2}}  {...register("last_name")}
                      variant="outlined"
                      margin="normal"
                      label="Last Name"
                      helperText={errors.last_name?.message}
                      error={!!errors.last_name?.message}
                      fullWidth
                      required/>  
                    <TextField sx={{my:2}} {...register("email")}
                          variant="outlined"
                          margin="normal"
                          label="Email"
                          helperText={errors.email?.message}
                          error={!!errors.email?.message}
                          fullWidth
                          required/>   
                    <TextField sx={{my:2}}  {...register("password")}
                      variant="outlined"
                      margin="normal"
                      label="Password"
                      helperText={errors.password?.message}
                      error={!!errors.password?.message}
                      type="password"
                      fullWidth
                      required/>   
                    <TextField sx={{my:2}}  {...register("password_confirm")}
                        variant="outlined"
                        margin="normal"
                        label="Confirm Password"
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        type="password_confirm"
                        fullWidth
                        required/> 
                    <TextField sx={{my:2}}  {...register("phone_number")}
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        type="phone_number"
                        fullWidth
                        required/> 
                    <TextField sx={{my:2}}  {...register("address")}
                      variant="outlined"
                      margin="normal"
                      label="Address"
                      helperText={errors.password?.message}
                      error={!!errors.password?.message}
                      type="address"
                      fullWidth
                      required/> 
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TextField {...register("date_of_birth")} InputLabelProps={{shrink: true,}} type="date"  sx={{my:2}} name="date_of_birth" defaultValue="2017-05-24"  label="Date Of Birth" fullWidth  /> 
                    </LocalizationProvider>
                    <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth  >Register</Button>   
    
                </form>
              </Container>
            </Paper>
        </ThemeProvider>
        
        </>
    )
}
export default RegisterPageForm


