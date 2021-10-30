import React,{useState} from 'react';
import { Drawer,List,ListItem,ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent:React.FC=()=>{
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/'>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to ="/garage">Garages</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to ="/contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to ="/register">Register</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent;