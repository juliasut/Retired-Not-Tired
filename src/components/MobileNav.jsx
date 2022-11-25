import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { styled, alpha, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import theme from '../theme';

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    '&:hover': {
      color: theme.palette.primary.dark,
      transform: 'scale(1.1)',
      fontWeight: 'bold',
    },
  })
);

const MobileNav = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [value, setValue] = useState('home');
  const [anchorEl, setAncorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = async () => {
    setAncorEl(null);
    setOpen(false);
  };
  const handleClick = async (e) => {
    setAncorEl(e.currentTarget);
    setOpen(true);
  };

  const handleLogout = (e) => {
    logout();
    setTimeout(() => {
      navigate('/login'); //? Redirect to home page
    }, 2000);
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,}}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          '& .Mui-selected': {
            color: 'primary.dark',
            backgroundColor: alpha(theme.palette.primary.light, 0.2),
          },
          '& .Mui-selected > svg': {
            transform: 'scale(1.1)',
          },
          '& .Mui-selected > .MuiBottomNavigationAction-label': {
            fontWeight: 'bold',
            backgroundColor: 'transparent',
          },
        }}
      >
        <StyledBottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
          component={Link}
          to="/"
        />

        <StyledBottomNavigationAction
          label="Activities"
          value="activities"
          icon={<FavoriteBorderOutlinedIcon />}
          component={Link}
          to="/activities"
        />
        <StyledBottomNavigationAction
          label="Messages"
          value="messages"
          icon={<EmailOutlinedIcon />}
          component={Link}
          to="/messages"
        />
        <StyledBottomNavigationAction
          label="Friends"
          value="friends"
          icon={<GroupOutlinedIcon />}
          component={Link}
          to="/friends"
        />
        <StyledBottomNavigationAction
          onClick={handleClick}
          label="More"
          value="more"
          icon={<ListOutlinedIcon />}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} component={Link} to="/profile">
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/update-profile">
            My account
          </MenuItem>
          <MenuItem onClick={(e) => handleLogout(e)}>Logout</MenuItem>
        </Menu>
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNav;
