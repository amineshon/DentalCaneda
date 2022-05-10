import {
	createTheme,
	responsiveFontSizes,
} from '@mui/material/styles';

// theme configs
import components from './components';
import shape from './shape';
import palette from './palette';
import typography from './typography';

// types
import type { ThemeObject } from './type';

const configTheme = ({
	fontFamily,
	direction,
	mode,
	responsiveFont = true,
}: ThemeObject) => {
	let theme = createTheme({
		direction,
		shape,
		palette: {
			...palette.common,
			...palette[mode],
			mode,
		},
		typography: {
			...typography,
			fontFamily,
		},
	});

	// wrap components with theme
	theme = createTheme(theme, {
		components: components(theme),
	});

	if (responsiveFont) {
		theme = responsiveFontSizes(theme);
	}

	return theme;
};

export default configTheme;
