import { Button, Container, createTheme, CssBaseline, Paper, TextField, ThemeProvider } from '@mui/material';
import ILogin from '../../types/Login';
import LoginService from '../../services/LoginService';
import React, { useState } from 'react';
import {useStyles} from './LoginPageForm.styles'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

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
    password: yup.string().required().min(8).max(120),
    
  
  });
const LoginPageForm:React.FC=()=>{
   const history= useHistory();
    const classes= useStyles()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ILogin>({
      resolver: yupResolver(schema),
    });
    const responses={
      message:" ",
      successful:false,
    }
    const [message, setMessage] = useState(responses);
    const [json, setJson] = useState<string>();
    
    
    const onSubmit = (data: ILogin) => {
      LoginService.login(data).then(() => {
        history.push("/garages");
        window.location.reload();

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
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Paper className={classes.paper}>
            <Container >
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth href="garages">Login</Button>   
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
