import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';


const AccordionComponent:React.FC=()=>{
    return(
        <Grid container>
            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary 
                     expandIcon={<ExpandMore/> }
                     aria-controls="panella-content"
                     id="panella-header"
                    >
                    <Typography>Help & Support </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary 
                     expandIcon={<ExpandMore/> }
                     aria-controls="panella-content"
                     id="panella-header"
                    >
                    <Typography>Company </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary 
                     expandIcon={<ExpandMore/> }
                     aria-controls="panella-content"
                     id="panella-header"
                    >
                    <Typography>Popular Locations </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <List dense={true}>
                                <ListItem>
                                    <ListItemText primary="Quito" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Loja" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cuenca" />
                                </ListItem>
                            </List>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}
export default AccordionComponent;