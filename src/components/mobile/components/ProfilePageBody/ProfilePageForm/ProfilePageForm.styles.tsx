import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    paper:{
       
        justifyContent:'center',
        alignItems:'center',
        height:'60vh'
        
    },
    img:{
        height: '75px',
        width: '75px',
    },
    selectedbox:{
        marginLeft:'5%',
        height:'90%',
        width:'70%',
        paddingBottom:'25%',
        paddingTop:'25%',
        marginTop:'5%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#46d0d9',
        display:'flex',
        borderRadius:'5px',
    }
}))
