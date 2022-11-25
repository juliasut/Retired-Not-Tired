import { createTheme } from '@mui/material/';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#625B75',
      light: '#988FAD',
      dark: '#423C53',
    },
    secondary: {
      main: '#3c2778',
    },
    textColor: {
      main: '#1b2540',
      secondary: 'rgba(0, 0, 0, 0.6)',
      dark: '#000',
      misc: '#846352',
    },
    logoColor: {
      light: '#FEF2D8',
      main: '#FABC2A',
      dark: '#846352',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Inter", "Helvetica", sans-serif',
    // h3: {
    //   fontSize: '3rem'
    // }
    // allVariants: {
    //   color: "#1b2540"
    // },
  },
  spacing: 4,
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#988fad',
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
