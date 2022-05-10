import { useTranslation } from 'next-i18next';

import FormController from 'components/Forms/Controller/FormController';
import { useTheme } from '@mui/material/styles';

type PropTypes = {
  onSubmit: Function;
};

const ContactUsFormView = ({ onSubmit }: PropTypes) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <FormController
      submitLabel={`${t('action.send_message')}`}
      onSubmit={onSubmit}
      buttonStyle={{
        backgroundColor: '#FCB400',
        '&:hover': {
          backgroundColor: '#FCB400',
        },
      }}
      inputs={[
        {
          name: 'name',
          label: `${t('form.firstname')}`,
          type: 'text',
          style: {
            backgroundColor: (theme) => theme.palette.background.input,
            color: (theme) => theme.palette.text.primary,
            borderRadius: '4px',
            '& fieldset, label': {
              border: 'none',
              color: (theme) => theme.palette.text.primary,
            },
          },
        },
        {
          name: 'email',
          label: `${t('form.email')}`,
          type: 'email',
          style: {
            backgroundColor: (theme) => theme.palette.background.input,
            color: (theme) => theme.palette.text.primary,
            borderRadius: '4px',
            '& fieldset, label': {
              border: 'none',
              color: (theme) => theme.palette.text.primary,
            },
          },
        },
        {
          name: 'mobile',
          label: `${t('form.mobile')}`,
          type: 'mobile',
          style: {
            backgroundColor: (theme) => theme.palette.background.input,
            color: (theme) => theme.palette.text.primary,
            borderRadius: '4px',
            '& fieldset, label': {
              border: 'none',

              color: (theme) => theme.palette.text.primary,
            },
          },
        },
        {
          name: 'text',
          label: `${t('form.text')}`,
          type: 'text',
          multiline: true,
          style: {
            backgroundColor: (theme) => theme.palette.background.input,
            borderRadius: '4px',
            height: '200px',
            color: (theme) => theme.palette.text.primary,
            '& fieldset, label': {
              border: 'none',
              color: (theme) => theme.palette.text.primary,
            },
          },
        },
      ]}
    />
  );
};

export default ContactUsFormView;
