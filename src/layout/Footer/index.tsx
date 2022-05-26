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
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
      color: #3F434C;
;
    }
  `;
  const BottomNavigationStyled = styled(BottomNavigation)`
    .MuiBottomNavigationAction-root {
      color: #3F434C;
            flex-direction: row;
    }

    .Mui-selected {
      color: #3F434C;    }
  `;

  return matches ? (
    <FooterDiv>
      {/* <Newsletters title={'در جریان باشید!'} /> */}
      <Grid container sx={{alignItems:'flex-end'}} spacing={2}>
        <GridFooter item md={3} lg={3} xs={3}>
          <Logo />
          <Typography sx={{marginTop:'10px'}} variant="body1" gutterBottom component="div">
            Our team of independent dental professionals with years of
            experience is dedicated to our patients with excellent distinguished
            dental services that deliver outstanding results.
          </Typography>
        </GridFooter>
        <GridFooter item md={3} lg={3} xs={3}>
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
        <GridFooter item md={3} lg={3} xs={3}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Resources
          </Typography>
          <a href="./hygiene">
            <Typography variant="body1" gutterBottom component="div">
              About Us
            </Typography>
          </a>
          <a href="./general">
            <Typography variant="body1" gutterBottom component="div">
               Blog
            </Typography>
          </a>
          <Typography variant="body1" gutterBottom component="div">
            Contact Us
          </Typography>
        </GridFooter>
        <GridFooter item md={3} lg={3} xs={3}>
          <DivIconFooter>
          <CallIcon/>
          <Typography marginLeft='20px' marginTop='10px' variant="body1" gutterBottom component="div">
          (416) 746-0005 - (647) 620-5444
          </Typography>
          </DivIconFooter>
          <DivIconFooter>
          <LocationOnIcon/>
          <Typography marginLeft='20px' marginTop='10px' variant="body1" gutterBottom component="div">
          3212 Weston Road, North York, M9M 2T7
          </Typography>
          </DivIconFooter>
          <DivIconFooter>
          <MailIcon/>
          <Typography marginLeft='20px' marginTop='10px' variant="body1" gutterBottom component="div">
          Aedentalart@gmail.com
          </Typography>
          </DivIconFooter>
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
        icon={<MedicalServicesIcon />}
      />
      <BottomNavigationActionStyled
        label="Blog"
        value="/"
        icon={<MenuBookIcon />}
      />
      <BottomNavigationActionStyled
        label="Contact Us"
        value="/contactus"
        icon={<ContactPhoneIcon />}
      />
    </BottomNavigationStyled>
  );
};
const GridFooter = styled(Grid)`
  color: #fff;
`;

const FooterDiv = styled.div`
  background: #3F434C;
  display: flex;
  min-height: 315px;
  align-items: center;
  padding: 0 50px;

`;
const DivIconFooter =styled.div`
display:flex ;
align-items:center ;
justify-content: flex-start;
`;






export default Footer;
