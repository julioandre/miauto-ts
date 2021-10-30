import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    textinput:{
        width:'70%',
        paddingLeft:'20px'

    },
    divspace:{
        marginLeft:'15%',
        marginTop: '15px',
        
    },
    paper:{
        
    },
    img:{
        height: '50px',
        width: '50px',
    },
    box:{
        marginTop:'5%',
        marginLeft:'5%',
    }
}))

