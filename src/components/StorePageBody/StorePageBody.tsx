import { Badge, Box, Button, Card, CardActions, CardContent, CardMedia,  Container,  createTheme, CssBaseline, Grid, IconButton, Paper, ThemeProvider, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import product from '../../assets/product.png'
import SearchBar from '../SearchBar'
import {useStyles} from './StorePageBody.styles'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { height } from "@mui/system";
import AppNavBar from "../AppNavBar";



interface IProps {};
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

const SearchPageBody:FC<IProps> = (props) => {
    const classes = useStyles()
    const text = "Looking for Products"
    const [cartNumber, setCartNumber]=useState(0);
    const cart = [{}]
    const items = [{name:"Gastrol Edge", price:"$25",image:product},{name:"Total Classic", price:"$25",image:product},{name:"Wipers", price:"$50",image:product},{name:"Brake Fluid", price:"$15",image:product},{name:"Engine Oil", price:"$35",image:product}]
    const addToCart=(items)=>{
        setCartNumber(cartNumber+1)
        cart.push(items)
    }
    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{ height:"85vh" }}>
            <Paper sx={{ height:"110%"}}>
           
                <SearchBar searchtext={text}/>
           
           
            <IconButton sx={{marginLeft:'85%',marginTop:"5%"}} aria-label="notifications" color="inherit">
                        <Badge badgeContent={cartNumber} color='secondary'> 
                            <ShoppingCartOutlinedIcon fontSize="large"/>
                        </Badge>
            </IconButton>
            {items.map(item=>{
                return(
                <Card  sx={{ display:"flex",width:"70%",height:70,marginLeft:"2%",paddingBottom:"5%", backgroundColor:"white",my:4 }}>
                    <CardMedia component="img" sx={{ width:"50px",height:"50px", marginTop:"5%",marginLeft:"2%"}} image={item.image} alt="product" />
                    <CardContent sx={{width:"40%"}}> 
                        <Typography sx={{paddingTop:"0px"}} variant="body1">{item.name}</Typography>
                        <Typography variant="subtitle1">{item.price}</Typography>
                    </CardContent>
                    <CardActions>
                   
                    <Button sx={{ marginRight:"10px" }} size="small" color="secondary" variant="contained" onClick={()=>addToCart(item)}>
                        Add 
                    </Button>
                   
                    </CardActions>
                </Card>)
            })}
            <AppNavBar/>
            </Paper>
            </div>
        </ThemeProvider>
        

        </>
    )
};

export default SearchPageBody;