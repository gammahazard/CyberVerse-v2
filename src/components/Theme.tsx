// components/Theme.tsx

import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import AnimationComponent from './AnimationComponent'; 

const theme = createTheme({
  palette: {
    background: {
      default: '#000C56',
    },
    text: {
      primary: '#E1EBFA',
    },
  },
  typography: {
    fontFamily: 'pixelFont, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#E1EBFA',
          borderColor: 'white',
          borderRadius:5,
      
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white'
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#E1EBFA',
        },
      },
    },
    // Add more component customizations here as needed
  },
});

interface ThemeProps {
  children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimationComponent />
      {children}
    </ThemeProvider>
  );
}
