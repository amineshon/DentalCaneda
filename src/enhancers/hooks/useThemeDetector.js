import { useEffect, useState } from 'react';

/*
	based on this article we can check user default theme
	https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
*/

const useThemeDetector = () => {
	const getCurrentTheme = () => (typeof window !== 'undefined'
		? window.matchMedia('(prefers-color-scheme: dark)').matches
		: false);

	const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
	const mqListener = (e => {
		setIsDarkTheme(e.matches);
	});

	useEffect(() => {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
		darkThemeMq.addListener(mqListener);
		return () => darkThemeMq.removeListener(mqListener);
	}, []);
	return isDarkTheme;
};

export default useThemeDetector;
