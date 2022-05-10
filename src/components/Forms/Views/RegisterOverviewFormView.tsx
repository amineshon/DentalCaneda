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
					name: 'firstname',
					label: t('form.firstname'),
					type: 'text',
					disabled: true,
				},
				{
					name: 'lastname',
					label: t('form.lastname'),
					type: 'text',
					disabled: true,
				},
				{
					name: 'card',
					label: t('form.bank_card_number'),
					type: 'text',
					disabled: true,
					mask: '0000  -  0000  -  0000  -  0000',
					maskDefinitions: {
						'#': /[1-9]/,
					},
				},
				{
					name: 'sheba',
					label: t('form.bank_sheba_number'),
					type: 'text',
					disabled: true,
					mask: 'IR000000000000000000000000',
					maskDefinitions: {
						'#': /[1-9]/,
					},
				},
				{
					name: 'email',
					label: t('form.email'),
					type: 'email',
					optional: true,
				},
			]}
		/>
	);
};

export default CardAndPasswordFormView;
