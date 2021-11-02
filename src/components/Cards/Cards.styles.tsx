import { createStyles, makeStyles } from "@mui/styles";
import  { Theme } from '@mui/material';
  
  export const useStyles = makeStyles((theme:Theme)=>createStyles({
    root: {
        maxWidth: 400,
        marginTop:'15%',
        backgroundColor:"white"
      },
      media: {
        height: 240,
      },
      spacing:{
          paddingLeft:'40%'
      }

  }))
  
  