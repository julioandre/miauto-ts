import { createTheme, Grid, List, ListItem, ListItemText, Paper, ThemeProvider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AccordionComponent from "./Accordion";
import { useStyles } from "./Footer.styles";

const themes = createTheme({
    typography:{
        allVariants:{
          color:'white'
        },
    },
    palette:{
      primary:{
        main:'#ffffff'
      },
      background:{
        default:'#46d0d9',
        paper:'#46d0d9',
      },
      secondary:{
        main:'#143656'
      },
    },
  
  })

const Banner:React.FC=()=>{
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <ThemeProvider theme={themes}>
             <Paper className={classes.paper}>
            <Grid  container display="flex" className={classes.grid}  direction="row" justifyContent="center" alignItems="center">
                {isMobile?(<AccordionComponent/>):
                    (
                        <>
                        <Grid item lg={2}>
                            <Typography>Help & Support</Typography>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="How it works" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Support Center" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Contact Us" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item lg={2}>
                                <Typography>Company</Typography>
                                <List dense={true}>
                                    <ListItem>
                                        <ListItemText primary="About Us" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Reviews" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Terms and Privacy" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item lg={2}>
                            <Typography>Popular Locations</Typography>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="Quito" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cuenca" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Loja" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Manta" />
                                </ListItem>
                            </List>
                            </Grid>
                        </>
                    )               
                }
            </Grid>
            <Typography  variant="subtitle2" align="center">MiAuto 2021</Typography>
        </Paper>
        </ThemeProvider>
       
    )
}

export default Banner;