import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>createStyles({
    paper:{
       
        justifyContent:'center',
        alignItems:'center',
        height:'40vh'
        
    },
    container:{
        marginTop:'15%'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        flexWrap: 'nowrap'
      }
    
}))
