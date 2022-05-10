import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import WithRedux from 'enhancers/wrappers/withRedux';
import { EmotionCache } from '@emotion/react';

import PageWrapper from 'layout/PageWrapper';
// import '../style/index.css';
import i18nConfig from '../../i18n';
import StyleProvider from 'enhancers/wrappers/StyleProvider';

type AppPropsWithLayout = AppProps & {
  serverEmotionCache?: EmotionCache;
};

const MyApp = (props: AppPropsWithLayout) => {
  const { Component, serverEmotionCache, pageProps } = props;

  return (
    <WithRedux>
      <StyleProvider serverEmotionCache={serverEmotionCache}>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </StyleProvider>
    </WithRedux>
  );
};
export default appWithTranslation(MyApp, i18nConfig);
