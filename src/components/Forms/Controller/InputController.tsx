import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';

// Components
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

import TextInput from './Inputs/TextInput';
import PasswordInput from './Inputs/PasswordInput';
import CodeInput from './Inputs/CodeInput';
import RadioInput from './Inputs/RadioInput';
import CheckboxInput from './Inputs/CheckboxInput';
import MaskInput from './Inputs/MaskInput';

import type { InputControllerPropTypes } from './type';

// Types
const InputController = ({ input, control }: InputControllerPropTypes) => {
	const Component = useMemo(() => {
		if (input.mask) return MaskInput;
		if (input.type === 'password') return PasswordInput;
		if (input.type === 'code') return CodeInput;
		if (input.type === 'radio') return RadioInput;
		if (input.type === 'checkbox') return CheckboxInput;
		return TextInput;
	}, [input.type, input.mask]);

	return (
		<FormControl key={input.name} className="formControl">
			{input.title && <Typography variant="h6" sx={{ fontWeight: '700', mb: 2 }}>{input.title}</Typography>}

			<Controller
				key={input.name}
				name={input.name}
				control={control}
				defaultValue={input.defaultValue}
				render={props => <Component {...props} input={input} />}
				rules={input.rules}
			/>
		</FormControl>
	);
};

export default InputController;
