import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};

const Tag = ({ title, ...restProps }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        backgroundColor: (t) => t.palette.tag.default,
        width: '57px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5px',
      }}
    >
      <Typography
        variant="subtitle2"
        {...restProps}
        sx={{ fontWeight: '400', color: (t) => t.palette.text.tag }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Tag;
