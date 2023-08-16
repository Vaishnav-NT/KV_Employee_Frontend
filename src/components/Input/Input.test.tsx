import Input from './Input';
import { InputProsType } from './Input';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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

  test('If type applied correctly', () => {
    const inputPros: InputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      onChange: () => {}
    };

    render(<Input {...inputPros} />);
    const element = screen.getByTestId('input-test');
    if (element) expect(element).toHaveAttribute('type', 'text');
  });

  test('If value gets set correctly', () => {
    const inputPros: InputProsType = {
      value: 'value',
      type: 'text',
      label: 'label'
    };

    render(<Input {...inputPros} />);
    const element = screen.getByTestId('input-test');
    if (element) expect(element).toHaveAttribute('value', 'value');
  });

  test('If onChange gets triggered correctly', () => {
    const onChange = jest.fn();
    const inputPros: InputProsType = {
      value: 'value',
      onChange,
      type: 'text',
      label: 'label'
    };

    render(<Input {...inputPros} />);
    const element = screen.getByTestId('input-test');
    fireEvent.change(element);
    expect(onChange).toBeCalled();
  });
});
