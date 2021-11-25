
import { Box,  Container, createTheme, CssBaseline,Paper , Fab, Dialog, DialogTitle, DialogActions, Button, TextField, MenuItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import SearchBar from '../Searchbar';
import { ThemeProvider } from '@mui/private-theming';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import AppNavBar from '../AppNavBar';
import CardComponent from './CardComponent'




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

const CarsPageBody:React.FC=()=>{
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

 
    const searchtext = "Looking for you car"
    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Paper >
            
                <SearchBar searchtext={searchtext}/>
           
            <Fab color="primary" onClick={handleClickOpen} aria-label="add" sx={{ position:"fixed", margin:"0% 0% 0% 83%"}}>
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
                <TextField
                    
                    id="outlined-disabled"
                    label="Car Number"
                    
                    
                    
                    />
                
                    <TextField
                    
                    id="outlined-disabled" 
                    label="Mileage"
                    
                    sx={{ my:2 }}
                    
                    
                    ><MenuItem> KM </MenuItem> </TextField>
                    <TextField
                    disabled
                    id="outlined-disabled"
                    label="Last Visit"
                    defaultValue="12/10/2021"
                    />
                <Container sx={{ margin:"3% 0% 0% 0%", paddingLeft:"0%"}}>
                <Button color="secondary" onClick={handleClose}>Save</Button>
                <Button color="error" onClick={handleClose}>Close</Button>
                </Container>
                </Container>
               
                </DialogActions>
                        </Dialog>
                        
            {arrayIndexingWithLength(3).map((v)=>(

                     <CardComponent/>

                  ))}
            
            <Box sx={{ marginTop:"15%" }}>
        <AppNavBar selected="cars"/>
        </Box>
        </Paper>

        </ThemeProvider>
           
        </>
    )
}

export default CarsPageBody;