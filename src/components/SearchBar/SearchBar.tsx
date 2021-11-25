
import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";





  type Props={
    searchtext:string
  }
const Searchbar:React.FC<Props>=({searchtext})=>{
    const [searchTerm,setSearchTerm] = useState(' ')
    const [value,setValue] = useState(' ')
    return(
        
      <SearchBar
      
      
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '5% 5%',
        maxWidth: "80%"
      }}
      />
      

        
    )
}
export default Searchbar;