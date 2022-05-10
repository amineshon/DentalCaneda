import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const VerificationFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();

	return (
		<FormController
			submitLabel={t('action.next')}
			onSubmit={onSubmit}
			inputs={[
				{
					name: 'code',
					label: t('form.code'),
					type: 'code',
				},
			]}
		/>
	);
};

export default VerificationFormView;
