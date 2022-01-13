
import { Box,  Container, createTheme, CssBaseline,Paper , Fab, Dialog, DialogTitle, DialogActions, Button, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import SearchBar from '../Searchbar';
import { ThemeProvider } from '@mui/private-theming';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import AppNavBar from '../AppNavBar';
import CardComponent from './CardComponent'
import { useState } from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ICars from '../../types/Cars';
import CarServices from '../../services/CarServices';
import LoginService from '../../services/LoginService';
import { number } from 'yup/lib/locale';
import { SnackbarContainer, snackbarService } from "uno-material-ui";
import { useEffect } from 'react';

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',

        paper:'#D3DBE2'

      },
      secondary:{
        main:'#143656'
      },
    }
  })
  const schema = yup.object().shape({
    user_id: yup.number().required(),
    vin_number: yup.string().required().min(2).max(25),
    plate: yup.string().required().max(8),
    type:yup.string(),
    fuel:yup.string().required().min(2).max(25),
    make:yup.string().required().min(2).max(25),
    model:yup.string().required().max(20),
    engine:yup.string().required(),
    gear_box:yup.string().required(),
    air_conditioner:yup.number().required(),
    color:yup.string().required()
  
  });
    
const CarsPageBody:React.FC=()=>{
  useEffect(()=>{
    getAllCars()
},[])
    const [data,setData] = useState<Array<ICars>>([])
  const onOpenSuccess = (text,texttype) => {
    snackbarService.showSnackbar(text,texttype);
  };
  const [id,setID] = useState(number)
  const getID=()=>{
    const userStr = localStorage.getItem("user");
    var userToken
    if (userStr) userToken= JSON.parse(userStr);
    LoginService.getUser(userToken).then((response:any)=>{
      console.log(response.data.id)
      setID(response.data.id);
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICars>({
    resolver: yupResolver(schema),
  });
  const responses={
    message:" ",
    successful:false,
  }
    const [message, setMessage] = useState(responses);

    const [json, setJson] = useState<string>();
    const [open, setOpen] = React.useState(false);
    const [search, setSearch]= useState<string>(" ")
    const updateSearch = (name: string):void => {
      setSearch(name)}
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen = () => {
        getID()
        setOpen(true);
    };
    const getAllCars=()=>{
      const userStr = localStorage.getItem("user");
      var userToken
      if (userStr) userToken= JSON.parse(userStr);
      CarServices.getCars(userToken).then((response:any)=>{
        setData(response.data.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
     }
    const onSubmit=(data:ICars)=>{
      const userStr = localStorage.getItem("user");
      var userToken
      if (userStr) userToken= JSON.parse(userStr);
      CarServices.addCar(data,userToken).then(response=>{
        setMessage({message:response.data.message,successful:true});
        onOpenSuccess("Car Succesfully Added","success")
        handleClose()
        window.location.reload()
      },error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          onOpenSuccess("Car could not be added","error")
        setMessage({
          successful: false,
          message: resMessage
        });
      }
    ); 
      
      console.log(data)
      setJson(JSON.stringify(data));
    }

 
    
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <SnackbarContainer/>
        <Paper >
            
                <SearchBar updateText={updateSearch}/>
           
            <Fab color="primary" onClick={handleClickOpen} aria-label="add" sx={{ position:"fixed", margin:"97% 0% 0% 83%"}}>
                <AddIcon />
            </Fab>
            
            <Dialog
                PaperProps={{
                    style: {
                        backgroundColor: "white",
                        boxShadow: "none"
                    },
                    }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Add a new Car"}
                    </DialogTitle>
                <DialogActions>
                <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
               
                    <TextField sx={{my:2}} {...register("user_id")}
                          variant="outlined"
                          margin="normal"
                          value={id}
                          label="User ID"
                          
                          helperText={errors.user_id?.message}
                          error={!!errors.user_id?.message}
                          fullWidth
                          required/>  
                    <TextField sx={{my:2}}  {...register("vin_number")}
                      variant="outlined"
                      margin="normal"
                      label="Vin Number"
                      helperText={errors.vin_number?.message}
                      error={!!errors.vin_number?.message}
                      fullWidth
                      required/>  
                    <TextField sx={{my:2}} {...register("plate")}
                          variant="outlined"
                          margin="normal"
                          label="Plate"
                          helperText={errors.plate?.message}
                          error={!!errors.plate?.message}
                          fullWidth
                          required/>   
                    <TextField sx={{my:2}}  {...register("type")}
                      variant="outlined"
                      margin="normal"
                      label="Type"
                      helperText={errors.type?.message}
                      error={!!errors.type?.message}
                      fullWidth
                      required/>   
                    <TextField sx={{my:2}}  {...register("fuel")}
                        variant="outlined"
                        margin="normal"
                        label="Fuel"
                        helperText={errors.fuel?.message}
                        error={!!errors.fuel?.message}
                        fullWidth
                        required/> 
                    <TextField sx={{my:2}}  {...register("make")}
                        variant="outlined"
                        margin="normal"
                        label="Make"
                        helperText={errors.make?.message}
                        error={!!errors.make?.message}
                    
                        fullWidth
                        required/> 
                    <TextField sx={{my:2}}  {...register("model")}
                      variant="outlined"
                      margin="normal"
                      label="Model"
                      helperText={errors.model?.message}
                      error={!!errors.model?.message}
                      
                      fullWidth
                      required/> 
                      <TextField sx={{my:2}}  {...register("engine")}
                      variant="outlined"
                      margin="normal"
                      label="Engine"
                      helperText={errors.engine?.message}
                      error={!!errors.engine?.message}
                      fullWidth
                      required/> 
                      <TextField sx={{my:2}}  {...register("gear_box")}
                      variant="outlined"
                      margin="normal"
                      label="Gear Box"
                      helperText={errors.gear_box?.message}
                      error={!!errors.gear_box?.message}
                      
                      fullWidth
                      required/> 
                      <TextField sx={{my:2}}  {...register("air_conditioner")}
                      variant="outlined"
                      margin="normal"
                      label="Air Conditioner"
                      helperText={errors.air_conditioner?.message}
                      error={!!errors.air_conditioner?.message}
                      type="air_conditioner"
                      fullWidth
                      required/> 
                      <TextField sx={{my:2}}  {...register("color")}
                      variant="outlined"
                      margin="normal"
                      label="Color"
                      helperText={errors.model?.message}
                      error={!!errors.model?.message}
                      fullWidth
                      required/> 
                    <Button sx={{my:2}} variant="contained" type="submit" color="secondary" fullWidth  >Add Car</Button>   
    
                </form>
                <Container sx={{ margin:"3% 0% 0% 0%", paddingLeft:"0%"}}>
                <Button color="error" onClick={handleClose}>Close</Button>
                </Container>
                </Container>
               
                </DialogActions>
                        </Dialog>
                        
            {data.map((carsData,i)=>
              <CardComponent key={i} data={carsData}/>
            )}
            
            <Box sx={{ marginTop:"15%" }}>
        <AppNavBar selected="cars"/>
        </Box>
        </Paper>

        </ThemeProvider>
           
        </>
    )
}

export default CarsPageBody;