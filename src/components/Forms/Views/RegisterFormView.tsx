import { useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Box } from '@mui/material';
import Link from 'components/Basic/Link';
import FormController from 'components/Forms/Controller/FormController';

type PropTypes = {
	onSubmit: Function,
}

const RegisterFormView = ({ onSubmit }: PropTypes) => {
	const { t } = useTranslation();
	const { locale } = useRouter();

	/* TODO:
		Move this function to translation files
		and find a way to put html tags in translation labels
	*/
	const TermsLabel = useCallback(() => (
		<Box sx={{ display: 'flex', flexDirection: locale === 'en' ? 'row-reverse' : 'row' }}>
			<Link href="/terms" color="info.main">{t('terms_and_conditions')}</Link>
			{'\u00A0\u00A0'}
			{t('action.confirm_terms_and_conditions')}
			{'\u00A0'}
		</Box>
	), [locale, t]);

	return (
		<FormController
			submitLabel={t('action.next')}
			onSubmit={onSubmit}
			inputs={[
				{
					name: 'mobile',
					label: t('form.mobile'),
					type: 'mobile',
				},
				{
					name: 'nationalCode',
					label: t('form.national_code'),
					type: 'text',
				},
				{
					name: 'referralCode',
					label: t('form.referral_code'),
					type: 'text',
					optional: true,
				},
				{
					name: 'terms',
					label: TermsLabel,
					type: 'checkbox',
				},
			]}
		/>
	);
};

export default RegisterFormView;
