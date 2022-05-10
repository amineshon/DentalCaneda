import styled from '@emotion/styled';
import Newsletters from 'components/Molecules/Newsletters/newletters';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useRouter } from 'next/router';
import Link from 'components/Basic/Link';
import { SOCIAL_CONSTANTS } from '../../consts';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from '../../components/Basic/Logo/index';

// Component
const Footer = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'), {
    noSsr: true,
  });
  const route = useRouter();
  const { pathname } = route;

  const { t } = useTranslation();

  const [value, setValue] = React.useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    route.push(`${newValue}`);
  };

  const BottomNavigationActionStyled = styled(BottomNavigationAction)`
    .Mui-selected {
      color: ${(p) => p.theme.palette.warning.main};
    }
  `;
  const BottomNavigationStyled = styled(BottomNavigation)`
    .MuiBottomNavigationAction-root {
      color: ${(p) => p.theme.palette.text.primary};
      flex-direction: row;
    }

    .Mui-selected {
      color: ${(p) => p.theme.palette.warning.main} !important;
    }
  `;

  return matches ? (
    <FooterDiv>
      {/* <Newsletters title={'در جریان باشید!'} /> */}
      <Grid container spacing={2}>
        <GridFooter item xs={3}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Services
          </Typography>
          <a href="./hygiene">
            <Typography variant="body1" gutterBottom component="div">
              Dental Hygiene
            </Typography>
          </a>
          <a href="./general">
            <Typography variant="body1" gutterBottom component="div">
              General Dentistry
            </Typography>
          </a>
          <Typography variant="body1" gutterBottom component="div">
            Cosmetic Dentistry
          </Typography>
        </GridFooter>
        <GridFooter item xs={3}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Phone Number
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            <a href="tel:+1416746005">(416) 746-0005</a>
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            <a href="tel:+6476205444">(647) 620-5444</a>
          </Typography>
        </GridFooter>
        <GridFooter item xs={3}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Hours
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Mon-Thur : 8am - 5pm
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Friday : 8am - 5pm
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Sat : With Appointment
          </Typography>
        </GridFooter>
        <GridFooter item xs={3}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Address
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            3212 Weston Road, North York, M9M 2T7 Ontario, Canada
          </Typography>
        </GridFooter>
      </Grid>
    </FooterDiv>
  ) : (
    // responsive footer
    <BottomNavigationStyled
      sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 10 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationActionStyled
        label="Home"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationActionStyled
        label="Servises"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationActionStyled
        label="Blog"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationActionStyled
        label="Contact Us"
        value="/"
        icon={<HomeIcon />}
      />
    </BottomNavigationStyled>
  );
};
const GridFooter = styled(Grid)`
  color: #fff;
`;

const FooterDiv = styled.div`
  background: #476b8a;
  display: flex;
  min-height: 315px;
  align-items: center;
  padding: 0 50px;
`;
const TypographyLink = styled(Typography)`
  a {
    color: #6875f7;
  }
`;
const FooterLinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  padding-top: 40px;
`;
const FooterLine = styled.div`
  display: flex;
  color: #fff;
  justify-content: left;
  align-items: baseline;
  flex-direction: column;
  text-align: left;
  margin-top: 70px;
  line-height: 2;
`;
const Copyright = styled.p`
  color: #fcb400;
  font-size: 16px;
  text-align: center;
  margin-top: 100px;
`;
const LogoImg = styled.img`
  width: 190px;
`;
const LinkSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;
const FooterGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;
const LogoSection = styled.div`
  text-align: center;
`;

export default Footer;
