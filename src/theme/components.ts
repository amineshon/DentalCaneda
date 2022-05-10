import { Theme } from '@mui/material/styles';

const components = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },

      'input:-webkit-autofill': {
        '-webkit-box-shadow': `0 0 0px 1000px ${theme.palette.background.paper} inset !important`,
        'font-family': theme.typography.fontFamily,
      },
      '::-webkit-scrollbar': {
        width: '0px !important',
        height: '0px !important',
      },

      /* Track */
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },

      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: 'transparent',
      },

      /* Handle on hover */
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: '7px 0 0',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {},
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        marginLeft: -20,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        // backgroundColor: '#FCB400 !important',
      },
    },
    defaultProps: {
      variant: 'contained' as const,
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)',
        borderRadius: 0,
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        background: 'rgba(252, 180, 0, 0.1)',
        color: '#FCB400',
        border: 'none',

        '&.Mui-selected': {
          backgroundColor: '#FCB400',
          color: '#fff',
          '&.Mui-focusVisible': { backgroundColor: '#FCB400', color: '#fff' },
          '&.Mui-selected:hover': {
            background: '#FCB400',
          },
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        // input label when focused
        '& label.Mui-focused': {
          color: theme.palette.text.primary,
        },
        // focused color for input with variant='standard'
        '& .MuiInput-underline:after': {
          borderBottomColor: theme.palette.text.primary,
        },
        // focused color for input with variant='filled'
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: theme.palette.text.primary,
        },
        // focused color for input with variant='outlined'
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.text.primary,
          },
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
      },
    },
  },
});

export default components;
