/* global describe,it */
import { render, fireEvent } from '@testing-library/react';
import Input from '../../src/components/atoms/Input/Input';

describe('when input render', () => {
  const component = render(<Input />);
  const input = component.getByRole('textbox');

  it('change text works fine', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });
});
