import PopUp from './PopUp';
import { PopupPropsType } from './PopUp';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the Button component works properly', () => {
  test('To match snapshot', () => {
    const popUpProps: PopupPropsType = {
      handleCancel: () => {},
      handleConfirm: () => {}
    };

    const element = render(<PopUp {...popUpProps} />);
    expect(element).toMatchSnapshot();
  });

  test('If handleConfirm gets triggered correctly', () => {
    const handleConfirm = jest.fn();
    const popUpProps: PopupPropsType = {
      handleCancel: () => {},
      handleConfirm
    };

    render(<PopUp {...popUpProps} />);
    const element = screen.getByTestId('popup-test1');
    fireEvent.click(element);
    expect(handleConfirm).toBeCalled();
  });

  test('If handleConfirm gets triggered correctly', () => {
    const handleCancel = jest.fn();
    const popUpProps: PopupPropsType = {
      handleConfirm: () => {},
      handleCancel
    };

    render(<PopUp {...popUpProps} />);
    const element = screen.getByTestId('popup-test2');
    fireEvent.click(element);
    expect(handleCancel).toBeCalled();
  });
});
