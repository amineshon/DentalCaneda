import React from 'react';
import {
  Box,
  Grid,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
// import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

interface Props {
  tittle: String | number;
  tittleEn: String | number;
  link: any;
}

const CareerOpportunities = ({ tittle, tittleEn, link }: Props) => {
  const router = useRouter();
  return (
    <GridCard item xs={12} md={5}>
      <GridContent item xs={12} md={12}>
        <Typography variant="subtitle1" gutterBottom component="div">
          {tittleEn}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {tittle}
        </Typography>
      </GridContent>
      <Grid item xs={12} md={12}>
        <ButtonBitMax onClick={() => router.push(link)} variant="contained">
          برسی بیشتر
        </ButtonBitMax>
      </Grid>
    </GridCard>
  );
};
const GridCard = styled(Grid)`
  background: ${(cardHiring) => cardHiring.theme.palette.card.hiringCard};
  color: ${(textColor) => textColor.theme.palette.designColor.textDefult};
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 32px;
  margin: 10px 0;
  .MuiTypography-root MuiTypography-body1 css-rtl-imdycl-MuiTypography-root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
`;
const GridContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-end;
  flex-wrap: wrap;
`;
const ButtonBitMax = styled(Button)`
  background-color: ${(ButtonBitMax) =>
    ButtonBitMax.theme.palette.designColor.button};
  :hover {
    background-color: ${(ButtonBitMax) =>
      ButtonBitMax.theme.palette.designColor.button};
  }
`;

export default CareerOpportunities;
