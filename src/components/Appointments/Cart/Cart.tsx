import { Badge, Card, CardContent, CardMedia, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { FC } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


interface IProps {
    cartList:any

};

const Cart:FC<IProps> = ({cartList}) => {
    const slicedArray = cartList.slice(0,4)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
         <IconButton onClick={handleClick} sx={{marginLeft:'85%',marginTop:"5%"}} aria-label="notifications" color="inherit">
         <Badge badgeContent={cartList.length} color='secondary'> 
            <ShoppingCartOutlinedIcon fontSize="large"/>
        </Badge>    
        </IconButton>
        
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {slicedArray.map(item=>{
            return(
                <Card  sx={{ display:"flex",width:"70%",height:70,marginLeft:"2%",paddingBottom:"5%", backgroundColor:"white",my:4 }}>
                <CardMedia component="img" sx={{ width:"15px",height:"15px",}} image={item.image} alt="product" />
                <CardContent sx={{width:"40%"}}> 
                    <Typography sx={{paddingTop:"0px"}} variant="body1">{item.name}</Typography>
                    <Typography variant="subtitle1">{item.price}</Typography>
                </CardContent>
                </Card>
            )
        })}
      </Menu>
      </>
    )
};

export default Cart;