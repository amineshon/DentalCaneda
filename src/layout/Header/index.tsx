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
  Link,
  Menu,
  MenuItem,
  Typography,
  Breadcrumbs,
  Stack,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image from 'next/image';
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



  const mobileLinks = [
    {
      key: '0',
      label: 'Services',
      children: [
        {
          labels: 'Dental Hygiene',
          href: '/hygiene',
        },
        {
          labels: 'General Dentistry',
          href: '/general',
        },
        {
          labels: 'Cosmetic Dentistry',
          href: '/general',
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
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '100%',
          minHeight: '112px',
          borderBottom: 'solid 1px #fff',
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
          <DivTittle>
            <LinkHeadrIteam href="#" variant="h6">
              {'Home'}
            </LinkHeadrIteam>
            <LinkHeadrIteam className='separatorSelector' href="#" variant="h6">
              {'Services'}
            </LinkHeadrIteam>
            <LinkHeadrIteam href="#" variant="h6">
              {'About Us'}
            </LinkHeadrIteam>
            {/* <Box sx={{ flexGrow: 1 }} />
            <ThemeSwitchButton />
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
          </DivTittle>
          <Box>
            <Logo />
          </Box>
          <DivTittle>
            <Button children={'Contact Us'} />
          </DivTittle>
        </HeaderWeb>

       

        {/* responsive */}
        <Box
          sx={{
            padding: '4%',
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: { xs: 'space-between' },
          }}
        >
          <IconButton size="large" onClick={handleOpenNavMenu}>
            <MenuIcon sx={{ fill: '#5B6676' }} />
          </IconButton>
          <MenuStyle
            id="menu-appbar"
            anchorEl={anchorElNav}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem sx={{ direction: 'ltr' }}>
              <Link
                sx={{
                  mx: 2,
                  color: (t) => t.palette.text.primary,
                  '&:hover': {
                    backgroundColor: 'inherit',
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
                href="/"
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem sx={{ flexDirection: 'column', direction: 'ltr' }}>
              {mobileLinks.map((l) => (
                <DropdownList
                  title={l.label}
                  key={l.key}
                  children={l.children}
                  accordion={true}
                />
              ))}
            </MenuItem>

            <MenuItem sx={{ direction: 'ltr' }}>
              <Link
                sx={{
                  mx: 2,
                  color: (t) => t.palette.text.primary,
                  '&:hover': {
                    backgroundColor: 'inherit',
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
                href="/aboutus"
              >
                About Us
              </Link>
            </MenuItem>
          </MenuStyle>

          <Logo />
        </Box>
      </Box>
    </AppBar>
  );
};
const TypographyHeaderItem = styled(Typography)`
  color: #fff;
  margin: 0 10px;
`;

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
  /* a {
    margin: 0 15px;
    color: #fff;
    transition: all 0.5s ease;
  }
  a:hover {
    border-bottom: 3px solid #fff;
    border-radius: 2%;
    background-color:#fff ;
  } */
`;
const LinkHeadrIteam = styled(Link)`
  margin-right: 15px;
  color: #fff;
  transition: all 0.9s ease;

  :hover {
    border-bottom: 3px solid #fff;
    border-radius: 2%;
    background: rgba(180, 180, 180, 0.75);
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .separatorSelector{
    :Hover {
      .separator-hover{
        display: none,
      }
    }
  }
  
`;


const DivTittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20%;
`;

export default Header;
