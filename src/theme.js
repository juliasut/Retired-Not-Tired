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
      light: '#e5def6',
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '.95rem',
        },
        shrink: {
          transform: 'translate(14px, -8px) scale(1) !important',
        },
        outlined: {
          transform: 'translate(14px, 16px) scale(1)',
        },
      },
    },

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

    // MuiPickersDay: {
    //   styleOverrides: {
    //     root: {
    //       color: 'red',

    //     }
    //   }
    // },

    // MuiPickersCalendarHeader: {
    //   styleOverrides: {
    //     root: { backgroundColor: '#988fad' , borderRadius: '5px'},
    //   },
    // },
  },
});

export default theme;
