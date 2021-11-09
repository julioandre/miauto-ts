import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    grid:{
        maxwidth:'50%',
        my:'2%'
        
    },
    paper:{
        backgroundColor:'#46d0d9',
        
    }
}))

