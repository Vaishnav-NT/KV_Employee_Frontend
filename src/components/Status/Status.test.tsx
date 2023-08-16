import Status from './Status';
import { StatusPropsType } from './Status';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the Status component works properly', () => {
  test('To match snapshot', () => {
    const statusProps: StatusPropsType = {
      status: 'Active'
    };

    const element = render(<Status {...statusProps} />);
    expect(element).toMatchSnapshot();
  });

  test('If proper text displayed', () => {
    const statusProps: StatusPropsType = {
      status: 'Active'
    };

    render(<Status {...statusProps} />);
    const element = screen.getByTestId('status-test');
    if (element) expect(element).toHaveTextContent('Active');
  });
});
