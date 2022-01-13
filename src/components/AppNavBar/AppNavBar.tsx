import { BottomNavigation, BottomNavigationAction, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import GarageIcon from '@mui/icons-material/Garage';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StoreIcon from '@mui/icons-material/Store';

const theme = createTheme({
    palette:{
      background:{
        default:'white',
        paper:'#46d0d9',
      },}})
interface IProps {
  selected:string
};

const AppNavBar:FC<IProps> = ({selected}) => {
    
  const [value, setValue] = React.useState(selected);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(selected);
  };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
             <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange
          }
        >
          <BottomNavigationAction href="garages"  value="garage" label="Garages" icon={<GarageIcon />} />
          <BottomNavigationAction href="/cars" value="cars" label="Cars" icon={<DirectionsCarIcon />} />
          <BottomNavigationAction href="/store" value="appointment" label="Appointment" icon={<StoreIcon/>} />
          <BottomNavigationAction href="/profile" value="profile" label="Profile" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
        </ThemeProvider>
       
    )
};

export default AppNavBar;