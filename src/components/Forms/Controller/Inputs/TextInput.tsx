import MaterialTextField from '@mui/material/TextField';
import type { InputPropTypes } from '../type';

const TextInput = ({
  input,
  field: { onChange },
  fieldState: { error },
}: InputPropTypes) => (
  <MaterialTextField
    label={input.label}
    disabled={input.disabled}
    onChange={onChange}
    error={!!error}
    type={input.type}
    helperText={error ? error.message : null}
    multiline={input.multiline}
    maxRows={input.multiline ? 5 : ''}
    sx={input.style}
  />
);

export default TextInput;
