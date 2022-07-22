import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../../context/ThemeContext';

export default function NavBar() {
  const {theme, changeTheme, setIsDark} = React.useContext(ThemeContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: theme.elements, color: theme.text}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="left">
            Where in the world?
          </Typography>
          <Button color="inherit" style={{textTransform: 'none'}} startIcon={<DarkModeIcon/>}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => {changeTheme(theme.dark ? true : false); setIsDark(theme.dark)}}>
            {theme.dark ? 'Light' : 'Dark'} Mode
          </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}