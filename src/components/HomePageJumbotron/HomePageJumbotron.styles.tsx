import { makeStyles } from "@mui/styles";
import garage from '../../assets/garage.jpeg'

export const useStyles = makeStyles((theme)=>({
    container:{
       
        backgroundColor:'white',
        width:"100%"
    },
    paper:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius:'10px',
        margin:'10% 0%',
    },
    boxelements:{
        width:'70%'
    },
    form:{
        width:'100%',
        alignItems:'center'
        
    },
    div:{
        justifyContent:'center',
        width:'90%',
        marginTop:'10%',
        
    },
    input: {
        background: "white",
        
      }
    
}))
