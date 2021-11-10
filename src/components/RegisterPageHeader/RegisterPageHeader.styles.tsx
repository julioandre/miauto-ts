import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    paper:{
        marginTop:'4.5%',
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    img:{
        height: '75px',
        width: '75px',
    },
}))
