import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './HomepageRegister.styles'

const HomepageRegister:React.FC=()=>{
    const classes = useStyles();
    return(
        <Paper className={classes.paper} >
            <Typography sx={{ my:1}} align="center" variant='h4'>Want to reap customer benefits?</Typography>
            <Typography sx={{ my:1}} align="center" variant='subtitle1'>Get deals, buy car parts from our shop etc.</Typography>
            <Container  sx={{display:"flex" ,alignItems:"center", justifyContent:'center', marginTop:1,paddingBottom:2}} >
                <Button variant="contained" size="large" color="secondary" fullWidth> Sign Up</Button>

            </Container>
        </Paper>
    )
}
export default HomepageRegister