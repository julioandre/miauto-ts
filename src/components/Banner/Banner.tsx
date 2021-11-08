import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BuildIcon from '@mui/icons-material/Build';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useStyles } from './Banner.styles';

const icon_list = [{tag:<MonetizationOnIcon sx={{ fontSize:50, mx:'35%'}}/>, text:"Up to 20% cheaper"},
{tag:<ReceiptLongIcon sx={{ fontSize:50, mx:'35%'}} />, text:"Fixed Instant quotes"},
{tag:<ThumbUpAltIcon sx={{ fontSize:50, mx:'35%'}}/>, text:"Trustworthy and reliable Mechanics"},
{tag:<BuildIcon sx={{ fontSize:50, mx:'35%'}}/>, text:"1 year pasrts and repair warranty"},
{tag:<DateRangeIcon sx={{ fontSize:50, mx:'35%'}}/>, text:"Next Day Bookings"},
{tag:<DirectionsCarIcon sx={{ fontSize:50, mx:'35%'}}/>, text:"Get your car repaired at home or office"}]



const Banner:React.FC=()=>{
    const classes = useStyles()
    return(
        <Paper>
            <Grid container alignItems="center">
                 {icon_list.map(icon=>{
                     return <Grid my='1%' item xs={4} lg={2} alignItems="center"> 
                     {icon.tag } 
                     <Typography mx='15%' variant="subtitle1"> {icon.text}</Typography>
                     </Grid>
                 })}
            </Grid>
        </Paper>
    )
}
export default Banner; 