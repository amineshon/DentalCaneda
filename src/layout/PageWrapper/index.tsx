import React, { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

// libs and consts
import { routeConfig, routeSetting, seoConfig } from 'configs';

// styles
import Header from '../Header';
import Footer from '../Footer';

import { Root, Content } from './style';

type Props = {
	children: React.ReactElement
};

const PageWrapper = ({ children }: Props) => {
	// const { query } = useRouter();
	const { t } = useTranslation();

	const router = useRouter();
	const routeObject = useMemo(
		() => {
			const routeKey = Object.keys(routeConfig).find(r => routeConfig[r]?.href === router.route);
			return { routeKey, routeConfig: routeConfig[routeKey as string] };
		},
		[router],
	);

	const settings = {
		...routeSetting,
		...routeObject?.routeConfig,
	};

	settings.header = {
		...routeSetting.header,
		...routeObject?.routeConfig?.header,
	};

	settings.footer = {
		...routeSetting.footer,
		...routeObject?.routeConfig?.footer,
	};

	const headerVisible = settings.header.visible;

	const pageTitle = routeObject.routeKey ? `${t(`title.${routeObject.routeKey}`)}` : '';
	const finalTitle = `${pageTitle} | ${t('bitmax')}`;

	return (
		<Root headerVisible={headerVisible}>
			<DefaultSeo
				title={finalTitle}
				description={t('label.bitmax')}
				additionalMetaTags={seoConfig.additionalMetaTags}
				openGraph={seoConfig.openGraph}
				twitter={seoConfig.twitter}
			/>

			{settings.header.visible && <Header />}

			<Content headerVisible={headerVisible}>
				{children}
			</Content>

			{settings.footer.visible && <Footer />}
		</Root>
	);
};

export default PageWrapper;
