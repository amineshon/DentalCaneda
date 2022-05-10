import { Box, Typography } from '@mui/material';
import React from 'react';

import { useTheme } from '@emotion/react';

interface Props {
  title: string;
  details: string;
  row: boolean;
  picWhite: React.ReactNode;
  picDark: React.ReactNode;
}

const InfoBox = ({ title, details, row, picWhite, picDark }: Props) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: (t) => t.palette.background.paper,
        height: row ? '140px' : '380px',
        display: 'flex',
        padding: row ? '20px' : '10px',
        flexDirection: row ? 'row' : 'column',
        alignItems: 'center',
        width: row ? '533' : '100%',
        margin: { md: '20px', xs: ' 30px 55px' },
        borderRadius: '16px',
        '&:hover': {
          boxShadow: '0px 2px 6px -1px #1c375a29',
          boxShadow: '0px 8px 24px -4px #1c324f61',
        },
      }}
    >
      <Box sx={{ my: 5 }}>{palette.mode === 'dark' ? picWhite : picDark}</Box>
      <Box
        sx={{
          display: ' flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: row ? 3 : 0,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: '600',
            alignSelf: row ? 'start' : '',
            color: (t) => t.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: row ? 'start' : 'center',
            width: row ? 'unset' : '100%',
            color: (t) => t.palette.text.primary,
          }}
        >
          {details}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoBox;
