import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
    },
    secondary: {
      main: '#a11a83',
    },
    error: {
      main: red.A400,
    },
    background: {
        default: '#170b14',
    }
  },
  typography: {
    fontFamily: 'Times New Roman',
    h1:{
      color:"yellow"
    }
  },
  
});

export default darkTheme;

