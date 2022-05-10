import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const CardAndPasswordFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();

	return (
		<FormController
			submitLabel={t('action.next')}
			onSubmit={onSubmit}
			inputs={[
				{
					name: 'card',
					label: t('form.bank_card_number'),
					type: 'text',
					mask: '0000  -  0000  -  0000  -  0000',
					maskDefinitions: {
						'#': /[1-9]/,
					},
					rules: {
						required: { value: true, message: t('form.error.field_is_required', { field: t('form.bank_card_number') }) },
						minLength: { value: 31, message: t('form.error.field_is_not_valid', { field: t('form.bank_card_number') }) },
					},
				},
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

export default CardAndPasswordFormView;
