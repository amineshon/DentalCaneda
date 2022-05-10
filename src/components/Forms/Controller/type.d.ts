import React from 'react';
import type { UseControllerReturn, Control } from 'react-hook-form/dist/types';

type OptionType = {
  value: string;
  label: string;
};

interface InputType {
  name: string;
  type:
    | 'text'
    | 'email'
    | 'select'
    | 'mobile'
    | 'file'
    | 'radio'
    | 'checkbox'
    | 'password'
    | 'code';
  defaultValue?: string | boolean | number;
  label?: string | React.ReactNode | Function;
  options?: Record<OptionType>;
  rules?: object;
  title?: string;
  optional?: boolean; // explicity tell the component to show optional label
  disabled?: boolean;
  mask?: String;
  maskDefinitions?: object;
  onComplete?: Function;
  multiline?: boolean;
  style?: SxProps<Theme>;
}

export type InputControllerPropTypes = {
  control: Control;
  input: InputType;
};

export interface InputPropTypes extends UseControllerReturn {
  input: InputType;
}

export type FormControllerProps = {
  inputs: InputType[];
  submitLabel: String;
  onSubmit: Function;
  recaptchaEnabled?: Boolean;
  buttonStyle?: SxProps<Theme>;
};
