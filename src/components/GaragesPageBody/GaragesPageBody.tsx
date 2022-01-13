import { Box,  createTheme, CssBaseline,   Paper } from '@mui/material';
import React from 'react'
import SearchBar from '../Searchbar';
import { ThemeProvider } from '@mui/private-theming';
import CardComponent from './CardComponent';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import AppNavBar from '../AppNavBar';
import { useState } from 'react';
import IGarage from '../../types/Garages';
import getGarages from '../../services/getGarages';
import { useEffect } from 'react';


const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'#143656'
      },
      secondary:{
        main:'#143656'
      },
    }
  })
  
const GaragesPageBody:React.FC=()=>{
    
  useEffect(()=>{
    getgarage()
},[])
    const [data,setData] = useState<Array<IGarage>>([])
    const [searchText,setSearch] = useState("")
    
 
 const getgarage=()=>{
  const userStr = localStorage.getItem("user");
  var userToken
  if (userStr) userToken= JSON.parse(userStr);
  getGarages.getAllGarages(userToken).then((response:any)=>{
    setData(response.data.data);
  })
  .catch((e: Error) => {
    console.log(e);
  });
 }
 
 const updateSearch = (name: string):void => {
  setSearch(name)
  const userStr = localStorage.getItem("user");
  var userToken
  if (userStr) userToken= JSON.parse(userStr);
  getGarages.getGarageName(userToken,searchText).then((response:any)=>{
    setData([])
    setData(response.data.data)
    console.log(data)
  })
  .catch((e: Error) => {
    console.log(e);
  });

}
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Paper sx={{  }}>
            
              <SearchBar updateText={updateSearch}/>

            {data.map((garageData,i)=>
              <CardComponent key={i} data={garageData}/>
            )}
        <Box sx={{ marginTop:"15%" }}>
        <AppNavBar selected="garage"/>
        </Box>
            
        </Paper>
        
        


        </ThemeProvider>
           
        </>
    )
}

export default GaragesPageBody;