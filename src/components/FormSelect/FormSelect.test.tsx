import FormSelect from './FormSelect';
import { FormSelectProsType } from './FormSelect';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the FormInput component works properly', () => {
  test('To match snapshot', () => {
    const formSelectProps: FormSelectProsType = {
      value: 'value1',
      label: 'label',
      options: ['value1', 'value2', 'value3'],
      onChange: () => {}
    };

    const element = render(<FormSelect {...formSelectProps} />);
    expect(element).toMatchSnapshot();
  });

  test('If label rendered correctly', () => {
    const formSelectProps: FormSelectProsType = {
      value: 'value1',
      label: 'label',
      options: ['value1', 'value2', 'value3'],
      onChange: () => {}
    };

    render(<FormSelect {...formSelectProps} />);
    const element = screen.getByTestId('formSelect-label-test');
    if (element) expect(element).toHaveTextContent('label');
  });

  // test('If value gets set correctly', () => {
  //   const formSelectProps: FormSelectProsType = {
  //     value: 'value1',
  //     label: 'label',
  //     options: ['value1', 'value2', 'value3'],
  //     onChange: () => {}
  //   };

  //   render(<FormSelect {...formSelectProps} />);
  //   const element = screen.getByTestId('formSelect-select-test');
  //   if (element) expect(element).toHaveAttribute('value', 'value1');
  // });
});
