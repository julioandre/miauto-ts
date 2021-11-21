import { alpha, styled} from '@mui/material';
import React, { useState } from 'react'

import { InputBase } from '@mui/material';

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
    margin:'1% 20% 5% 20%',
    width: '65%',
   
    
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
      width:'80%',
      [theme.breakpoints.up('sm')]: {
        width: '80%',
        '&:focus': {
          width: '80%',
        },
      },
    },
    width:'100%',
    border:1,
    borderColor:'black'
    
  }));
  type Props={
    searchtext:string
  }
const SearchBar:React.FC<Props>=({searchtext})=>{
    const [searchTerm,setSearchTerm] = useState(' ')
    return(
        
      
        <><Search >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder={searchtext}
          inputProps={{ 'aria-label': 'search' }} />
      </Search></>

        
    )
}
export default SearchBar;