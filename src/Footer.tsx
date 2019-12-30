import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React, { useState } from "react";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const Footer: React.FC = () => {
    const [value, setValue] = useState();
    return (
        <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    )
}