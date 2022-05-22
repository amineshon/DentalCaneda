import React from 'react';
import styled from '@emotion/styled';

import NextLink from 'next/link';
import Logo1 from '../../../../public/images/logo/DentalLogo.png';
import { useTheme } from '@mui/material';

const SVG = styled.svg`
  cursor: pointer;
`;

// Components
const Logo = (margin: any) => {
  return (
    <NextLink href="/">
      <LogoImg
        style={{ cursor: 'pointer',width:'100px' }}
        src={'/images/logo/DentalLogo.png'}
        alt="Logo"
        margin={margin}
      />
      {/* <Logo1 style={{ cursor: 'pointer' }} /> */}
    </NextLink>
  );
};
const LogoImg = styled.img`
  width: auto;
  margin: 0 ${(props) => (props.margin ? props.margin.margin : '0')};
`;

export default Logo;
