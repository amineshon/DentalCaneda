import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styled from '@emotion/styled';
interface Props {
  asc: boolean;
  symbol: string;
  chart: string;
}

const MiniChart = ({ asc, symbol, chart }: Props) => {
  const ImageStyleRed = styled(Image)`
    filter: invert(12%) sepia(100%) saturate(5511%) hue-rotate(360deg)
      brightness(84%) contrast(400%);
  `;
  const ImageStyleGreen = styled(Image)`
    filter: invert(52%) sepia(76%) saturate(5980%) hue-rotate(128deg)
      brightness(99%) contrast(102%);
  `;

  return chart ? (
    <Box>
      {asc ? (
        <ImageStyleGreen src={`${chart}`} height={35} width={100} />
      ) : (
        <ImageStyleRed src={`${chart}`} height={35} width={100} />
      )}
    </Box>
  ) : (
    <div>null</div>
  );
};

export default MiniChart;
