import React from 'react';
import ReactNumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import type { InputPropTypes } from '../type';

// eslint-disable-next-line react/display-name
const NumberFormat = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <ReactNumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({ target: { name: props.name, value: values.value } });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

const NumberFormatInput = ({
  input,
  field: { onChange, value },
  fieldState: { error },
}: InputPropTypes) => (
  <TextField
    name={input.name}
    label={input.label}
    onChange={onChange}
    disabled={input.disabled}
    // style={{ direction: 'ltr' }}
    error={!!error}
    helperText={error ? error.message : null}
    InputProps={{
      inputComponent: NumberFormat,
      value,
      inputProps: {
        input,
      },
    }}
  />
);

export default NumberFormatInput;
