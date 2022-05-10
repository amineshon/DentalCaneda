import { useState, useCallback } from 'react';
import { useTranslation } from 'next-i18next';

import VerificationFormView from 'components/Forms/Views/VerificationFormView';
import Button from 'components/Basic/Button';
import Timer from 'components/Basic/Timer';

type PropTypes = {
	onSubmit: Function,
}

const VerificationTemplate = (
	{ onSubmit }
	: PropTypes,
) => {
	const { t } = useTranslation();
	const [timerFinished, setTimerFinished] = useState(false);

	const handleFinishRetryTimer = useCallback(() => {
		setTimerFinished(true);
	}, []);

	const onRetry = useCallback(() => {
		setTimerFinished(true);
	}, []);

	const onChangeMethod = useCallback(() => {
		setTimerFinished(true);
	}, []);

	return (
		<>
			<VerificationFormView onSubmit={onSubmit} />

			<Button
				variant="text"
				onClick={onRetry}
				sx={{ mt: 1, textDecoration: 'underline', display: 'block' }}
			>
				{t('action.send_new_code')}
				{' '}
				{!timerFinished ? (
					<Timer
						initialSeconds={120}
						onFinish={handleFinishRetryTimer}
						formatter={(num: any) => `(${t('after_elapsed_time', { value: num })})`}
					/>
				) : ''}
			</Button>

			<Button variant="text" onClick={onChangeMethod}>
				{t('action.send_code_via_call')}
			</Button>
		</>
	);
};

export default VerificationTemplate;
