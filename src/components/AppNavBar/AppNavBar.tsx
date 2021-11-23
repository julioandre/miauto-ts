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
interface IProps {};

const AppNavBar:FC<IProps> = (props) => {
    const [value, setValue] = React.useState(0);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
             <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href="/garages" label="Garages" icon={<GarageIcon />} />
          <BottomNavigationAction href="/cars" label="Cars" icon={<DirectionsCarIcon />} />
          <BottomNavigationAction href="/store" label="Store" icon={<StoreIcon/>} />
          <BottomNavigationAction href="/profile" label="Profile" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
        </ThemeProvider>
       
    )
};

export default AppNavBar;