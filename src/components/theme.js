import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3ecbd7',
	  contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#c32e12',
    },
    error: {
      main: '#50060e',
    },
  },
});

export default theme;