import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const LoginFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();

	return (
		<FormController
			submitLabel={t('action.next')}
			onSubmit={onSubmit}
			recaptchaEnabled
			inputs={[
				{
					name: 'mobile',
					label: t('form.mobile'),
					type: 'mobile',
				},
				{
					name: 'password',
					label: t('form.password'),
					type: 'password',
				},
			]}
		/>
	);
};

export default LoginFormView;
