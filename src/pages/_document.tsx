import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'enhancers/createEmotionCache';
import { i18n } from '../../i18n';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          <link rel="shortcut icon" href="/images/favicon.ico" />
          {/* {this.props.emotionStyleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with static-site generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   const originalRenderPage = ctx.renderPage;

//   /*
// 		You can consider sharing the same emotion cache between
// 		all the SSR requests to speed up performance.
// 	 	However, be aware that it can have global side effects.
// 	*/
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={cache} {...props} />;
//         },
//     });

//   const initialProps = await Document.getInitialProps(ctx);
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style: any) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     emotionStyleTags,
//   };
// };

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: any) => {
  const originalRenderPage = ctx.renderPage;
  const initialProps = await Document.getInitialProps(ctx);

  // Create Emotion cache
  const direction =
    i18n?.availableLocales?.[ctx.locale === 'fa' ? 'fa' : 'en']?.direction;
  const cache = createEmotionCache(direction);

  // Extract styles from html
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);
  const chunks = extractCriticalToChunks(initialProps.html);
  const styles = constructStyleTagsFromChunks(chunks);

  // Make style tags
  // const emotionStyleTags = chunks.styles.map((style: any) => {
  // 	return (
  // 		<style
  // 			data-emotion={`${style.key} ${style.ids.join(' ')}`}
  // 			key={style.key}
  // 			// eslint-disable-next-line react/no-danger
  // 			dangerouslySetInnerHTML={{ __html: style.css }}
  // 		/>
  // 	);
  // });

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props: any) {
          return <App serverEmotionCache={cache} {...props} />;
        },
    });

  return {
    ...initialProps,
    emotionStyleTags: styles,
  };
};
