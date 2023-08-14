import Input from './Input';
import { InputProsType } from './Input';
import { render, screen } from '@testing-library/react';

describe('Test if the Input component works properly', () => {
  test('If value set correctly', () => {
    const inputProps: InputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      onChange: () => {}
    };

    render(<Input {...inputProps} />);
    const element = screen.getByTestId('input-test');
    expect(element.getAttribute('value')).toBe('value');
  });
});
