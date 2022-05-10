import React from 'react';
import { useTranslation } from 'next-i18next';
import Button from '../Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';

interface InputButtonProps {
  //   name: string;
  //   label?: string | number;
  //   className?: string;
}

// InputProps + Button Component
const InputButton = ({}: InputButtonProps) => {
  const { t } = useTranslation();
  return (
    <InputButtonComponent>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <InputInputButton
          id="outlined-basic"
          label={t('input-button.input')}
          variant="outlined"
        />
      </Box>

      <ButtonInputButton
        children={t('input-button.button')}
        onClick={() => console.log()}
      />
    </InputButtonComponent>
  );
};
const InputButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 40px !important;
`;

const ButtonInputButton = styled(Button)`
  background: #15c15d;
  border-radius: 4px;
  width: 99px;
  height: 56px;
  padding: 8px 14px;
`;
const InputInputButton = styled(TextField)`
  background-color: #fff;
  .css-rtl-av9tmb-MuiFormLabel-root-MuiInputLabel-root {
    color: #000;
  }
`;

export default InputButton;
