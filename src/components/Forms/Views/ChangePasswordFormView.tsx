import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const ChangePasswordFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();

	return (
		<FormController
			submitLabel={t('action.submit')}
			onSubmit={onSubmit}
			inputs={[
				{
					name: 'password',
					label: t('form.password'),
					type: 'password',
				},
				{
					name: 'confirmPassword',
					label: t('form.password_confirm'),
					type: 'password',
				},
			]}
		/>
	);
};

export default ChangePasswordFormView;
