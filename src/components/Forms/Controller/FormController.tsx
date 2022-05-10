import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

import { appConfig } from 'configs';

// Components
import Button from 'components/Basic/Button';
import InputController from './InputController';
import type { FormControllerProps } from './type';
import { Root } from './styles';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
  ssr: false,
});

// Types

const FormController = ({
  inputs,
  submitLabel,
  onSubmit,
  recaptchaEnabled = false,
  buttonStyle,
}: FormControllerProps) => {
  const { handleSubmit, control, getValues } = useForm();
  const recaptchaRef = React.useRef();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const submitForm = useCallback(
    async (data: any) => {
      const recaptcha = null;
      if (recaptchaEnabled) {
        // recaptcha = await recaptchaRef?.current?.executeAsync();
      }

      setLoading(true);
      setTimeout(() => {
        onSubmit(data, recaptcha);
      }, 2000);
    },
    [onSubmit, recaptchaEnabled],
  );

  const rules = useMemo(
    () => ({
      password: {
        required: {
          value: true,
          message: t('form.error.field_is_required', {
            field: t('form.password'),
          }),
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g,
          message: t('form.error.password_is_not_valid'),
        },
      },
      mobile: {
        required: {
          value: true,
          message: t('form.error.field_is_required', {
            field: t('form.mobile'),
          }),
        },
        pattern: {
          value: /^[0]*[9][0-9][0-9][0-9]{7}$/g,
          message: t('form.error.field_is_not_valid', {
            field: t('form.mobile'),
          }),
        },
      },
      code: {
        required: {
          value: true,
          message: t('form.error.field_is_required', { field: t('form.code') }),
        },
      },
      nationalCode: {
        required: {
          value: true,
          message: t('form.error.field_is_required', {
            field: t('form.national_code'),
          }),
        },
        pattern: {
          value: /^[0-9]{10}$/g,
          message: t('form.error.field_is_not_valid', {
            field: t('form.national_code'),
          }),
        },
      },
      terms: {
        required: {
          value: true,
          message: t('form.error.field_is_required', {
            field: t('form.national_code'),
          }),
        },
      },
      confirmPassword: {
        required: {
          value: true,
          message: t('form.error.field_is_required', {
            field: t('form.password_confirm'),
          }),
        },
        validate: (v) => {
          const { password } = getValues();
          return password === v || t('form.error.passwords_mismatch');
        },
      },
    }),
    [getValues, t],
  );

  return (
    <Root onSubmit={handleSubmit(submitForm)}>
      {inputs.map((input) => (
        <InputController
          key={input.name}
          control={control}
          input={{
            onComplete: handleSubmit(submitForm), // for code input
            ...input,
            label: input.optional
              ? `${input.label} (${t('form.optional')})`
              : input.label,
            rules: {
              ...rules[input.name],
              ...input.rules,
            },
          }}
        />
      ))}

      {recaptchaEnabled && appConfig.google_recaptcha_sitekey ? (
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={appConfig.google_recaptcha_sitekey}
        />
      ) : null}

      <div className="footer">
        <Button
          className="submitButton"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          isLoading={loading}
          sx={buttonStyle}
        >
          {submitLabel}
        </Button>
      </div>
    </Root>
  );
};

export default FormController;
