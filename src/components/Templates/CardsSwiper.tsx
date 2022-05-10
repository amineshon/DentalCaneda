import React from 'react';
import styled from '@emotion/styled';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, useMediaQuery } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const CardsSwiper = ({ children }: Props) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    disabled: false,
    vertical: false,
    renderMode: 'performance',
    slides: matches ? { perView: 3, spacing: 10 } : { perView: 1, spacing: 5 },
  });

  return (
    <>
      <Box
        ref={ref}
        className="keen-slider"
        sx={{ marginLeft: { md: '5%', xs: '10%' } }}
      >
        {children}
      </Box>
    </>
  );
};

export default CardsSwiper;
