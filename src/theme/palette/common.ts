import { colors } from '@mui/material';

const common = {
  primary: {
    main: '#005CB3',
    contrastText: 'white',
  },
  secondary: {
    main: '#2D2E83',
    contrastText: 'white',
  },
  error: {
    main: '#f46a6a',
    contrastText: 'white',
    dark: colors.red[900],
    light: colors.red[400],
  },

  warning: {
    main: '#FCB400',
    contrastText: 'white',
    dark: colors.yellow[900],
    light: colors.yellow[400],
  },
  success: {
    main: '#34c38f',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
  info: {
    main: '#0B8EE6',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
  grey: {
    main: colors.grey[700],
    ...colors.grey,
  },
};

export default common;
