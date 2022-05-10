import React, { Component } from 'react';

// Libs

// Styles
import Wrapper from './style';

// Constants
const KEY_CODE = {
	backspace: 8,
	left: 37,
	up: 38,
	right: 39,
	down: 40,
};

/* ReactCodeInput Component ================================== */
class ReactCodeInput extends Component {
	constructor(props) {
		super(props);
		const { fields, values } = props;
		let vals;

		// let autoFocusIndex = 0;
		if (values && values.length) {
			vals = [];
			for (let i = 0; i < fields; i += 1) {
				vals.push(values[i] || '');
			}
			// autoFocusIndex = values.length >= fields ? 0 : values.length;
		}
		else {
			vals = Array(fields).fill('');
		}
		this.state = {
			values: vals,
			// autoFocusIndex,
		};

		this.iRefs = [];
		for (let i = 0; i < fields; i += 1) {
			this.iRefs.push(React.createRef());
		}
		this.id = +new Date();

		// this.handleKeys = Array(fields).fill(false);
	}

	// eslint-disable-next-line react/destructuring-assignment
	triggerChange = (values = this.state.values) => {
		const { onChange, onComplete, fields } = this.props;
		const val = values.join('');
		if (onChange) onChange(val);
		if (onComplete && val.length >= fields) {
			onComplete(val);
			this.iRefs[fields - 1].current.blur();
		}
	};

	onChange = e => {
		const index = parseInt(e.target.dataset.id, 10);
		const { type } = this.props;
		if (type === 'number') {
			e.target.value = e.target.value.replace(/[^\d]/gi, '');
		}
		// this.handleKeys[index] = false;
		if (e.target.value === '' || (type === 'number' && !e.target.validity.valid)) {
			return;
		}

		const { fields } = this.props;
		let next;
		const { value } = e.target;
		let { values } = this.state;

		values = Object.assign([], values);
		if (value.length > 1) {
			let nextIndex = value.length + index - 1;
			if (nextIndex >= fields) {
				nextIndex = fields - 1;
			}
			next = this.iRefs[nextIndex];
			const split = value.split('');
			split.forEach((item, i) => {
				const cursor = index + i;
				if (cursor < fields) {
					values[cursor] = item;
				}
			});
			this.setState({ values });
		}
		else {
			next = this.iRefs[index + 1];
			values[index] = value;
			this.setState({ values });
		}

		if (next) {
			next.current.focus();
			next.current.select();
		}

		this.triggerChange(values);
	};

	onKeyDown = e => {
		const index = parseInt(e.target.dataset.id, 10);
		const prevIndex = index - 1;
		const nextIndex = index + 1;
		const prev = this.iRefs[prevIndex];
		const next = this.iRefs[nextIndex];
		switch (e.keyCode) {
			case KEY_CODE.backspace: {
				e.preventDefault();
				const { values } = this.state;
				const vals = [...values];
				if (values[index]) {
					vals[index] = '';
					this.setState({ values: vals });
					this.triggerChange(vals);
				}
				else if (prev) {
					vals[prevIndex] = '';
					prev.current.focus();
					this.setState({ values: vals });
					this.triggerChange(vals);
				}
				break;
			}

			case KEY_CODE.left:
				e.preventDefault();
				if (prev) {
					prev.current.focus();
				}
				break;

			case KEY_CODE.right:
				e.preventDefault();
				if (next) {
					next.current.focus();
				}
				break;

			case KEY_CODE.up:
			case KEY_CODE.down:
				e.preventDefault();
				break;

			default:
				// this.handleKeys[index] = true;
				break;
		}
	};

	onFocus = e => {
		e.target.select(e);
	};

	render() {
		const { values } = this.state;
		const { fields, error } = this.props;
		const {
			type,
			disabled,
			required,
		} = this.props;

		return (
			<Wrapper fields={fields} error={error}>
				{values.map((value, index) => (
					<input
						key={`${this.id}-${index}`} // eslint-disable-line react/no-array-index-key
						data-id={index}
						ref={this.iRefs[index]}
						value={value}
						type={type === 'number' ? 'tel' : type}
						pattern={type === 'number' ? '[0-9]*' : null}
						onChange={this.onChange}
						onKeyDown={this.onKeyDown}
						onFocus={this.onFocus}
						disabled={disabled}
						required={required}
					/>
				))}
			</Wrapper>
		);
	}
}

ReactCodeInput.defaultProps = {
	type: 'number',
	onChange: null,
	onComplete: null,
	fields: 6,
	autoFocus: true,
	values: null,
	disabled: false,
	required: false,
	loading: false,
};

/* Export ================================== */
export default ReactCodeInput;
