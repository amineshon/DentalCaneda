import React, { Children } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';
import { Grid, useMediaQuery } from '@mui/material';

interface carouselsProps {
  deviceType: string | undefined;
  children: any;
}

const Carousels = ({ children }: carouselsProps) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'), {
    noSsr: true,
  });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,

      // partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,

      // partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,

      // partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30,
    },
  };
  return (
    <CarouselCom
      responsive={responsive}
      swipeable={true}
      ssr={true} // means to render carousel on server-side.
      autoPlay
      autoPlaySpeed={5000}
      transitionDuration={500}
      centerMode={true}
      focusOnSelect={false}
      infinite={true}
      additionalTransfrom={-100}
    >
      {children}
    </CarouselCom>
  );
};
const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 12px -1px rgba(28, 52, 84, 0.26),
    0px 2px 4px -1px rgba(28, 55, 90, 0.16);
  border-radius: 12px;
  height: 136px;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  justify-content: center;
`;
const CarouselCom = styled(Carousel)`
  direction: ${(theme) => theme.theme.direction};
  width: 100%;
  .react-multi-carousel-item {
    @media (max-width: 500px) {
      width: 250px !important;
    }
  }
`;
const RowTop = styled(Grid)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default Carousels;
