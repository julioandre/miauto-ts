
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';





  type Props={
    updateText:(arg: string) => void
  }
const Searchbar:React.FC<Props>=({updateText})=>{
  
    const [value,setValue] = useState(' ')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return (
      <Paper 
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350,margin:3 }}
      >
        <InputBase
        value={value}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={handleChange}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={()=>updateText(value)} >
          <SearchIcon  />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    );
}
export default Searchbar;