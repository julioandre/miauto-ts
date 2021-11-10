import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    box:{
       
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:'70%',
        width:'70%',
        display:'flex',
        borderRadius:'5px',
        marginTop:'15%'
        
    },
    container:{
        display:'flex',
        marginTop:'15%'
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
