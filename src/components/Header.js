import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


  
  export default function Header({history}) {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/home"><BottomNavigationAction label="Recents" icon={<RestoreIcon />} /></Link>
          <Link to="/search"><BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link>
          <Link to="/about/:06a11aff5c1a4a0fb3b8856fe545e031"><BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /></Link>
        </BottomNavigation>
      </Box>
    );
  }
  