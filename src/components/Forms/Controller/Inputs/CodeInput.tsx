import React from 'react';
import CodeInput from 'components/Basic/CodeInput';
import type { InputPropTypes } from '../type';

const TextField = (
	{ input, field: { onChange }, fieldState: { error } }
	: InputPropTypes,
) => (
	<CodeInput
		helperText={error ? error.message : null}
		error={!!error}
		onChange={onChange}
		onComplete={input.onComplete}
	/>
);

export default TextField;
