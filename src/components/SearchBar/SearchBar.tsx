import { alpha, Paper, styled, Typography } from '@mui/material';
import React from 'react'

import { InputBase } from '@mui/material';
import { useStyles } from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderColor:'black',
    border:1,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin:'0 20% 5% 20%',
    width: '55%',
   
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width:'100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
    width:'100%',
    border:1,
    borderColor:'black'
    
  }));
  
const SearchBar:React.FC=()=>{
    
    return(
        
            <><Typography variant='h4' align='center' marginTop='2%'>Garages</Typography><Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }} />
      </Search></>

        
    )
}
export default SearchBar;