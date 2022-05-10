import { Box, Divider, Typography, useTheme, Grid } from '@mui/material';
import MiniChart from 'components/Basic/MiniChart/MiniChart';
import React from 'react';
import ReactNumberFormat from 'react-number-format';
import Tag from 'components/Basic/Tag/Tag';
import BtcSvg from 'cryptocurrency-icons/svg/color/btc.svg';
import styled from '@emotion/styled';
import Carousel from 'react-multi-carousel';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Paper,
} from '@mui/material';

interface Props {
  asc: boolean;
  name: string;
  price: number | string;
  chart: string;
  percent: string;
}

const PriceCard = ({ asc = true, name, price, chart, percent }: Props) => {
  const symbol = name?.toLocaleLowerCase();
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: (t) => t.palette.background.card,
        height: '136px',
        borderRadius: '12px',
        backgroundColor: (t) => (t.palette.mode === 'dark' ? 'none' : '#fff'),
        margin: '0px 5px',
        maxWidth: '300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          height: '65px',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box
          sx={{
            fontSize: '18px',
            color: asc ? '#00A344' : theme.palette.number,
            direction: 'rtl',
          }}
        >
          {percent}%
        </Box>
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
          <Tag title={name} />
        </Box>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: '600', margin: 0 }}
        >
          {name}
        </Typography>
        <div>
          <img
            src={`/images/icon/color/${symbol}.svg`}
            style={{
              width: '30px',
              height: '30px',
              margin: '0px 20px',
            }}
            alt="coinIcon"
          />
        </div>
      </Box>
      <Divider
        sx={{
          borderColor: (t) => (t.palette.mode === 'dark' ? 'transparent' : ''),
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <div>
          <MiniChart asc={asc} symbol={name} chart={chart} />
        </div>
        <ReactNumberFormat
          thousandSeparator
          isNumericString
          prefix="$"
          value={price}
          displayType="text"
          style={{ color: '#FCB400', fontSize: '18px', alignSelf: 'baseline' }}
        />
      </Box>
    </Box>
    // <Card
    //   sx={{
    //     backgroundImage: (t) => t.palette.background.card,
    //     borderRadius: '12px',
    //     backgroundColor: (t) => (t.palette.mode === 'dark' ? 'none' : '#fff'),
    //   }}
    // >
    //   <Grid xs={12}>
    //     <RowTop>
    //       <div>
    //         {' '}
    //         <img
    //           src={`/images/icon/color/${symbol}.svg`}
    //           style={{
    //             width: '30px',
    //             height: '30px',
    //             margin: '0px 20px',
    //           }}
    //           alt="coinIcon"
    //         />
    //       </div>
    //       <div>
    //         <Tag title={name} />
    //       </div>
    //       <div>
    //         <Tag title={name} />
    //       </div>
    //       <Box
    //         sx={{
    //           color: asc ? '#00A344' : '#F52419',
    //           direction: 'rtl',
    //         }}
    //       >
    //         {percent}%
    //       </Box>
    //     </RowTop>
    //   </Grid>
    //   <Grid xs={12}>
    //     <RowTop>
    //       <div>
    //         <ReactNumberFormat
    //           thousandSeparator
    //           isNumericString
    //           prefix="$"
    //           value={price}
    //           displayType="text"
    //           style={{ color: '#FCB400', alignSelf: 'baseline' }}
    //         />
    //       </div>
    //       <div>
    //         <MiniChart asc={asc} symbol={name} chart={chart} />
    //       </div>
    //     </RowTop>
    //   </Grid>
    // </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 12px -1px rgba(28, 52, 84, 0.26),
    0px 2px 4px -1px rgba(28, 55, 90, 0.16);
  border-radius: 12px;
  height: 136px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  width: 283px;
`;
const CarouselCom = styled(Carousel)`
  direction: rtl;

  border: 2px solid #ffffff01;
`;
const RowTop = styled(Grid)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default PriceCard;
