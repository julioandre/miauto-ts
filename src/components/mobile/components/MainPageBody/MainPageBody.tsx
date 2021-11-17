import { Box, Container, createTheme, CssBaseline, Grid,  IconButton,  Paper } from '@mui/material';
import React from 'react'
import { useStyles } from './MainPageBody.styles';
import SearchBar from '../../../SearchBar';
import { ThemeProvider } from '@mui/private-theming';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CardComponent from './CardComponent';
import { arrayIndexingWithLength } from '../../../../utils/arrayIndexingWithLength';



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

const MainPageBody:React.FC=()=>{
    const classes = useStyles();
    const searchtext = "Looking for a Garage"
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Paper >
            <Container sx={{ paddingTop:'10%'}}>
                <SearchBar searchtext={searchtext}/>
            </Container>
            <Grid container height='100%' marginLeft="3%">
                <Grid item xs={3}>
                    <Box  className={classes.selectedbox}>
                        <IconButton href='/mainpage'>
                        <HomeIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <IconButton href='/garages'>
                        <DirectionsCarIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <ShoppingBasketIcon fontSize="large"/>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <IconButton href='/profile'>
                        <AppSettingsAltIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            {arrayIndexingWithLength(3).map((v)=>(
                     <CardComponent/>
                  ))}
            
                
        </Paper>

        </ThemeProvider>
           
        </>
    )
}

export default MainPageBody;