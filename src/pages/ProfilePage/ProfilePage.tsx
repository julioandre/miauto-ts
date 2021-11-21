import React from 'react';
import ProfilePageHeader from '../../components/ProfilePageHeader';
import ProfilePageBody from '../../components/ProfilePageBody';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette:{
      primary:{
        main:'#46d0d9'
      },
      background:{
        default:'white',
        paper:'#D3DBE2',
      },
      secondary:{
        main:'#143656'
      },
    }
    })
  
const ProfilePage:React.FC=()=>{
    return(
       <> 
       <ThemeProvider theme={theme}>
       <ProfilePageHeader/>
       <ProfilePageBody/>
       </ThemeProvider>
       
       </>
    )
}
export default ProfilePage;