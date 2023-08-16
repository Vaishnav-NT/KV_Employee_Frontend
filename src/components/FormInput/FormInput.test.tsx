import FormInput from './FormInput';
import { FormInputProsType } from './FormInput';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the FormInput component works properly', () => {
  test('To match snapshot', () => {
    const formInputPros: FormInputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      placeholder: 'placeholder',
      showLabel: true,
      readonly: false,
      onChange: () => {}
    };

    const element = render(<FormInput {...formInputPros} />);
    expect(element).toMatchSnapshot();
  });

  test('If label rendered correctly when showLabel set to true', () => {
    const formInputPros: FormInputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      placeholder: 'placeholder',
      showLabel: true,
      readonly: false,
      onChange: () => {}
    };

    render(<FormInput {...formInputPros} />);
    const element = screen.getByTestId('formInput-label-test');
    if (element) expect(element).toHaveTextContent('label');
  });

  // test('If label rendered not displayed when showLabel set to false', () => {
  //   const formInputPros: FormInputProsType = {
  //     value: 'value',
  //     onChange: () => {},
  //     type: 'text',
  //     label: 'label',
  //     placeholder: 'placeholder',
  //     showLabel: false,
  //     readonly: false
  //   };

  //   render(<FormInput {...formInputPros} />);
  //   const element = screen.getByTestId('formInput-label-test');
  //   expect(element).toThrow();
  // });

  test('If type applied correctly', () => {
    const formInputPros: FormInputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      placeholder: 'placeholder',
      showLabel: true,
      readonly: false,
      onChange: () => {}
    };

    render(<FormInput {...formInputPros} />);
    const element = screen.getByTestId('formInput-input-test');
    if (element) expect(element).toHaveAttribute('type', 'text');
  });

  test('If value gets set correctly', () => {
    const formInputPros: FormInputProsType = {
      value: 'value',
      type: 'text',
      label: 'label',
      placeholder: 'placeholder',
      showLabel: true,
      readonly: false,
      onChange: () => {}
    };

    render(<FormInput {...formInputPros} />);
    const element = screen.getByTestId('formInput-input-test');
    if (element) expect(element).toHaveAttribute('value', 'value');
  });

  // test('If readonly property gets set correctly', () => {
  //   const formInputPros: FormInputProsType = {
  //     value: 'value',
  //     type: 'text',
  //     label: 'label',
  //     placeholder: 'placeholder',
  //     showLabel: true,
  //     readonly: true
  //   };

  //   render(<FormInput {...formInputPros} />);
  //   const element = screen.getByTestId('formInput-input-test');
  //   if (element) expect(element).toHaveAttribute('readOnly', true);
  // });

  // test('If onChange gets triggered correctly', () => {
  //   const onChange = jest.fn();
  //   const formInputPros: FormInputProsType = {
  //     value: 'value',
  //     onChange,
  //     type: 'text',
  //     label: 'label',
  //     placeholder: 'placeholder',
  //     showLabel: true,
  //     readonly: false
  //   };

  //   render(<FormInput {...formInputPros} />);
  //   const element = screen.getByTestId('formInput-input-test');
  //   fireEvent.change(element);
  //   expect(onChange).toBeCalled();
  // });
});
