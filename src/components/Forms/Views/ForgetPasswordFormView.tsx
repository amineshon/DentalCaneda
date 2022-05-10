import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const ForgetPasswordFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();

	return (
		<FormController
			submitLabel={t('action.next')}
			onSubmit={onSubmit}
			inputs={[
				{
					name: 'nationalCode',
					label: t('form.national_code'),
					type: 'text',
				},
				{
					name: 'chanel',
					title: t('forget-password.send_verification_code'),
					type: 'radio',
					defaultValue: 'sms',
					options: [
						{ value: 'sms', label: t('form.sms') },
						{ value: 'email', label: t('form.email') },
					],
				},
			]}
		/>
	);
};

export default ForgetPasswordFormView;
