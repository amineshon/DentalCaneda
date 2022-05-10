import React, { memo } from 'react';

import { Spinner, Dots } from './style';

type PropTypes = {
	color: String,
	size: Number,
	strokeWidth: Number,
	type: 'spin' | 'bar' | 'dots',
};

const LoadingIndicator = ({
	color, size, strokeWidth, type,
}: PropTypes) => {
	let finalColor = color;
	if (color === 'light') {
		finalColor = '#fff';
	}
	else if (color === 'dark') {
		finalColor = '#333';
	}

	if (type === 'spin') {
		return (
			<Spinner color={finalColor} size={size} className="loader">
				<svg width="100%" height="100%">
					<circle
						cx={size / 2}
						cy={size / 2}
						r={size / 2 - strokeWidth}
						fill="none"
						strokeWidth={strokeWidth}
					/>
				</svg>
			</Spinner>
		);
	}

	return (
		<Dots color={finalColor} size={size} className="loader">
			<div />
			<div />
			<div />
		</Dots>
	);
};

export default memo(LoadingIndicator);
