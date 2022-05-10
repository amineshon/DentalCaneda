import React from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// Constants
// import ROUTE_CONSTANTS from 'constants/route';

// Components
import {
  AppBar,
  Box,
  Divider,
  Link as MaterialLink,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'components/Basic/Link';
import Logo from 'components/Basic/Logo';
import Container from 'layout/Container';
import Button from 'components/Basic/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DropdownList from 'components/Basic/DropDownList/DropdownList';
import IranFlagSvg from '../../../public/images/svg/IranFlag.svg';
import EnglishFlagSvg from '../../../public/images/svg/EnglishFlag.svg';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ThemeSwitchButton from 'components/Basic/ThemeSwitchButton/ThemeSwitchButton';
import styled from '@emotion/styled';
import ContactUS from 'pages/contactus';

const Header = () => {
  const profile = useSelector((state) => state.user.profile);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const { t } = useTranslation();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });
  const router = useRouter();
  const { locale, query, asPath, pathname } = router;

  /////////////////////////////////
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorLeftNav, setAnchorLeftNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenNavLeftMenu = (event) => {
    setAnchorLeftNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavLeftMenu = () => {
    setAnchorLeftNav(null);
  };

  //////////////////////////////////

  const links = [
    {
      key: '0',
      label: t('header.crypto-camp'),
      children: [
        {
          labels: t('header.quick_buy_sell'),
          details: t('header.quick_buy_sell_subtitle'),
          href: '/',
        },
      ],
    },
    {
      key: '1',
      label: t('header.crypto-market'),
      children: [
        {
          labels: t('header.cryptocurrency'),
          details: t('header.cryptocurrency_subtitle'),
          href: '/market',
        },
      ],
    },
    {
      key: '2',
      label: t('header.academy'),
      children: [
        {
          labels: t('header.blog'),
          details: t('header.blog_subtitle'),
          href: '/',
        },
      ],
    },
    {
      key: '3',
      label: t('header.about_us'),
      children: [
        {
          labels: t('header.about_us'),
          details: t('header.about_us_subtitle'),
          href: '/aboutUs',
        },
        {
          labels: t('header.contact_us'),
          details: t('header.contact_us_subtitle'),
          href: '/contactUs',
        },
        {
          labels: t('header.faq'),
          details: t('header.faq_subtitle'),
          href: '/faq',
        },
      ],
    },
  ];

  const mobileLinks = [
    {
      key: '0',
      label: t('header.crypto-camp'),
      children: [
        {
          labels: t('header.quick_buy_sell'),
          details: t('header.quick_buy_sell_subtitle'),
          href: '/',
        },
      ],
    },
    {
      key: '1',
      label: t('footer.support'),
      children: [
        {
          labels: t('header.faq'),
          href: '/faq',
        },
        {
          labels: t('footer.registration_guide'),
          href: '/kycInfo',
        },
      ],
    },
    {
      key: '2',
      label: t('footer.terms_and_condition'),
      children: [
        {
          labels: t('footer.trading_rules'),
          href: '/termsandconditions',
        },
        {
          labels: t('footer.trading_fee'),
          href: '/tradingRules',
        },
      ],
    },
  ];

  const MenuStyle = styled(Menu)`
    .MuiMenu-list,
    .MuiMenu-paper,
    .MuiMenu-root {
      width: 256px;
    }
  `;

  return (
    <AppBar
      color="inherit"
      position="fixed"
      sx={{ background: 'transparent', left: '1px' }}
    >
      <Box
        sx={{
          height: (theme) => theme.shape.headerHeight,
          display: 'flex',
          alignItems: 'center',
          maxWidth: '100%',
          padding: '57px 20px',
          background: {
            md: '#27272770',
            xs: 'linear-gradient(180deg, #120024 21.29%, #102441 142.94%)',
          },
        }}
      >
        <HeaderWeb
          sx={{
            display: { md: 'flex', xs: 'none' },
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <div>
            <Logo margin={'60px'} />
          </div>
          <Content>
            <Box sx={{ flexGrow: 1 }} />
            {/* <ThemeSwitchButton />
          <Box>
            <Button
              onClick={() => {
                const l = locale === 'fa' ? 'en' : 'fa';
                i18n.changeLanguage(l);
                router.push({ pathname, query }, asPath, { locale: l });
              }}
              sx={{
                backgroundColor: '#1C345426',
                '&:hover': {
                  backgroundColor: '#1C345426',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {t('change-locale')}
                {locale === 'fa' ? (
                  <EnglishFlagSvg style={{ marginRight: '6px' }} />
                ) : (
                  <IranFlagSvg style={{ marginLeft: '6px' }} />
                )}
              </Box>
            </Button>
          </Box> */}

            <a href="./">Home</a>
            <a href="./hygiene">Servises</a>
            <a href="#">About Us</a>

            <Button children={'Contact Us'} />
          </Content>
        </HeaderWeb>
        {/* responsive */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: { xs: 'center' },
          }}
        >
          <Logo />
        </Box>
      </Box>
    </AppBar>
  );
};

const HeaderWeb = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  div {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
const Content = styled.div`
  a {
    margin: 0 15px;
    color: #fff;
    transition: all 0.5s ease;
  }
  a:hover {
    border-bottom: 3px solid #fff;
    border-radius: 2%;
  }
`;
const ButtonHeadr = styled(Button)`
  :hover {
    border-bottom: none !important;
    border-radius: none !important;
  }
`;

export default Header;
