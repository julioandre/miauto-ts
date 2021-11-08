import { makeStyles } from "@mui/styles";
import mechanic from '../../assets/mechanic.jpeg'
export const useStyles = makeStyles((theme)=>({
    container:{
        backgroundImage:`url(${mechanic})`
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
        padding:'10%',
        marginLeft:'5%',
        
    },
    input: {
        background: "white",
        
      }
    
}))
