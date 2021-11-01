import React from 'react'
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import { CssBaseline, ThemeProvider, createTheme, Paper, Grid} from '@mui/material';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import Cards from '../Cards';
import { useStyles } from '../GaragePage/GaragePage.styles';

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'#46d0d9',
        paper:'#dfe8e1'
      },
      secondary:{
        main:'#143656'
      },
    }
  })

const GaragePage:React.FC=()=>{
  const classes = useStyles();
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            <SearchBar/>
           
              <Grid container marginLeft='5%'>
                  {arrayIndexingWithLength(6).map((v)=>(
                     <Grid item xs={12} md={4} key={v} className={classes.card}>
                     <Cards />
                   </Grid>
                  ))}
              </Grid>
            
            
        </ThemeProvider>
            
        </>
    )
}
export default GaragePage;