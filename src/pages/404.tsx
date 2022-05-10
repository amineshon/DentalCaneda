import Container from 'layout/Container';
import React from 'react';
import Image from 'next/image';
import i18nConfig from '../../i18n';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, useTheme } from '@mui/material';

type Custom404Props = {
  locale: string;
};

const Custom404 = ({}: Custom404Props) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background:
            'linear-gradient(180deg, #120024 21.29%, #102441 142.94%)',
          position: 'absolute',
          top: 0,
          height: '100px',
          width: '100%',
        }}
      />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: { sm: '10vh', xs: '20vh' },
        }}
      >
        <Image
          src={
            theme.palette.mode === 'dark'
              ? '/images/bg/bg-404-dark.png'
              : '/images/bg/bg-404-light.png'
          }
          alt="404"
          width={1440}
          height={1024}
        />
      </Container>
    </>
  );
};

export default Custom404;

export const getStaticProps = async ({ locale }: Custom404Props) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
    },
  };
};
