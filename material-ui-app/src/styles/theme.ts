// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#171b24',
      paper: '#232a36',
    },
    text: {
      primary: '#eee',
      secondary: '#bdbdbd',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#232a36',
        },
      },
    },
  },
});

export default theme;
