import Button from './Button';
import { ButtonProsType } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the Button component works properly', () => {
  test('To match snapshot', () => {
    const buttonProps: ButtonProsType = {
      type: 'primary',
      label: 'Button'
    };

    const element = render(<Button {...buttonProps} />);
    expect(element).toMatchSnapshot();
  });

  test('If label rendered correctly', () => {
    const buttonProps: ButtonProsType = {
      type: 'primary',
      label: 'Button'
    };

    render(<Button {...buttonProps} />);
    const element = screen.getByTestId('button-test');
    if (element) expect(element).toHaveTextContent('Button');
  });

  test('If type applied correctly', () => {
    const buttonProps: ButtonProsType = {
      type: 'primary',
      label: 'Button'
    };

    render(<Button {...buttonProps} />);
    const element = screen.getByTestId('button-test');
    if (element) expect(element).toHaveClass('primary');
  });

  test('If onclick gets triggered correctly', () => {
    const onClick = jest.fn();
    const buttonProps: ButtonProsType = {
      type: 'primary',
      label: 'Button',
      onClick
    };

    render(<Button {...buttonProps} />);
    const element = screen.getByTestId('button-test');
    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
});
