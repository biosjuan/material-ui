import { Poppins, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    grid: {
      main: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    grid: {
      main: string;
      dark: string;
    };
  }
}

declare module '@mui/material/button' {
  interface ButtonPropsVariantOverrides {
    beautiful: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    sl: true;
    xl: false;
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#18842c',
      light: '#3aab58',
      dark: 'darkgreen',
    },

    grid: {
      main: 'rgba(0,0,0,0.1)',
      dark: 'rgba(0,0,0,0.2)',
    },
    secondary: {
      main: '#19857b',
    },
    warning: {
      main: red.A200,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid orange',
        },
      },
      variants: [
        {
          props: { variant: 'beautiful' },
          style: {
            fontSize: 'italic',
            border: '4px solid lightpink',
            color: 'fuchsia',
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      sl: 1500,
    },
  },
  zIndex: {
    appBar: 1150,
  },
});

export default theme;
