import { useState, useEffect } from 'react';

type PropTypes = {
	initialSeconds: Number,
	onFinish: Function,
	formatter: Function,
};

const timeFormatter = (initialSeconds: number) => {
	let minutes = Math.floor(initialSeconds / 60);
	let seconds = initialSeconds % 60;

	if (minutes < 10) minutes = `0${minutes}`;
	if (seconds < 10) seconds = `0${seconds}`;

	return `${minutes}:${seconds}`;
};

// Timer Component
const Timer = ({ initialSeconds, onFinish, formatter }: PropTypes) => {
	const [seconds, setSeconds] = useState(initialSeconds);

	useEffect(() => {
		let interval: Function;

		if (seconds > 0) {
			if (!interval) {
				interval = setInterval(() => {
					setSeconds((s: number) => s - 1);
				}, 1000);
			}
		}
		else if (onFinish) {
			onFinish();
		}
		return () => clearInterval(interval);
	});

	const timeFormatted = timeFormatter(seconds);
	const valueFormatted = formatter(timeFormatted);

	return valueFormatted;
};

export default Timer;
