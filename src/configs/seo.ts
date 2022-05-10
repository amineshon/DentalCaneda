import palette from 'theme/palette';

const seo = {
	additionalMetaTags: [
		{ name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		{ name: 'theme-color', content: palette.common.primary.main },
	],
	openGraph: {
		type: 'website',
		locale: 'fa_IR',
	},
	twitter: {
		site: '',
		creator: '',
		cardType: '',
	},
};

export default seo;
