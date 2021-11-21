import {  Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BuildIcon from '@mui/icons-material/Build';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useStyles } from './Banner.styles';

const icon_list = [{tag:<MonetizationOnIcon key="moneyIcon" sx={{ fontSize:50, mx:'35%', color:"#143656"}}/>, text:"Up to 20% cheaper"},
{tag:<ReceiptLongIcon key="receiptIcon" sx={{ fontSize:50, mx:'35%', color:"#143656" }} />, text:"Fixed Instant quotes"},
{tag:<ThumbUpAltIcon key="thumsUpIcon"  sx={{ fontSize:50, mx:'35%', color:"#143656"}}/>, text:"Trustworthy and reliable Mechanics"},
{tag:<BuildIcon key="buildIcon" sx={{ fontSize:50, mx:'35%', color:"#143656"}}/>, text:"1 year parts and repair warranty"},
{tag:<DateRangeIcon key="dateIcon" sx={{ fontSize:50, mx:'35%', color:"#143656"}}/>, text:"Next Day Bookings"},
{tag:<DirectionsCarIcon key="carIcon" sx={{ fontSize:50, mx:'35%', color:"#143656"}}/>, text:"Get your car repaired at home or office"}]



const Banner:React.FC=()=>{
    const classes = useStyles()
    return(
        <Paper>
            <Grid container alignItems="center" my='1%'>
                 {icon_list.map(icon=>{
                     return <><Grid my='1%' item xs={4} lg={2} >
                         {icon.tag}
                         <Typography align="center" variant="subtitle1"> {icon.text}</Typography>
                         <Divider orientation="vertical" className={classes.divider} ></Divider> 
                     </Grid>
                     
                      </>
                     
                 })}
            </Grid>
        </Paper>
    )
}
export default Banner; 