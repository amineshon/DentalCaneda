import React, { useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';

import CssBaseline from '@mui/material/CssBaseline';

// Actions
import { appSlice } from 'redux/slices';
import configTheme from 'theme/configure';
import useThemeDetector from 'enhancers/hooks/useThemeDetector';
import createEmotionCache from 'enhancers/createEmotionCache';
import { useAppDispatch } from 'redux/store';

import { i18n } from '../../../i18n';

// Constants
type Props = {
  children: React.ReactElement;
  serverEmotionCache?: EmotionCache;
};

const StyleProvider = ({ children, serverEmotionCache }: Props) => {
  const theme = useSelector((state) => state.app.theme);
  const isDark = useThemeDetector();
  const dispatch = useAppDispatch();
  const { locale }: any = useRouter();

  useEffect(() => {
    // dispatch(appSlice.actions.setTheme(isDark ? 'dark' : 'light'));
  }, [isDark]);

  const themeObject = useMemo(() => {
    const { direction, fontFamily } =
      i18n.availableLocales[locale === 'fa' ? 'fa' : 'en'];

    if (process.browser) {
      const body = document.getElementsByTagName('body')[0];
      body.setAttribute('dir', direction);
    }

    return configTheme({ direction, mode: theme, fontFamily });
  }, [theme, locale]);

  const emotionCache = useMemo(
    () => serverEmotionCache || createEmotionCache(themeObject.direction),
    [themeObject.direction, serverEmotionCache],
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <Head>
          <link
            href={`/fonts/${themeObject.typography.fontFamily}/style.css`}
            rel="stylesheet"
          />
          <link href="/fonts/bitmax-icon/styles.css" rel="stylesheet" />
        </Head>
        {/* <div dir={themeObject.direction}> */}
        {children}
        {/* </div> */}
      </ThemeProvider>
    </CacheProvider>
  );
};

// Export default
export default StyleProvider;
