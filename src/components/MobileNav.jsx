import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Menu, MenuItem } from '@mui/material';

const MobileNav = () => {
  const [value, setValue] = useState('home');
  const [anchorEl, setAncorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAncorEl(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAncorEl(e.currentTarget);
    setOpen(true);
  };
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          '& .Mui-selected, .Mui-selected > svg': { color: '#625b71' },
        }}
      >
        <BottomNavigationAction
          sx={{
            '&:hover': {
              color: '#988fad',
            },
          }}
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{
            '&:hover': {
              color: '#988fad',
            },
          }}
          label="Activities"
          value="activities"
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{
            '&:hover': {
              color: '#988fad',
            },
          }}
          label="Messages"
          value="messages"
          icon={<EmailOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{
            '&:hover': {
              color: '#988fad',
            },
          }}
          label="Friends"
          value="friends"
          icon={<GroupOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={handleClick}
          sx={{
            '&:hover': {
              color: '#988fad',
            },
          }}
          label="More"
          value="more"
          icon={<ListOutlinedIcon />}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNav;
