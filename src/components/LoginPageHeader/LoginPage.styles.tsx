import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    paper:{
       
        justifyContent:'center',
        alignItems:'center',
        height:'40vh'
        
    },
    img:{
        height: '75px',
        width: '75px',
    },
}))
