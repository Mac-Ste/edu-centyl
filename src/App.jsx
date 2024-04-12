import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';


const theme = createTheme({
  palette: {
    background: {
      default: "#231a4b"
    },
    primary: {
      main: '#fbacb1',
      light: '#fcc6c9',
      dark: '#f89aa0',
      contrastText: '#231a4b',
    },
  },
  typography: {
    fontFamily: "'Cinzel', serif",
    fontWeightLight: 500,
    fontWeightRegular: 600, 
    fontWeightMedium: 700,
    fontWeightBold: 800
  }
});

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button variant="contained">Hello</Button>
        <Checkbox defaultChecked />
      </ThemeProvider>
      
    </>
  )
}
